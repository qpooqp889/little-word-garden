import fs from "node:fs";

const words = JSON.parse(fs.readFileSync(new URL("../client/src/data/words.json", import.meta.url), "utf8"));
const required = ["id", "word", "translation", "emoji", "category", "image", "imagePosition", "imageAlt", "englishAudio", "chineseAudio", "speech"];
if (words.length !== 100) throw new Error(`Expected 100 words, got ${words.length}`);
if (new Set(words.map((word) => word.id)).size !== words.length) throw new Error("Duplicate word IDs found");
for (const word of words) for (const key of required) if (!(key in word)) throw new Error(`Missing ${key} in ${word.id}`);
console.log("JSON valid: 100 unique words with all required fields.");
