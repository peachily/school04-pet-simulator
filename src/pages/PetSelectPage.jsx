export default function PetSelectPage({ pets, onBack, onSelect }) {
  return (
    <main className="screen screen--select">
      <section className="select-card panel">
        <button className="back-button" onClick={onBack} aria-label="홈으로 돌아가기">←</button>
        <p className="eyebrow">누구와 함께할까요?</p>
        <h1>동물 친구를<br />골라 주세요</h1>
        <div className="pet-grid">
          {pets.map((pet) => (
            <button
              className={`pet-card ${!pet.available ? "pet-card--disabled" : ""}`}
              disabled={!pet.available}
              key={pet.id}
              onClick={() => onSelect(pet.id)}
            >
              {pet.selectionImage ? (
                <img className="pet-card__image" src={pet.selectionImage} alt="" />
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
