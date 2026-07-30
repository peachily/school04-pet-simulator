const dogAsset = (path) => `/assets/animals/dog/${path}`;

const dogActions = [
  { id: "feed", name: "먹이주기", image: dogAsset("menu/feed.webp") },
  { id: "play", name: "놀아주기", image: dogAsset("menu/play.webp") },
  { id: "walk", name: "산책하기", image: dogAsset("menu/walk.webp") },
  { id: "petting", name: "쓰다듬기", image: dogAsset("menu/petting.webp") },
];

const activities = {
  feed: {
    interaction: "instant",
    background: dogAsset("backgrounds/place-eat.webp"),
    options: [
      {
        id: "water",
        name: "물",
        image: dogAsset("items/food-water.webp"),
        actionImage: dogAsset("actions/eating-water.webp"),
        reaction: "시원하게 물을 마셨어요!",
      },
      {
        id: "food",
        name: "사료",
        image: dogAsset("items/food-food.webp"),
        actionImage: dogAsset("actions/eating-food.webp"),
        reaction: "냠냠! 사료를 맛있게 먹었어요!",
      },
      {
        id: "snack",
        name: "간식",
        image: dogAsset("items/food-snack.webp"),
        actionImage: dogAsset("actions/eating-snack.webp"),
        reaction: "제일 좋아하는 간식이에요!",
      },
      {
        id: "medicine",
        name: "약",
        image: dogAsset("items/food-medicine.webp"),
        actionImage: dogAsset("actions/eating-medicine.webp"),
        reaction: "건강해지는 약도 잘 먹었어요!",
      },
    ],
  },
  play: {
    interaction: "place",
    completionDelay: 1300,
    background: dogAsset("backgrounds/place-play.webp"),
    instruction: "장난감을 움직여서 원하는 곳에 놓아 주세요!",
    progressMessage: "강아지가 장난감을 따라가요!",
    options: [
      {
        id: "rope",
        name: "로프",
        image: dogAsset("items/toy-rope.webp"),
        actionImage: dogAsset("actions/playing-rope.webp"),
        reaction: "로프를 힘껏 당기며 놀았어요!",
      },
      {
        id: "ball",
        name: "공",
        image: dogAsset("items/toy-ball.webp"),
        actionImage: dogAsset("actions/playing-ball.webp"),
        reaction: "공을 신나게 쫓아갔어요!",
      },
      {
        id: "squeaky",
        name: "삑삑이",
        image: dogAsset("items/toy-squeaky.webp"),
        actionImage: dogAsset("actions/playing-squeaky.webp"),
        reaction: "삑삑 소리가 정말 재미있어요!",
      },
      {
        id: "doll",
        name: "인형",
        image: dogAsset("items/toy-doll.webp"),
        actionImage: dogAsset("actions/playing-doll.webp"),
        reaction: "인형을 꼭 안고 좋아해요!",
      },
    ],
  },
  walk: {
    interaction: "drag-timer",
    duration: 10,
    background: dogAsset("backgrounds/place-walk.webp"),
    instruction: "강아지를 클릭하거나 드래그해서 함께 걸어 주세요!",
    options: [
      {
        id: "town",
        name: "동네",
        image: dogAsset("backgrounds/place-town.webp"),
        background: dogAsset("backgrounds/place-town.webp"),
        actionImage: dogAsset("actions/walking.webp"),
        reaction: "동네 냄새를 맡으며 걸었어요!",
      },
      {
        id: "park",
        name: "공원",
        image: dogAsset("backgrounds/place-park.webp"),
        background: dogAsset("backgrounds/place-park.webp"),
        actionImage: dogAsset("actions/walking.webp"),
        reaction: "넓은 공원을 신나게 달렸어요!",
      },
      {
        id: "river",
        name: "하천",
        image: dogAsset("backgrounds/place-river.webp"),
        background: dogAsset("backgrounds/place-river.webp"),
        actionImage: dogAsset("actions/walking.webp"),
        reaction: "시원한 물소리를 들으며 걸었어요!",
      },
      {
        id: "forest",
        name: "숲길",
        image: dogAsset("backgrounds/place-forest.webp"),
        background: dogAsset("backgrounds/place-forest.webp"),
        actionImage: dogAsset("actions/walking.webp"),
        reaction: "상쾌한 숲길이 정말 좋아요!",
      },
    ],
  },
  petting: {
    interaction: "pet-timer",
    duration: 10,
    instruction: "손을 움직여 강아지를 쓰다듬어 주세요!",
    toolImage: dogAsset("tools/hand.webp"),
    reaction: "쓰다듬어 줘서 기분이 정말 좋아요!",
  },
};

const requests = [
  { activityId: "feed", optionId: "water", before: "지금은 ", highlight: "목이 말라요", after: "." },
  { activityId: "feed", optionId: "food", before: "지금은 ", highlight: "배가 고파요", after: "." },
  { activityId: "feed", optionId: "snack", before: "지금은 ", highlight: "간식", after: "이 먹고 싶어요." },
  { activityId: "feed", optionId: "medicine", before: "너무 아파요. ", highlight: "약", after: "이 필요해요." },
  { activityId: "play", optionId: "rope", before: "지금은 ", highlight: "로프", after: " 가지고 놀래요." },
  { activityId: "play", optionId: "ball", before: "지금은 ", highlight: "공", after: " 가지고 놀래요." },
  { activityId: "play", optionId: "squeaky", before: "지금은 ", highlight: "삑삑이", after: " 가지고 놀래요." },
  { activityId: "play", optionId: "doll", before: "지금은 ", highlight: "인형", after: " 가지고 놀래요." },
  { activityId: "walk", optionId: "town", before: "지금은 ", highlight: "동네", after: "에 가고 싶어요." },
  { activityId: "walk", optionId: "park", before: "지금은 ", highlight: "공원", after: "에 가고 싶어요." },
  { activityId: "walk", optionId: "river", before: "지금은 ", highlight: "하천", after: "에 가고 싶어요." },
  { activityId: "walk", optionId: "forest", before: "지금은 ", highlight: "숲길", after: "에 가고 싶어요." },
  { activityId: "petting", optionId: null, before: "지금은 ", highlight: "쓰다듬어", after: " 주세요." },
];

export const dog = {
  id: "dog",
  name: "강아지",
  selectionImage: dogAsset("pet.webp"),
  defaultImage: dogAsset("pet.webp"),
  homeBackground: dogAsset("backgrounds/place-home.webp"),
  available: true,
  actions: dogActions,
  activities,
  requests,
};
