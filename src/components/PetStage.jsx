export default function PetStage({ reaction, reactionKey, petImage }) {
  return (
    <section className="pet-stage" aria-live="polite">
      {reaction && (
        <div className="speech-bubble" key={`speech-${reactionKey}`}>
          {reaction}
        </div>
      )}
      <div
        className={`pet-placeholder ${reaction ? "pet-placeholder--happy" : ""}`}
        key={`pet-${reactionKey}`}
      >
        <img className="pet-image" src={petImage} alt="강아지" />
      </div>
      {reaction && (
        <div className="floating-hearts" key={`hearts-${reactionKey}`} aria-hidden="true">
          <span>♥</span><span>♥</span><span>♥</span>
        </div>
      )}
    </section>
  );
}
