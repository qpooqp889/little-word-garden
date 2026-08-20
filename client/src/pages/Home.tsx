/* Sunlit Storybook: picture-book editorial layout, warm paper palette, gentle motion, image-first learning. */
import { useMemo, useState } from "react";
import { Volume2, Search, Sparkles, ChevronRight, BookOpen, Heart, ArrowRight } from "lucide-react";

const categoryArt: Record<string, string> = {
  Animals: "/manus-storage/category-animals_da0768c6.png",
  Food: "/manus-storage/category-food_a34bcd28.png",
  Transport: "/manus-storage/category-transport_9bcfe0f0.png",
  "Nature & Home": "/manus-storage/category-nature_fbf7c2db.png",
};

const categories = [
  { key: "All", label: "All words", icon: "✦", color: "marigold" },
  { key: "Animals", label: "Animals", icon: "🐰", color: "leaf" },
  { key: "Food", label: "Food", icon: "🍎", color: "coral" },
  { key: "Transport", label: "Transport", icon: "🚌", color: "sky" },
  { key: "Nature & Home", label: "Nature & Home", icon: "🌼", color: "lavender" },
];

const words = [
  ["cat", "貓", "🐱", "Animals"], ["dog", "狗", "🐶", "Animals"], ["rabbit", "兔子", "🐰", "Animals"], ["elephant", "大象", "🐘", "Animals"], ["lion", "獅子", "🦁", "Animals"], ["monkey", "猴子", "🐵", "Animals"], ["fish", "魚", "🐟", "Animals"], ["bird", "小鳥", "🐦", "Animals"], ["frog", "青蛙", "🐸", "Animals"], ["turtle", "烏龜", "🐢", "Animals"],
  ["apple", "蘋果", "🍎", "Food"], ["banana", "香蕉", "🍌", "Food"], ["orange", "橘子", "🍊", "Food"], ["strawberry", "草莓", "🍓", "Food"], ["watermelon", "西瓜", "🍉", "Food"], ["grape", "葡萄", "🍇", "Food"], ["carrot", "紅蘿蔔", "🥕", "Food"], ["bread", "麵包", "🍞", "Food"], ["milk", "牛奶", "🥛", "Food"], ["cake", "蛋糕", "🍰", "Food"],
  ["car", "汽車", "🚗", "Transport"], ["bus", "公車", "🚌", "Transport"], ["train", "火車", "🚂", "Transport"], ["airplane", "飛機", "✈️", "Transport"], ["boat", "船", "⛵", "Transport"], ["bicycle", "腳踏車", "🚲", "Transport"], ["rocket", "火箭", "🚀", "Transport"], ["taxi", "計程車", "🚕", "Transport"], ["truck", "卡車", "🚚", "Transport"], ["helicopter", "直升機", "🚁", "Transport"],
  ["sun", "太陽", "☀️", "Nature & Home"], ["moon", "月亮", "🌙", "Nature & Home"], ["star", "星星", "⭐", "Nature & Home"], ["cloud", "雲", "☁️", "Nature & Home"], ["rain", "雨", "🌧️", "Nature & Home"], ["tree", "樹", "🌳", "Nature & Home"], ["flower", "花", "🌼", "Nature & Home"], ["grass", "草", "🌱", "Nature & Home"], ["house", "房子", "🏠", "Nature & Home"], ["bed", "床", "🛏️", "Nature & Home"],
  ["hat", "帽子", "🧢", "Nature & Home"], ["shoe", "鞋子", "👟", "Nature & Home"], ["ball", "球", "⚽", "Nature & Home"], ["book", "書", "📖", "Nature & Home"], ["pencil", "鉛筆", "✏️", "Nature & Home"], ["chair", "椅子", "🪑", "Nature & Home"], ["cup", "杯子", "🥤", "Nature & Home"], ["key", "鑰匙", "🔑", "Nature & Home"], ["clock", "時鐘", "🕐", "Nature & Home"], ["gift", "禮物", "🎁", "Nature & Home"],
] as const;

type Word = (typeof words)[number];

function speak(word: string) {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.72;
    utterance.pitch = 1.12;
    window.speechSynthesis.speak(utterance);
  }
}

export default function Home() {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState<string | null>(null);
  const filtered = useMemo(() => words.filter(([word, zh, , category]) => (selected === "All" || category === selected) && `${word} ${zh}`.toLowerCase().includes(query.toLowerCase())), [selected, query]);
  const featured = words[1];

  const play = (word: string) => {
    setPlaying(word);
    speak(word);
    window.setTimeout(() => setPlaying(null), 900);
  };

  return (
    <main className="garden-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Little Word Garden home">
          <span className="brand-mark"><img src="/manus-storage/little-word-garden-logo_2c085097.png" alt="" /></span>
          <span><strong>little word</strong><em>garden</em></span>
        </a>
        <div className="topbar-note"><span className="sun-dot" /> Learn a little. Grow a lot.</div>
        <button className="parent-button" onClick={() => document.getElementById("word-list")?.scrollIntoView({ behavior: "smooth" })}><BookOpen size={17} /> Explore words</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> A tiny English garden</div>
          <h1>Pick a picture.<br /><span>Find a word.</span></h1>
          <p>Friendly first words for little explorers. Tap the speaker and say it together.</p>
          <div className="hero-actions"><button className="primary-button" onClick={() => play(featured[0])}>Hear a word <Volume2 size={18} /></button><span className="age-note">Made for ages 2–6 <Heart size={14} fill="currentColor" /></span></div>
        </div>
        <div className="hero-art">
          <img src={categoryArt.Animals} alt="Friendly animal illustrations" />
          <div className="hero-sticker sticker-one">hello!</div><div className="hero-sticker sticker-two">say it<br />with me</div>
        </div>
      </section>

      <section className="explore-layout" id="word-list">
        <aside className="category-rail">
          <p className="rail-label">Choose a path</p>
          <nav aria-label="Word categories">
            {categories.map((category) => <button key={category.key} className={`category-button ${category.color} ${selected === category.key ? "active" : ""}`} onClick={() => setSelected(category.key)}><span className="category-icon">{category.icon}</span><span>{category.label}</span>{selected === category.key && <ChevronRight size={16} />}</button>)}
          </nav>
          <div className="rail-tip"><span>✎</span><p><strong>Grown-up tip</strong><br />Point, listen, repeat. Keep it playful!</p></div>
        </aside>

        <div className="cards-area">
          <div className="section-heading"><div><p className="eyebrow">Little discoveries</p><h2>{selected === "All" ? "Today’s word garden" : selected}</h2><p className="result-count">{filtered.length} friendly words to explore</p></div><label className="search-box"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find a word" aria-label="Find a word" /></label></div>
          <div className="card-grid">
            {filtered.map(([word, zh, emoji, category], index) => <article className={`word-card card-${index % 5}`} key={word}>
              <div className="card-topline"><span>{category}</span><span className="card-number">{String(words.indexOf(filtered[index]) + 1).padStart(2, "0")}</span></div>
              <button className={`picture-button ${playing === word ? "is-playing" : ""}`} onClick={() => play(word)} aria-label={`Hear ${word}`}><span className="emoji-picture" role="img" aria-label={word}>{emoji}</span><span className="sound-waves"><i /><i /><i /></span></button>
              <div className="word-footer"><div><h3>{word}</h3><p>{zh}</p></div><button className="sound-button" onClick={() => play(word)} aria-label={`Play ${word}`}><Volume2 size={19} /></button></div>
            </article>)}
          </div>
          {filtered.length === 0 && <div className="empty-state">Try another little word.</div>}
          <div className="bottom-note"><span>✿</span> Every word is a tiny seed. <button onClick={() => { setSelected("All"); setQuery(""); }}>See all words <ArrowRight size={15} /></button></div>
        </div>
      </section>
      <footer><span>Little Word Garden</span><span>Made for curious little voices · 50 words to begin</span></footer>
    </main>
  );
}
