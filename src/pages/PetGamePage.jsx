import { useEffect } from "react";
import AchievementCelebration from "../components/AchievementCelebration";
import GameControls from "../components/GameControls";
import GameHeader from "../components/GameHeader";
import PetStage from "../components/PetStage";
import RequestMessage from "../components/RequestMessage";
import { usePetGame } from "../hooks/usePetGame";
import { getRequestText, speakText, stopSpeaking } from "../utils/speech";

export default function PetGamePage({ pet, onExit }) {
  const game = usePetGame(pet);
  const requestText = getRequestText(game.request);
  const background =
    game.selectedOption?.background ??
    game.currentActivity?.background ??
    pet.homeBackground;
  const petImage = game.selectedOption?.actionImage ?? pet.defaultImage;
  const displayedPetImage =
    game.currentActivity?.interaction === "place" && game.interactionMode === "placingToy"
      ? pet.defaultImage
      : petImage;
  const message = game.reaction ?? (
    <RequestMessage request={game.request} onSpeak={() => speakText(requestText)} />
  );

  useEffect(() => {
    if (!game.reaction) speakText(requestText);
    return stopSpeaking;
  }, [game.reaction, requestText]);

  return (
    <main
      className={`screen game-screen game-screen--${game.activity ?? "house"}`}
      style={{ backgroundImage: `url("${background}")` }}
    >
      <GameHeader
        hearts={game.hearts}
        hideBack={game.interactionMode === "completed"}
        onBack={game.activity ? game.returnHome : onExit}
      />

      <PetStage
        reaction={message}
        reactionKey={game.reactionKey}
        petImage={displayedPetImage}
        petName={pet.name}
        isHappy={game.isHappy}
        interactionType={game.currentActivity?.interaction}
        interactionMode={game.interactionMode}
        selectedOption={game.selectedOption}
        toolImage={game.currentActivity?.toolImage}
        position={game.stagePosition}
        onPositionChange={game.setStagePosition}
        onToyPlace={game.placeItem}
      />

      {game.showAchievement && (
        <AchievementCelebration onDismiss={game.clearAchievement} />
      )}

      <GameControls pet={pet} game={game} />

      {["walking", "petting"].includes(game.interactionMode) && (
        <div className="walk-timer" aria-live="polite">{game.secondsLeft}</div>
      )}
    </main>
  );
}
