export default function RequestMessage({ request, onSpeak }) {
  return (
    <span className="request-message">
      <span>
        {request.before}
        <strong className="request-highlight">{request.highlight}</strong>
        {request.after}
      </span>
      <button
        className="request-speak-button"
        type="button"
        aria-label="부탁 다시 듣기"
        onClick={onSpeak}
      >
        🔊
      </button>
    </span>
  );
}
