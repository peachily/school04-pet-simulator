import { useState } from "react";

export default function PetStage({
  reaction,
  reactionKey,
  petImage,
  petName,
  isHappy,
  interactionType,
  interactionMode,
  selectedOption,
  toolImage,
  position,
  onPositionChange,
  onToyPlace,
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const isInteractive = ["placingToy", "walking", "petting"].includes(interactionMode);
  const isPositioned =
    (interactionType === "place" && ["playing", "completed"].includes(interactionMode)) ||
    (interactionType === "drag-timer" && ["walking", "completed"].includes(interactionMode));

  const getPointerPosition = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return {
      x: Math.min(92, Math.max(8, ((event.clientX - bounds.left) / bounds.width) * 100)),
      y: Math.min(82, Math.max(20, ((event.clientY - bounds.top) / bounds.height) * 100)),
    };
  };

  const handlePointerMove = (event) => {
    const nextPosition = getPointerPosition(event);
    if (interactionMode === "placingToy") setCursorPosition(nextPosition);
    if (interactionMode === "walking" && isDragging) onPositionChange(nextPosition);
    if (interactionMode === "petting" && (event.pointerType === "mouse" || isDragging)) {
      onPositionChange(nextPosition);
    }
  };

  const handlePointerDown = (event) => {
    const nextPosition = getPointerPosition(event);
    if (interactionMode === "placingToy") onToyPlace(nextPosition);
    if (interactionMode === "walking") {
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
      onPositionChange(nextPosition);
    }
    if (interactionMode === "petting") {
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
      onPositionChange(nextPosition);
    }
  };

  return (
    <section
      className={`pet-stage ${isInteractive ? "pet-stage--interactive" : ""}`}
      aria-live="polite"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={() => setIsDragging(false)}
      onPointerCancel={() => setIsDragging(false)}
    >
      {reaction && (
        <div className="speech-bubble" key={`speech-${reactionKey}`}>
          {reaction}
        </div>
      )}
      <div
        className={`pet-placeholder ${isHappy ? "pet-placeholder--happy" : ""} ${isPositioned ? "pet-placeholder--positioned" : ""}`}
        key={`pet-${reactionKey}`}
        style={isPositioned ? { left: `${position.x}%`, top: `${position.y}%` } : undefined}
      >
        <img className="pet-image" src={petImage} alt={petName} />
      </div>
      {interactionMode === "placingToy" && selectedOption && (
        <img
          className="toy-cursor"
          src={selectedOption.image}
          alt=""
          style={{ left: `${cursorPosition.x}%`, top: `${cursorPosition.y}%` }}
        />
      )}
      {interactionMode === "petting" && (
        <img
          className="hand-cursor"
          src={toolImage}
          alt=""
          style={{ left: `${position.x}%`, top: `${position.y}%` }}
        />
      )}
      {isHappy && (
        <div className="floating-hearts" key={`hearts-${reactionKey}`} aria-hidden="true">
          <span>♥</span><span>♥</span><span>♥</span>
        </div>
      )}
    </section>
  );
}
