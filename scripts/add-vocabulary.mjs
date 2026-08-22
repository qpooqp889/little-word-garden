import fs from "node:fs";

const file = new URL("../client/src/data/words.json", import.meta.url);
const words = JSON.parse(fs.readFileSync(file, "utf8"));
const additions = [
  ["animals-lion", "lion", "獅子", "🦁", "Animals", "A friendly golden lion"],
  ["animals-monkey", "monkey", "猴子", "🐒", "Animals", "A playful brown monkey"],
  ["animals-tiger", "tiger", "老虎", "🐯", "Animals", "A friendly orange tiger"],
  ["food-rice", "rice", "米飯", "🍚", "Food", "A warm bowl of rice"],
  ["food-bread", "bread", "麵包", "🍞", "Food", "A soft slice of bread"],
  ["food-yogurt", "yogurt", "優格", "🥣", "Food", "A little bowl of yogurt"],
  ["food-soup", "soup", "湯", "🍲", "Food", "A warm bowl of soup"],
  ["transport-train", "train", "火車", "🚂", "Transport", "A cheerful red train"],
  ["transport-plane", "plane", "飛機", "✈️", "Transport", "A little airplane in the sky"],
  ["transport-bicycle", "bicycle", "腳踏車", "🚲", "Transport", "A bright blue bicycle"],
  ["transport-scooter", "scooter", "滑板車", "🛴", "Transport", "A little green scooter"],
  ["nature-cloud", "cloud", "雲", "☁️", "Nature & Home", "A soft white cloud"],
  ["nature-rain", "rain", "雨", "🌧️", "Nature & Home", "Gentle rain drops"],
  ["nature-snow", "snow", "雪", "❄️", "Nature & Home", "Soft white snow"],
  ["nature-wind", "wind", "風", "💨", "Nature & Home", "A gentle breeze"],
  ["colors-pink", "pink", "粉紅色", "🩷", "Colors", "A bright pink color"],
  ["numbers-six", "six", "六", "6️⃣", "Numbers", "The number six"],
  ["numbers-seven", "seven", "七", "7️⃣", "Numbers", "The number seven"],
  ["shapes-oval", "oval", "橢圓形", "🥚", "Shapes", "A smooth oval shape"],
  ["shapes-star", "star", "星形", "⭐", "Shapes", "A bright star shape"],
  ["body-ears", "ears", "耳朵", "👂", "Body Parts", "A pair of little ears"],
  ["body-nose", "nose", "鼻子", "👃", "Body Parts", "A little nose"],
  ["clothes-socks", "socks", "襪子", "🧦", "Clothes", "A cozy pair of socks"],
  ["clothes-hat", "hat", "帽子", "🧢", "Clothes", "A sunny blue hat"],
  ["fruit-watermelon", "watermelon", "西瓜", "🍉", "Fruit", "A juicy watermelon slice"],
  ["fruit-peach", "peach", "桃子", "🍑", "Fruit", "A soft peach"],
  ["fruit-plum", "plum", "李子", "🫐", "Fruit", "A sweet purple plum"]
].map(([id, word, translation, emoji, category, imageAlt]) => ({
  id,
  word,
  translation,
  emoji,
  category,
  image: null,
  imagePosition: "50% 50%",
  imageAlt,
  englishAudio: null,
  chineseAudio: null,
  speech: { englishLocale: "en-US", chineseLocale: "zh-TW" }
}));

const ids = new Set(words.map((word) => word.id));
const uniqueAdditions = additions.filter((word) => !ids.has(word.id));
if (words.length + uniqueAdditions.length !== 100) {
  throw new Error(`Expected 100 words after expansion, got ${words.length + uniqueAdditions.length}`);
}
fs.writeFileSync(file, `${JSON.stringify([...words, ...uniqueAdditions], null, 2)}\n`);
console.log(`Added ${uniqueAdditions.length} words; total is ${words.length + uniqueAdditions.length}.`);
