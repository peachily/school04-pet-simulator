import { useEffect, useRef, useState } from "react";
import AchievementCelebration from "./components/AchievementCelebration";
import HeartMeter from "./components/HeartMeter";
import PetStage from "./components/PetStage";
import { activityData, mainActions, pets } from "./data/gameData";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activity, setActivity] = useState(null);
  const [hearts, setHearts] = useState(0);
  const [reaction, setReaction] = useState("");
  const [reactionKey, setReactionKey] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAchievement, setShowAchievement] = useState(false);
  const achievementTimers = useRef([]);

  useEffect(() => {
    return () => achievementTimers.current.forEach(clearTimeout);
  }, []);

  const clearAchievement = () => {
    achievementTimers.current.forEach(clearTimeout);
    achievementTimers.current = [];
    setShowAchievement(false);
  };

  const enterHome = () => {
    clearAchievement();
    setActivity(null);
    setReaction("");
    setSelectedOption(null);
    setScreen("dogHome");
  };

  const startActivity = (activityId) => {
    clearAchievement();
    setActivity(activityId);
    setReaction("");
    setSelectedOption(null);
    setScreen("activity");
  };

  const interact = (option) => {
    const completedHearts = hearts === 4;
    setSelectedOption(option);
    setReaction(option.reaction);
    setHearts((current) => Math.min(current + 1, 5));
    setReactionKey((current) => current + 1);

    if (completedHearts) {
      achievementTimers.current.forEach(clearTimeout);
      achievementTimers.current = [
        setTimeout(() => setShowAchievement(true), 1100),
      ];
    }
  };

  if (screen === "home") {
    return (
      <main className="screen screen--intro">
        <section className="intro-card panel">
          <p className="eyebrow">나만의 작은 친구</p>
          <h1>몽글몽글<br />동물 친구</h1>
          <p>함께 놀고, 먹이고, 산책하며<br />행복한 추억을 만들어 봐요.</p>
          <button className="button button--primary start-button" onClick={() => setScreen("select")}>
            시작하기
          </button>
        </section>
      </main>
    );
  }

  if (screen === "select") {
    return (
      <main className="screen screen--select">
        <section className="select-card panel">
          <button className="back-button" onClick={() => setScreen("home")} aria-label="홈으로 돌아가기">←</button>
          <p className="eyebrow">누구와 함께할까요?</p>
          <h1>동물 친구를<br />골라 주세요</h1>
          <div className="pet-grid">
            {pets.map((pet) => (
              <button
                className={`pet-card ${!pet.available ? "pet-card--disabled" : ""}`}
                disabled={!pet.available}
                key={pet.id}
                onClick={enterHome}
              >
                {pet.image ? (
                  <img className="pet-card__image" src={pet.image} alt="" />
                ) : (
                  <span className="pet-card__emoji" aria-hidden="true">{pet.emoji}</span>
                )}
                <span>{pet.name}</span>
                {!pet.available && <small>준비 중</small>}
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  const currentActivity = activity ? activityData[activity] : null;
  const sceneBackground =
    selectedOption?.background ??
    currentActivity?.background ??
    "/assets/backgrounds/dog-place-home.png";
  const petImage = selectedOption?.actionImage ?? "/assets/pets/dog.png";

  return (
    <main
      className={`screen game-screen game-screen--${activity ?? "house"}`}
      style={{ backgroundImage: `url("${sceneBackground}")` }}
    >
      <header className="game-header">
        <button
          className="back-button back-button--game"
          onClick={screen === "activity" ? enterHome : () => setScreen("select")}
          aria-label="이전 화면으로 돌아가기"
        >
          ←
        </button>
        <HeartMeter count={hearts} />
      </header>

      <PetStage
        reaction={reaction}
        reactionKey={reactionKey}
        petImage={petImage}
      />

      {showAchievement && <AchievementCelebration onDismiss={clearAchievement} />}

      <nav className="action-panel panel" aria-label="강아지 활동">
        <p>{currentActivity ? "무엇을 선택할까요?" : "무엇을 해줄까요?"}</p>
        <div className={`action-grid ${currentActivity ? "action-grid--four" : ""}`}>
          {(currentActivity?.options ?? mainActions).map((item) => (
            <button
              className={`button action-button ${currentActivity ? "action-button--choice" : ""}`}
              key={item.id}
              onClick={() => currentActivity ? interact(item) : startActivity(item.id)}
            >
              {item.image ? (
                <img className="action-button__image" src={item.image} alt="" />
              ) : null}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
