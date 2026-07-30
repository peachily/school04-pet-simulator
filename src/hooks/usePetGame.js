import { useEffect, useRef, useState } from "react";
import { pickDifferent, pickRandom } from "../utils/random";

export function usePetGame(pet) {
  const [activity, setActivity] = useState(null);
  const [hearts, setHearts] = useState(0);
  const [request, setRequest] = useState(() => pickRandom(pet.requests));
  const [reaction, setReaction] = useState(null);
  const [reactionKey, setReactionKey] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isHappy, setIsHappy] = useState(false);
  const [interactionMode, setInteractionMode] = useState(null);
  const [stagePosition, setStagePosition] = useState({ x: 50, y: 58 });
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const achievementTimers = useRef([]);
  const activityTimers = useRef([]);

  const currentActivity = activity ? pet.activities[activity] : null;

  useEffect(() => {
    return () => {
      achievementTimers.current.forEach(clearTimeout);
      activityTimers.current.forEach((timer) => {
        clearTimeout(timer);
        clearInterval(timer);
      });
    };
  }, []);

  const clearAchievement = () => {
    achievementTimers.current.forEach(clearTimeout);
    achievementTimers.current = [];
    setShowAchievement(false);
  };

  const clearActivityTimers = () => {
    activityTimers.current.forEach((timer) => {
      clearTimeout(timer);
      clearInterval(timer);
    });
    activityTimers.current = [];
  };

  const returnHome = () => {
    clearAchievement();
    clearActivityTimers();
    setActivity(null);
    setReaction(null);
    setIsHappy(false);
    setInteractionMode(null);
    setSelectedOption(null);
  };

  const startActivity = (activityId) => {
    clearAchievement();
    setReaction(null);
    setIsHappy(false);
    setReactionKey((current) => current + 1);
    if (activityId !== request.activityId) return;
    clearActivityTimers();
    setActivity(activityId);
    setInteractionMode(null);
    setSelectedOption(null);

    const nextActivity = pet.activities[activityId];
    if (nextActivity.interaction === "pet-timer") {
      setInteractionMode("petting");
      setStagePosition({ x: 50, y: 50 });
      setSecondsLeft(nextActivity.duration);
      setReaction(nextActivity.instruction);

      const countdown = setInterval(() => {
        setSecondsLeft((current) => Math.max(current - 1, 0));
      }, 1000);
      const finishActivity = setTimeout(() => {
        clearInterval(countdown);
        completeRequest({ reaction: nextActivity.reaction });
      }, nextActivity.duration * 1000);
      activityTimers.current = [countdown, finishActivity];
    }
  };

  const completeRequest = (option) => {
    const completedHearts = hearts === 4;
    setReaction(option.reaction);
    setIsHappy(true);
    setInteractionMode("completed");
    setHearts((current) => Math.min(current + 1, 5));
    setReactionKey((current) => current + 1);
    setRequest((current) => pickDifferent(
      pet.requests,
      current,
      (item) => `${item.activityId}:${item.optionId}`,
    ));

    if (completedHearts) {
      achievementTimers.current.forEach(clearTimeout);
      achievementTimers.current = [setTimeout(() => setShowAchievement(true), 1100)];
    }
  };

  const selectOption = (option) => {
    if (option.id !== request.optionId) {
      setReaction(null);
      setIsHappy(false);
      setReactionKey((current) => current + 1);
      return;
    }

    setSelectedOption(option);

    if (currentActivity.interaction === "place") {
      setInteractionMode("placingToy");
      setReaction(currentActivity.instruction);
      setIsHappy(false);
      setReactionKey((current) => current + 1);
      return;
    }

    if (currentActivity.interaction === "drag-timer") {
      clearActivityTimers();
      setInteractionMode("walking");
      setStagePosition({ x: 50, y: 58 });
      setSecondsLeft(currentActivity.duration);
      setReaction(currentActivity.instruction);
      setIsHappy(false);
      setReactionKey((current) => current + 1);

      const countdown = setInterval(() => {
        setSecondsLeft((current) => Math.max(current - 1, 0));
      }, 1000);
      const finishActivity = setTimeout(() => {
        clearInterval(countdown);
        completeRequest(option);
      }, currentActivity.duration * 1000);
      activityTimers.current = [countdown, finishActivity];
      return;
    }

    completeRequest(option);
  };

  const placeItem = (position) => {
    if (interactionMode !== "placingToy" || !selectedOption) return;
    setStagePosition(position);
    setInteractionMode("playing");
    setReaction(currentActivity.progressMessage);
    setReactionKey((current) => current + 1);
    const finishActivity = setTimeout(
      () => completeRequest(selectedOption),
      currentActivity.completionDelay,
    );
    activityTimers.current = [finishActivity];
  };

  return {
    activity,
    currentActivity,
    hearts,
    request,
    reaction,
    reactionKey,
    selectedOption,
    isHappy,
    interactionMode,
    stagePosition,
    secondsLeft,
    showAchievement,
    setStagePosition,
    startActivity,
    selectOption,
    placeItem,
    returnHome,
    clearAchievement,
  };
}
