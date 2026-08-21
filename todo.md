# 本次新增單字資料工作

- [x] 建立 typed JSON 單字資料結構，包含 id、word、translation、category、image、imagePosition、audio 與 alt 欄位
- [x] 將目前 50 組單字搬移至獨立資料檔
- [x] 建立圖片資產命名、路徑與 fallback 規則
- [x] 生成並接入代表性單字圖片資產
- [x] 更新卡片 UI 使用 image 與 imagePosition
- [x] 執行型別檢查與預覽驗證

# 雙語發音更新

- [x] 在每筆單字加入 englishAudio、chineseAudio 與語音 fallback 設定
- [x] 更新 JSON Schema 的雙語音檔欄位
- [x] 實作英文發音與中文發音兩個獨立按鈕
- [x] 驗證停止前一段語音、語系與按鈕狀態
- [x] 保存並交付雙語發音版本

# 發音按鈕放大更新

- [x] 放大 EN 與中文按鈕的尺寸、文字與圖示
- [x] 增加按鈕間距與幼兒觸控區域
- [x] 驗證桌面與手機版不擠壓單字內容
- [x] 保存並交付按鈕放大版本

# 自動播放、卡片動畫與聽音辨圖遊戲

- [x] 加入同分類單字自動播放、朗讀、目前單字與暫停控制
- [x] 加入卡片點擊翻轉與趣味動畫狀態
- [x] 加入聽音辨圖遊戲入口、題目、選項、回饋與下一題
- [x] 驗證語音停止、動畫可及性與手機版操作
- [x] 保存並交付互動功能版本

# 新分類、遊戲音效與星星收集冊

- [x] 新增 Colors、Numbers、Shapes 三個分類
- [x] 擴充三個分類的單字、中文、圖片與 fallback emoji 資料
- [x] 為新分類生成代表性圖片資產並接入 JSON
- [x] 加入答對、答錯與五顆星過關音效
- [x] 建立星星收集冊頁面與 localStorage 星星保存
- [x] 驗證新分類、遊戲回饋與收集冊流程
- [x] 保存並交付更新版本

# 手機版版面優化

- [x] 調整手機頂部導覽與按鈕間距
- [x] 縮短手機英雄區並優化主視覺比例
- [x] 改善分類橫向滑動列與可見提示
- [x] 優化手機單字卡、遊戲與星星收集冊排版
- [x] 驗證 390px 與 430px 手機尺寸
- [x] 保存並交付手機版優化版本

# GitHub 與 GitHub Pages

- [ ] 加入 GitHub Pages 的 Vite base 與建置設定
- [ ] 建立 GitHub Actions Pages workflow
- [ ] 建立公開 little-word-garden 儲存庫並推送程式碼
- [ ] 驗證 workflow、建置產物與 Pages 條件
- [ ] 交付儲存庫連結與最後啟用步驟

# README 與 Pages 發布說明

- [x] 新增 README.md，說明功能、技術架構與資料結構
- [x] 加入本機開發與 GitHub Pages 操作步驟
- [x] 推送 README 至公開 GitHub 儲存庫
- [x] 驗證 README 與 Pages workflow 可見
- [x] 交付儲存庫與最後發布確認步驟

# 家長專區、載入動畫與新分類

- [x] 新增 Body Parts 與 Clothes 分類
- [x] 擴充兩個分類的單字、中文、圖片 fallback 與雙語發音欄位
- [x] 生成兩個新分類的代表性圖片資產
- [x] 加入首次載入吉祥物動畫與 reduced-motion 處理
- [x] 建立家長專區，顯示星星、答題進度與分類探索狀況
- [x] 驗證新分類、發音、載入畫面與家長專區手機版
- [x] 同步 GitHub Pages 並保存交付版本

# 家長統計、設定與十張單字插圖

- [x] 建立每日學習時間的 localStorage 紀錄與圖表資料結構
- [x] 顯示各分類學習完成率與進度條
- [x] 建立家長設定面板，控制自動播放與遊戲音效
- [x] 生成 Body Parts 與 Clothes 的 10 張專屬單字插圖
- [x] 將 10 張插圖 URL 寫回 words.json
- [x] 驗證統計、設定、語音音效與圖片呈現
- [x] 同步 GitHub Pages 並保存交付版本

# 學習報告、每日目標與 Food／Animals 擴充

- [x] 新增 Food 與 Animals 的單字、中文、雙語發音與圖片欄位
- [ ] 生成 Food 與 Animals 專屬單字插圖並接入 JSON（Animals 已完成；Food 暫使用 emoji fallback）
- [x] 在家長設定加入每日學習目標分鐘數
- [x] 在首頁顯示當日目標達成進度條
- [x] 建立可下載的學習報告，包含進度與統計圖表摘要
- [x] 驗證下載內容、目標設定、新分類與圖片呈現
- [x] 同步 GitHub Pages 並保存交付版本

# React duplicate key 修正

- [x] 找出 words.json 全部重複 id
- [x] 移除重複資料並保留完整圖片與 fallback 欄位
- [x] 執行 JSON 唯一性檢查、pnpm check 與建置
- [x] 驗證瀏覽器不再出現 duplicate key 警告
- [x] 保存並同步修正版
