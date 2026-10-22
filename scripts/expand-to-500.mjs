import fs from "node:fs";

const file = new URL("../client/src/data/words.json", import.meta.url);
const words = JSON.parse(fs.readFileSync(file, "utf8"));

// Keep the existing IDs stable while removing the three accidental cross-category
// duplicate words that were present in the original 200-word dataset.
const replacements = {
  "nature-star": { word: "starlight", translation: "星光", imageAlt: "Soft starlight" },
  "home-hat": { word: "shelf", translation: "架子", imageAlt: "A little shelf" },
  "food-watermelon": { word: "watermelon slice", translation: "西瓜片", imageAlt: "A juicy watermelon slice" },
  "shapes-heart": { word: "heart shape", translation: "心形", imageAlt: "A bright heart shape" },
};
for (const item of words) {
  const replacement = replacements[item.id];
  if (replacement) Object.assign(item, replacement);
}

const categoryIds = {
  Animals: "animals",
  Food: "food",
  Fruit: "fruit",
  Transport: "transport",
  "Nature & Home": "nature",
  Colors: "colors",
  Numbers: "numbers",
  Shapes: "shapes",
  "Body Parts": "body",
  Clothes: "clothes",
};

const additions = {
  Animals: [
    ["alligator", "鱷魚", "🐊"], ["ant", "螞蟻", "🐜"], ["bee", "蜜蜂", "🐝"], ["camel", "駱駝", "🐫"],
    ["deer", "鹿", "🦌"], ["dolphin", "海豚", "🐬"], ["donkey", "驢子", "🫏"], ["eagle", "老鷹", "🦅"],
    ["fox", "狐狸", "🦊"], ["giraffe", "長頸鹿", "🦒"], ["gorilla", "大猩猩", "🦍"], ["hamster", "倉鼠", "🐹"],
    ["kangaroo", "袋鼠", "🦘"], ["koala", "無尾熊", "🐨"], ["ladybug", "瓢蟲", "🐞"], ["leopard", "豹", "🐆"],
    ["lizard", "蜥蜴", "🦎"], ["owl", "貓頭鷹", "🦉"], ["parrot", "鸚鵡", "🦜"], ["peacock", "孔雀", "🦚"],
    ["polar bear", "北極熊", "🐻‍❄️"], ["shark", "鯊魚", "🦈"], ["snail", "蝸牛", "🐌"], ["snake", "蛇", "🐍"],
    ["spider", "蜘蛛", "🕷️"], ["whale", "鯨魚", "🐋"], ["wolf", "狼", "🐺"],
  ],
  Food: [
    ["juice", "果汁", "🧃"], ["tea", "茶", "🍵"], ["water", "水", "💧"], ["butter", "奶油", "🧈"],
    ["jam", "果醬", "🍓"], ["honey", "蜂蜜", "🍯"], ["beans", "豆子", "🫘"], ["mushroom", "蘑菇", "🍄"],
    ["onion", "洋蔥", "🧅"], ["tomato", "番茄", "🍅"], ["cucumber", "小黃瓜", "🥒"], ["broccoli", "花椰菜", "🥦"],
    ["peas", "豌豆", "🫛"], ["pumpkin", "南瓜", "🎃"], ["cereal", "早餐穀片", "🥣"], ["pancake", "鬆餅", "🥞"],
    ["waffle", "格子鬆餅", "🧇"], ["ice cream", "冰淇淋", "🍦"], ["candy", "糖果", "🍬"], ["chocolate", "巧克力", "🍫"],
    ["chips", "洋芋片", "🍟"], ["cracker", "餅乾", "🍘"], ["pie", "派", "🥧"], ["salt", "鹽", "🧂"],
    ["sugar", "糖", "🍚"],
  ],
  Fruit: [
    ["apricot", "杏桃", "🍑"], ["blackberry", "黑莓", "🫐"], ["fig", "無花果", "🫒"], ["guava", "芭樂", "🍐"],
    ["grapefruit", "葡萄柚", "🍊"], ["pomegranate", "石榴", "🔴"], ["tangerine", "橘子", "🍊"], ["clementine", "小柑橘", "🍊"],
    ["nectarine", "油桃", "🍑"], ["persimmon", "柿子", "🟠"], ["cranberry", "蔓越莓", "🔴"], ["gooseberry", "醋栗", "🟢"],
    ["passion fruit", "百香果", "🟣"], ["date", "椰棗", "🌴"], ["starfruit", "楊桃", "⭐"], ["mulberry", "桑葚", "🫐"],
    ["plantain", "大蕉", "🍌"], ["jackfruit", "菠蘿蜜", "🟡"], ["durian", "榴槤", "🟢"], ["lychee", "荔枝", "🔴"],
    ["longan", "龍眼", "🟤"], ["rambutan", "紅毛丹", "🔴"], ["quince", "榲桲", "🟡"], ["kumquat", "金桔", "🟠"],
    ["currant", "醋栗", "🔴"], ["elderberry", "接骨木莓", "🫐"], ["boysenberry", "波森莓", "🫐"], ["cloudberry", "雲莓", "🟠"],
    ["breadfruit", "麵包果", "🟢"], ["sapodilla", "人心果", "🟤"], ["medlar", "歐楂果", "🟤"], ["citron", "香櫞", "🍋"],
    ["yuzu", "柚子", "🍋"],
  ],
  Transport: [
    ["subway", "地鐵", "🚇"], ["metro", "捷運", "🚇"], ["canoe", "獨木舟", "🛶"], ["kayak", "皮划艇", "🛶"],
    ["rowboat", "划艇", "🚣"], ["speedboat", "快艇", "🚤"], ["submarine", "潛水艇", "🛥️"], ["moped", "輕型摩托車", "🛵"],
    ["trolley", "電車", "🚎"], ["cable car", "纜車", "🚠"], ["gondola", "貢多拉船", "🚣"], ["rickshaw", "人力車", "🛺"],
    ["sled", "雪橇", "🛷"], ["sleigh", "馬拉雪橇", "🛷"], ["roller skates", "直排輪", "🛼"], ["skis", "滑雪板", "🎿"],
    ["jet", "噴射機", "✈️"], ["space shuttle", "太空梭", "🚀"], ["unicycle", "獨輪車", "🚲"], ["tricycle", "三輪車", "🚲"],
    ["carriage", "馬車", "🐎"], ["wagon", "四輪車", "🛒"], ["dump truck", "砂石車", "🚚"], ["garbage truck", "垃圾車", "🚛"],
    ["school bus", "校車", "🚌"], ["tractor", "拖拉機", "🚜"],
  ],
  "Nature & Home": [
    ["rainbow", "彩虹", "🌈"], ["thunder", "雷聲", "🌩️"], ["lightning", "閃電", "⚡"], ["storm", "暴風雨", "🌪️"],
    ["lake", "湖", "🏞️"], ["pond", "池塘", "🐸"], ["waterfall", "瀑布", "🌊"], ["forest", "森林", "🌲"],
    ["park", "公園", "🌳"], ["sky", "天空", "🌤️"], ["earth", "地球", "🌍"], ["fire", "火", "🔥"],
    ["ice", "冰", "🧊"], ["wave", "波浪", "🌊"], ["shell", "貝殼", "🐚"], ["rock", "石頭", "🪨"],
    ["sand", "沙子", "🏖️"], ["nest", "鳥巢", "🪺"],
  ],
  Colors: [
    ["turquoise", "綠松石色", "🔹"], ["cyan", "青色", "🔵"], ["magenta", "洋紅色", "🟣"], ["lavender", "薰衣草紫", "🪻"],
    ["violet", "紫羅蘭色", "🟣"], ["indigo", "靛藍色", "🔵"], ["aqua", "水藍色", "💧"], ["azure", "蔚藍色", "🔷"],
    ["lime green", "萊姆綠", "🟢"], ["emerald", "祖母綠", "💚"], ["jade", "翡翠綠", "🟢"], ["mint", "薄荷綠", "🌿"],
    ["ruby", "寶石紅", "🔴"], ["rose", "玫瑰色", "🌹"], ["peach pink", "蜜桃粉", "🍑"], ["tan", "棕褐色", "🟫"],
    ["cream", "奶油色", "🍦"], ["ivory", "象牙白", "🤍"], ["charcoal", "炭灰色", "⚫"], ["maroon", "栗紅色", "🟥"],
    ["crimson", "深紅色", "🔴"], ["scarlet", "猩紅色", "🟥"], ["amber", "琥珀色", "🟠"], ["bronze", "青銅色", "🟤"],
    ["copper", "銅色", "🟤"], ["pearl", "珍珠色", "🤍"], ["plum purple", "梅子紫", "🟣"], ["raspberry pink", "覆盆子粉", "🌺"],
    ["melon green", "瓜綠色", "🟢"], ["mustard", "芥末黃", "🟡"], ["olive", "橄欖綠", "🫒"], ["moss", "苔蘚綠", "🌿"],
    ["forest green", "森林綠", "🌲"], ["sky blue", "天空藍", "🌤️"],
  ],
  Shapes: [
    ["pentagon", "五邊形", "⬟"], ["heptagon", "七邊形", "⬢"], ["nonagon", "九邊形", "🔹"], ["decagon", "十邊形", "🔟"],
    ["trapezoid", "梯形", "▱"], ["parallelogram", "平行四邊形", "▱"], ["rhombus", "菱形", "◆"], ["sphere", "球體", "⚽"],
    ["cylinder", "圓柱體", "🥫"], ["pyramid", "金字塔", "🔺"], ["prism", "柱體", "🔷"], ["torus", "甜甜圈形", "🍩"],
    ["spiral", "螺旋形", "🌀"], ["zigzag", "鋸齒線", "〰️"], ["curve", "曲線", "〰️"], ["arc", "弧形", "⌒"],
    ["angle", "角", "📐"], ["arrow", "箭頭", "➡️"], ["plus sign", "加號", "➕"], ["minus sign", "減號", "➖"],
    ["wave shape", "波浪形", "🌊"], ["loop", "圈圈", "➰"], ["ring shape", "圓環形", "⭕"], ["dot", "點", "🔵"],
    ["teardrop", "水滴形", "💧"], ["raindrop", "雨滴形", "💧"], ["snowflake", "雪花形", "❄️"], ["clover", "四葉草形", "🍀"],
    ["cloud shape", "雲朵形", "☁️"], ["leaf shape", "葉子形", "🍃"], ["footprint", "腳印形", "👣"], ["starburst", "星芒形", "💥"],
    ["gear", "齒輪形", "⚙️"], ["checkerboard", "棋盤格", "▦"],
  ],
  "Body Parts": [
    ["face", "臉", "🙂"], ["forehead", "額頭", "😊"], ["eyebrows", "眉毛", "🤨"], ["eyelashes", "睫毛", "👁️"],
    ["cheeks", "臉頰", "😊"], ["chin", "下巴", "🙂"], ["lips", "嘴唇", "👄"], ["neck", "脖子", "🧣"],
    ["shoulders", "肩膀", "🙆"], ["elbows", "手肘", "💪"], ["wrists", "手腕", "⌚"], ["fingers", "手指", "🖐️"],
    ["thumb", "拇指", "👍"], ["palms", "手掌", "🖐️"], ["nails", "指甲", "💅"], ["chest", "胸口", "🫁"],
    ["back", "背部", "🎒"], ["belly", "肚肚", "🙂"], ["waist", "腰", "🧍"], ["hips", "臀部", "🧍"],
    ["ankles", "腳踝", "🦶"], ["heels", "腳跟", "🦶"], ["soles", "腳底", "🦶"], ["skin", "皮膚", "🖐️"],
    ["bone", "骨頭", "🦴"], ["muscle", "肌肉", "💪"], ["brain", "大腦", "🧠"], ["heart", "心臟", "❤️"],
    ["lungs", "肺", "🫁"], ["stomach", "胃", "🫃"], ["bottom", "屁股", "🍑"], ["beard", "鬍鬚", "🧔"],
    ["mustache", "小鬍子", "👨"], ["freckles", "雀斑", "🙂"], ["dimples", "酒窩", "😊"],
  ],
  Clothes: [
    ["underwear", "內衣褲", "🩲"], ["sweater", "毛衣", "🧶"], ["hoodie", "連帽衫", "🧥"], ["raincoat", "雨衣", "🧥"],
    ["vest", "背心", "🦺"], ["jeans", "牛仔褲", "👖"], ["shorts", "短褲", "🩳"], ["leggings", "緊身褲", "👖"],
    ["tights", "褲襪", "🧦"], ["blouse", "女襯衫", "👚"], ["tie", "領帶", "👔"], ["bow tie", "蝴蝶結領帶", "🎀"],
    ["apron", "圍裙", "🧑‍🍳"], ["swimsuit", "泳裝", "🩱"], ["bathing suit", "泳衣", "🩱"], ["sandals", "涼鞋", "👡"],
    ["slippers", "拖鞋", "🥿"], ["sneakers", "運動鞋", "👟"], ["cap", "棒球帽", "🧢"], ["beanie", "毛帽", "🧶"],
    ["sun hat", "遮陽帽", "👒"], ["mittens", "連指手套", "🧤"], ["earmuffs", "耳罩", "🎧"], ["backpack", "背包", "🎒"],
    ["necklace", "項鍊", "📿"], ["bracelet", "手鍊", "📿"], ["watch", "手錶", "⌚"], ["ring", "戒指", "💍"],
    ["glasses", "眼鏡", "👓"], ["mask", "口罩", "😷"], ["rain hat", "雨帽", "🌧️"], ["hairband", "髮箍", "🎀"],
    ["bow", "蝴蝶結", "🎀"], ["uniform", "制服", "🧑‍🎓"], ["costume", "表演服", "🎭"],
  ],
};

const numberNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine"];
const chineseDigits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const chineseNumber = (value) => {
  if (value < 20) return value < 10 ? chineseDigits[value] : `十${value % 10 ? chineseDigits[value % 10] : ""}`;
  const tens = Math.floor(value / 10);
  const ones = value % 10;
  return `${chineseDigits[tens]}十${ones ? chineseDigits[ones] : ""}`;
};
additions.Numbers = Array.from({ length: 33 }, (_, index) => {
  const value = index + 17;
  return [numberNames[value], chineseNumber(value), "🔢"];
});

const existingIds = new Set(words.map((word) => word.id));
const existingWords = new Set(words.map((word) => word.word.toLowerCase()));
const newWords = [];
for (const [category, entries] of Object.entries(additions)) {
  const prefix = categoryIds[category];
  for (const [word, translation, emoji] of entries) {
    const id = `${prefix}-${word.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
    const normalized = word.toLowerCase();
    if (existingIds.has(id) || existingWords.has(normalized)) throw new Error(`Duplicate addition: ${id} / ${word}`);
    existingIds.add(id);
    existingWords.add(normalized);
    newWords.push({
      id,
      word,
      translation,
      emoji,
      category,
      image: null,
      imagePosition: "50% 50%",
      imageAlt: category === "Numbers" ? `The number ${word}` : `A friendly ${word}`,
      englishAudio: null,
      chineseAudio: null,
      speech: { englishLocale: "en-US", chineseLocale: "zh-TW" },
    });
  }
}

const result = [...words, ...newWords];
const counts = Object.fromEntries(Object.keys(categoryIds).map((category) => [category, result.filter((word) => word.category === category).length]));
if (result.length !== 500 || Object.values(counts).some((count) => count !== 50)) {
  throw new Error(`Expected exactly 500 words and 50 per category, got ${result.length}: ${JSON.stringify(counts)}`);
}
if (new Set(result.map((word) => word.id)).size !== result.length) throw new Error("Duplicate IDs found after expansion");
if (new Set(result.map((word) => word.word.toLowerCase())).size !== result.length) throw new Error("Duplicate English words found after expansion");

fs.writeFileSync(file, `${JSON.stringify(result, null, 2)}\n`);
console.log(`Expanded vocabulary to ${result.length} words:`, counts);
