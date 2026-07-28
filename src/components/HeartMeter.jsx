export default function HeartMeter({ count }) {
  return (
    <div className="heart-meter panel" aria-label={`행복 하트 ${count}개`}>
      <span className="heart-meter__label">행복</span>
      <div className="heart-meter__hearts">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            className={`heart ${index < count ? "heart--filled" : ""}`}
            key={index}
            aria-hidden="true"
          >
            ♥
          </span>
        ))}
      </div>
    </div>
  );
}
