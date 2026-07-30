import { speakText } from "../utils/speech";

export default function ActionPanel({ label, options, isChoice, onSelect }) {
  return (
    <nav className="action-panel panel" aria-label={label}>
      <p>{isChoice ? "무엇을 선택할까요?" : "무엇을 해줄까요?"}</p>
      <div className={`action-grid ${options.length === 4 ? "action-grid--four" : ""}`}>
        {options.map((item) => (
          <div className="action-button-wrap" key={item.id}>
            <button
              className={`button action-button ${isChoice ? "action-button--choice" : ""}`}
              onClick={() => onSelect(item)}
            >
              {item.image && <img className="action-button__image" src={item.image} alt="" />}
              <span>{item.name}</span>
            </button>
            <button
              className="action-speak-button"
              type="button"
              aria-label={`${item.name} 듣기`}
              onClick={() => speakText(item.name)}
            >
              🔊
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}
