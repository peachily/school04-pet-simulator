export function getRequestText(request) {
  return `${request.before}${request.highlight}${request.after}`;
}

export function speakText(text) {
  if (!("speechSynthesis" in window) || !text) return;

  window.speechSynthesis.cancel();

  const message = new SpeechSynthesisUtterance(text);
  message.lang = "ko-KR";
  message.rate = 0.95;
  message.pitch = 1.25;
  window.speechSynthesis.speak(message);
}

export function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}
