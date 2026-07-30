import { speakText } from "../utils/speech";

export default function ActionPanel({ label, options, isChoice, onSelect }) {
  return (
    <nav className="action-panel panel" aria-label={label}>
      <p>{isChoice ? "무엇을 선택할까요?" : "무엇을 해줄까요?"}</p>
      <div className={`action-grid ${options.length === 4 ? "action-grid--four" : ""}`}>
        {options.map((item) => (
          <button
            className={`button action-button ${isChoice ? "action-button--choice" : ""}`}
            key={item.id}
            onClick={() => onSelect(item)}
            onMouseEnter={() => speakText(item.name)}
          >
            {item.image && <img className="action-button__image" src={item.image} alt="" />}
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
