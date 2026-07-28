export function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function pickDifferent(items, current, getKey) {
  const alternatives = items.filter((item) => getKey(item) !== getKey(current));
  return pickRandom(alternatives.length ? alternatives : items);
}
