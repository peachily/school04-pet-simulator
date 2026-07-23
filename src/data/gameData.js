export const pets = [
  { id: "dog", name: "강아지", emoji: "🐶", image: "/assets/pets/dog.png", available: true },
  { id: "cat", name: "고양이", emoji: "🐱", available: false },
  { id: "snail", name: "달팽이", emoji: "🐌", available: false },
  { id: "beetle", name: "장수풍뎅이", emoji: "🪲", available: false },
  { id: "chameleon", name: "카멜레온", emoji: "🦎", available: false },
];

export const mainActions = [
  { id: "feed", name: "먹이주기", emoji: "🥣" },
  { id: "play", name: "놀아주기", emoji: "🧸" },
  { id: "walk", name: "산책하기", emoji: "🦮" },
];

export const activityData = {
  feed: {
    title: "맛있는 시간",
    sceneLabel: "먹이 먹는 장소",
    background: "/assets/backgrounds/dog-place-eat.png",
    options: [
      {
        id: "water",
        name: "물",
        image: "/assets/items/dog-food-water.png",
        actionImage: "/assets/actions/dog-eating-water.png",
        reaction: "시원하게 물을 마셨어요!",
      },
      {
        id: "food",
        name: "사료",
        image: "/assets/items/dog-food-food.png",
        actionImage: "/assets/actions/dog-eating-food.png",
        reaction: "냠냠! 사료를 맛있게 먹었어요!",
      },
      {
        id: "snack",
        name: "간식",
        image: "/assets/items/dog-food-snack.png",
        actionImage: "/assets/actions/dog-eating-snack.png",
        reaction: "제일 좋아하는 간식이에요!",
      },
      {
        id: "medicine",
        name: "약",
        image: "/assets/items/dog-food-medicine.png",
        actionImage: "/assets/actions/dog-eating-medicine.png",
        reaction: "건강해지는 약도 잘 먹었어요!",
      },
    ],
  },
  play: {
    title: "신나는 놀이 시간",
    sceneLabel: "노는 곳",
    background: "/assets/backgrounds/dog-place-play.png",
    options: [
      {
        id: "rope",
        name: "로프",
        image: "/assets/items/dog-toy-rope.png",
        actionImage: "/assets/actions/dog-playing-rope.png",
        reaction: "로프를 힘껏 당기며 놀았어요!",
      },
      {
        id: "ball",
        name: "공",
        image: "/assets/items/dog-toy-ball.png",
        actionImage: "/assets/actions/dog-playing-ball.png",
        reaction: "공을 신나게 쫓아갔어요!",
      },
      {
        id: "squeaky",
        name: "삑삑이",
        image: "/assets/items/dog-toy-squeaky.png",
        actionImage: "/assets/actions/dog-playing-squeaky.png",
        reaction: "삑삑 소리가 정말 재미있어요!",
      },
      {
        id: "doll",
        name: "인형",
        image: "/assets/items/dog-toy-doll.png",
        actionImage: "/assets/actions/dog-playing-doll.png",
        reaction: "인형을 꼭 안고 좋아해요!",
      },
    ],
  },
  walk: {
    title: "두근두근 산책",
    sceneLabel: "산책 준비 장소",
    background: "/assets/backgrounds/dog-place-walk.png",
    options: [
      {
        id: "town",
        name: "동네",
        image: "/assets/backgrounds/dog-place-town.png",
        background: "/assets/backgrounds/dog-place-town.png",
        actionImage: "/assets/actions/dog-walking.png",
        reaction: "동네 냄새를 맡으며 걸었어요!",
      },
      {
        id: "park",
        name: "공원",
        image: "/assets/backgrounds/dog-place-park.png",
        background: "/assets/backgrounds/dog-place-park.png",
        actionImage: "/assets/actions/dog-walking.png",
        reaction: "넓은 공원을 신나게 달렸어요!",
      },
      {
        id: "river",
        name: "하천",
        image: "/assets/backgrounds/dog-place-river.png",
        background: "/assets/backgrounds/dog-place-river.png",
        actionImage: "/assets/actions/dog-walking.png",
        reaction: "시원한 물소리를 들으며 걸었어요!",
      },
      {
        id: "forest",
        name: "숲길",
        image: "/assets/backgrounds/dog-place-forest.png",
        background: "/assets/backgrounds/dog-place-forest.png",
        actionImage: "/assets/actions/dog-walking.png",
        reaction: "상쾌한 숲길이 정말 좋아요!",
      },
    ],
  },
};
