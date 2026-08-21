# Little Word Garden

Little Word Garden 是一個為 **2–6 歲幼兒**設計的英文學習卡片平台。孩子可以從圖片認識英文單字，分別播放英文與繁體中文發音，透過分類自動播放、卡片驚喜動畫與「聽音辨圖」遊戲，在輕鬆的繪本花園中累積學習星星。

## 主要功能

| 功能 | 說明 |
| --- | --- |
| 89 組英文單字 | 涵蓋 Animals、Food、Fruit、Transport、Nature & Home、Colors、Numbers、Shapes、Body Parts、Clothes。 |
| 雙語發音 | 每張卡片提供 EN 與中文兩個獨立按鈕；沒有音檔時使用瀏覽器 Speech Synthesis。 |
| 分類自動播放 | 依目前分類自動輪播並朗讀單字，可隨時暫停。 |
| 卡片互動 | 點擊圖片會產生彈跳、旋轉與星光效果。 |
| 聽音辨圖 | 播放英文單字後，從四張圖片選出正確答案，答對與答錯都有聲音回饋。 |
| 星星收集冊 | 答對遊戲題目可收集星星，每五顆星星播放過關歡呼；進度儲存在瀏覽器 localStorage。 |
| 家長專區 | 查看七日學習時間、分類完成率、每日目標，並可下載 HTML 學習報告。 |
| 手機版介面 | 支援 390px 與 430px 等常見手機寬度，分類列可橫向滑動。 |

## 技術架構

本專案使用 React 19、TypeScript、Vite、Tailwind CSS 4 與 Lucide React。單字內容集中在 [`client/src/data/words.json`](client/src/data/words.json)，欄位規則定義於 [`client/src/data/word.schema.json`](client/src/data/word.schema.json)，因此新增單字時不需要修改卡片元件。

| 路徑 | 用途 |
| --- | --- |
| `client/src/pages/Home.tsx` | 首頁、單字卡、分類、自動播放與遊戲互動。 |
| `client/src/data/words.json` | 目前 89 組單字資料，含錯題本可追蹤的唯一 id。 |
| `client/src/data/word.schema.json` | 單字 JSON 欄位與分類規範。 |
| `client/src/index.css` | Sunlit Storybook 視覺語言與響應式樣式。 |
| `.github/workflows/deploy-pages.yml` | GitHub Pages 自動建置與部署流程。 |

## 本機開發

請先安裝 Node.js 22 與 pnpm，接著執行：

```bash
pnpm install
pnpm dev
```

開發伺服器啟動後，使用瀏覽器開啟終端機顯示的本機網址。提交前可執行型別檢查與正式建置：

```bash
pnpm check
pnpm build
```

## 新增單字

請依照現有資料格式在 `client/src/data/words.json` 新增物件。`image`、`englishAudio` 與 `chineseAudio` 可以先填入 `null`；網站會分別使用 emoji fallback 與瀏覽器語音。`category` 必須使用 schema 中已定義的分類名稱，圖片位置可用 CSS `object-position` 格式，例如 `50% 50%`。

```json
{
  "id": "animals-turtle",
  "word": "turtle",
  "translation": "烏龜",
  "emoji": "🐢",
  "category": "Animals",
  "image": null,
  "imagePosition": "50% 50%",
  "imageAlt": "A friendly turtle",
  "englishAudio": null,
  "chineseAudio": null,
  "speech": {
    "englishLocale": "en-US",
    "chineseLocale": "zh-TW"
  }
}
```

## GitHub Pages

本儲存庫已包含 GitHub Actions workflow。推送到 `main` 後，workflow 會安裝依賴、執行 `pnpm build`，再將 `dist/public` 發布至 Pages。首次啟用時，請在 GitHub 儲存庫中開啟 **Settings → Pages → Build and deployment → Source: GitHub Actions**，再到 **Actions** 頁面確認 `Deploy Little Word Garden to GitHub Pages` workflow。

> GitHub Pages 版本使用 `/little-word-garden/` 作為 Vite base。若圖片來自 Manus storage，GitHub Pages 上可能需要改用可公開存取的靜態圖片 URL 或放入儲存庫的資產路徑。

預期網址格式如下：

```text
https://qpooqp889.github.io/little-word-garden/
```

## 設計方向

網站採用 **Sunlit Storybook**：奶油紙張背景、柔和蠟筆色、剪紙卡片、自然光插畫與大觸控按鈕，讓幼兒先看圖、再聽音、最後跟著說。介面同時保留家長可理解的分類與學習進度提示。

## License

目前未指定開源授權。若要允許他人修改、再發布或商業使用，請在儲存庫中補上適合的 `LICENSE` 檔案。
