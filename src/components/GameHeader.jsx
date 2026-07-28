import HeartMeter from "./HeartMeter";

export default function GameHeader({ hearts, hideBack, onBack }) {
  return (
    <header className="game-header">
      {!hideBack && (
        <button
          className="back-button back-button--game"
          onClick={onBack}
          aria-label="이전 화면으로 돌아가기"
        >
          ←
        </button>
      )}
      <HeartMeter count={hearts} />
    </header>
  );
}
