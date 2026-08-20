# Little Word Garden 設計方向

## 三種風格提案

### Theme Name: Sunlit Storybook
Very Brief Intro: 以繪本紙張、柔和陽光與手繪貼紙構成溫暖的親子共讀感，讓單字學習像翻開一本熟悉的故事書。
Probability: 0.06

### Theme Name: Playroom Pop
Very Brief Intro: 以高彩度玩具色、圓形標籤與活潑卡片構成遊戲室般的學習空間，強調立即辨識與操作回饋。
Probability: 0.08

### Theme Name: Meadow Explorer
Very Brief Intro: 以草地、果實、雲朵與小動物作為自然探索線索，讓分類瀏覽像在一座小花園裡尋找新朋友。
Probability: 0.04

## Selected Direction: Sunlit Storybook

### Design Movement
Contemporary picture-book editorial design，融合童書插畫、紙張材質與柔和的 editorial collage，不使用過度卡通化的糖果漸層。

### Core Principles
1. 每個互動都要像翻頁或貼上貼紙一樣清楚、溫和、有回饋。
2. 大圖先於文字；單字、圖片、發音按鈕形成單一視覺焦點。
3. 留白與不對稱排版提供呼吸感，避免密集的成人儀表板感。
4. 顏色用於分類與情緒，不以高對比刺激取代內容層級。

### Color Philosophy
底色使用溫暖的奶油紙色，搭配葉綠、珊瑚橘、天空藍與蛋黃；這些色彩像在自然光下的蠟筆與彩紙，讓幼兒容易辨識，也讓陪讀者感到安定。品牌主色為「Sunny Marigold」#F6B84B，代表每次按下發音按鈕時亮起的小小發現。

### Layout Paradigm
採用「花園路徑」結構：左側是可滾動的分類籬笆，右側是沿著路徑散落的卡片群；首頁上方以一張偏置的主卡片介紹今日單字，再由分類標籤引導探索。桌面版不追求完全對稱，手機版則收斂成上下堆疊，確保觸控尺寸充足。

### Signature Elements
1. 紙張邊緣與手繪短線，作為區塊分隔與 hover 的視覺語彙。
2. 每張卡片有不同但受控的彩色底紙，配上大尺寸圓形插畫窗。
3. 發音按鈕以「小喇叭貼紙」造型呈現，點擊時有輕微彈跳與聲波線。

### Interaction Philosophy
操作應該可預期、可反覆嘗試且不帶壓力。點擊圖片或單字都能播放發音；分類切換立即更新並保留清晰的選取狀態；使用鍵盤時保留明顯 focus ring，讓家長也能協助操作。

### Animation
初次載入時卡片以 40ms 間隔輕微上移淡入；切換分類只使用 opacity 與 translate，控制在 220ms 內；發音按鈕按下時 scale 到 0.96，播放中顯示兩圈短暫聲波；尊重 prefers-reduced-motion，減少所有非必要動畫。

### Typography System
標題使用 Fredoka，因為字形圓潤但仍保有閱讀辨識度；內文與單字使用 Nunito，維持幼兒與陪讀者的舒適閱讀。主標 48–64px，卡片單字 28–34px，分類標籤 15–17px，所有按鈕至少 16px 並使用 700 weight。

### Brand Essence
Little Word Garden 是給 2–6 歲孩子與陪讀者的第一座英文單字花園：用圖片、聲音與小小探索，讓每天多認識一個詞變得自然。 Personality: warm, curious, encouraging.

### Brand Voice
標題、CTA 與微文案要短、明亮、帶有陪伴感，不使用泛泛的 marketing 口號。
- “Pick a picture. Find a word.”
- “Tap the little speaker and say it together.”

### Wordmark & Logo
Logo 為一個由三片葉子與一本翻開的小書組成的抽象圖形，不放文字；葉片中間留出一個小太陽形負空間，作為 favicon 與 header mark。Wordmark 以 Fredoka 粗體搭配略微上揚的 baseline，像孩子寫下的第一個單字。

### Signature Brand Color
Sunny Marigold #F6B84B，作為發音按鈕、進度提示與品牌標記的共同識別色。

## Style Decisions

- Word cards are treated as lightly scattered cut-paper pieces along a garden path, with controlled rotation, dashed paper edges, and varied corner shapes instead of a perfectly uniform catalog grid.
- Vocabulary imagery uses one soft picture-book/cut-paper presentation: gentle color blocks, rounded frames, subtle paper shadows, and no glossy interface icon treatment.
- Sunny Marigold #F6B84B is reserved for discovery moments, especially primary actions, speaker stickers, sound-wave marks, and small progress details.
- Small garden markers and dashed dividers are used between content groups to keep a long vocabulary scroll feeling like a guided storybook walk.
