import ActionPanel from "./ActionPanel";

export default function GameControls({ pet, game }) {
  if (game.interactionMode === "completed") {
    return (
      <button className="button button--primary home-return-button" onClick={game.returnHome}>
        집으로 돌아가기
      </button>
    );
  }

  if (game.interactionMode) return null;

  const isChoice = Boolean(game.currentActivity);
  return (
    <ActionPanel
      label={`${pet.name} 활동`}
      options={game.currentActivity?.options ?? pet.actions}
      isChoice={isChoice}
      onSelect={isChoice ? game.selectOption : (item) => game.startActivity(item.id)}
    />
  );
}
