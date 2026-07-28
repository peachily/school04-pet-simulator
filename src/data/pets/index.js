import { dog } from "./dog";

export const petCatalog = [
  dog,
  { id: "cat", name: "고양이", emoji: "🐱", available: false },
  { id: "snail", name: "달팽이", emoji: "🐌", available: false },
  { id: "beetle", name: "장수풍뎅이", emoji: "🪲", available: false },
  { id: "chameleon", name: "카멜레온", emoji: "🦎", available: false },
];

export const petConfigs = {
  dog,
};
