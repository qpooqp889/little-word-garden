import fs from "node:fs";

const words = JSON.parse(fs.readFileSync(new URL("../client/src/data/words.json", import.meta.url), "utf8"));
const required = ["id", "word", "translation", "emoji", "category", "image", "imagePosition", "imageAlt", "englishAudio", "chineseAudio", "speech"];
const categories = ["Animals", "Food", "Fruit", "Transport", "Nature & Home", "Colors", "Numbers", "Shapes", "Body Parts", "Clothes"];
if (words.length !== 500) throw new Error(`Expected 500 words, got ${words.length}`);
if (new Set(words.map((word) => word.id)).size !== words.length) throw new Error("Duplicate word IDs found");
if (new Set(words.map((word) => word.word.toLowerCase())).size !== words.length) throw new Error("Duplicate English words found");
for (const category of categories) {
  const count = words.filter((word) => word.category === category).length;
  if (count < 50 || count > 100) throw new Error(`${category} must have 50–100 words, got ${count}`);
}
for (const word of words) for (const key of required) if (!(key in word)) throw new Error(`Missing ${key} in ${word.id}`);
console.log("JSON valid: 500 words, 50 per category, with unique IDs/English words and all required fields.");
