const confettiPieces = Array.from({ length: 28 }, (_, index) => index);

export default function AchievementCelebration({ onDismiss }) {
  return (
    <button
      className="achievement"
      type="button"
      onClick={onDismiss}
      aria-label="행복 하트 달성 화면 닫기"
    >
      <div className="achievement__glow" aria-hidden="true" />
      <div className="achievement__badge">
        <span className="achievement__crown" aria-hidden="true">♛</span>
        <strong>행복 가득!</strong>
        <span>하트 5개를 모두 채웠어요</span>
        <p>기분이 정말 좋아요~!</p>
        <small>화면을 누르면 계속할 수 있어요</small>
      </div>
      <div className="confetti" aria-hidden="true">
        {confettiPieces.map((piece) => (
          <i
            key={piece}
            style={{
              "--x": `${(piece * 37) % 100}%`,
              "--delay": `${(piece % 7) * 70}ms`,
              "--drift": `${(piece % 2 ? 1 : -1) * (30 + (piece % 5) * 12)}px`,
              "--turn": `${180 + (piece % 4) * 90}deg`,
              "--color": `hsl(${(piece * 53) % 360} 82% 68%)`,
            }}
          />
        ))}
      </div>
    </button>
  );
}
