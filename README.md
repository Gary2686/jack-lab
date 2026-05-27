# Jack Lab 徐傑克實驗室 — 官方網站

國立中山大學 資訊管理學系 · Jack Lab 學術實驗室網站。
Bilingual (繁體中文 / English) academic lab website for **Jack Lab**, Department of Information Management, National Sun Yat-sen University.

採 **資料與元件分離** 架構：所有文字內容集中於 `js/data/*.js`，視覺元件為可重複使用的 React 元件。
免建置（no-build）：透過 CDN 載入 React + Tailwind，JSX 於瀏覽器即時轉譯，直接部署到 GitHub Pages。

---

## 🗂 專案結構 / Structure

```
jack-lab/
├─ index.html              # 入口：載入 CDN、字體、Tailwind 設定與所有 script
├─ css/styles.css          # 自訂樣式：動畫、背景紋理、捲軸
├─ assets/favicon.svg      # 站徽（JL）
└─ js/
   ├─ data/                # ★ 內容資料（最常更新的地方，皆為 { zh, en } 雙語）
   │  ├─ site.js           #   導覽列、首頁、關於我們、頁尾、通用字串
   │  ├─ members.js        #   團隊成員（指導教授／博後／博士候選人／碩士／畢業）
   │  ├─ research.js       #   四大研究領域與子分類
   │  ├─ publications.js   #   學術發表（期刊／研討會／專書／計畫／學生論文）
   │  ├─ awards.js         #   榮譽榜
   │  ├─ news.js           #   最新消息與趨勢
   │  ├─ activities.js     #   活動參與
   │  └─ tools.js          #   26 個策略分析工具（各有獨立介紹頁）
   ├─ core.jsx             # 語言切換 context、雜湊路由、共用 hooks
   ├─ ui.jsx               # 可重複使用元件（Icon/Card/Button/Avatar…）
   ├─ layout.jsx           # Navbar（響應式＋漢堡選單）＋ Footer（含版權）
   ├─ pages.jsx            # 所有頁面元件
   └─ app.jsx              # 路由切換與掛載
```

---

## ✏️ 如何更新內容 / How to edit content

> 多數更新 **只需修改 `js/data/` 內的資料檔**，不需要動到元件程式碼。
> Most updates only require editing files in `js/data/` — no component code needed.

每筆資料都是雙語物件：`{ zh: "中文", en: "English" }`。前端會依目前語言自動切換。

- **新增成員**：在 `js/data/members.js` 對應的 `group.members` 陣列加入一筆物件。
- **新增論文 / 計畫**：在 `js/data/publications.js` 的 `items` 加入物件，`type` 對應 `types`。
- **新增消息**：在 `js/data/news.js` 的 `items` 加入物件（`date` 用 `YYYY-MM-DD`，會自動排序、`pinned: true` 置頂）。
- **新增榮譽 / 活動**：分別編輯 `awards.js` / `activities.js` 的 `items`。
- **新增研究主題**：在 `js/data/research.js` 的 `areas` 加入一個物件即可。
- **新增分析工具**：在 `js/data/tools.js` 的 `items` 加入物件並指定 `categoryId`，會自動產生 `#/tools/<id>` 介紹頁。

### 圖片 / 照片
尚未提供的圖片會顯示灰色佔位。要加入圖片：把檔案放進 `assets/`，再把路徑填入對應欄位，例如
`photo: "assets/hsu.jpg"`、`photos: ["assets/retreat-1.jpg"]`、`image: "assets/news-1.jpg"`。

### 教學投影片（策略工具 PDF）
26 份投影片已壓縮（約 13MB→~2MB／份，共約 47MB）並放在 `assets/tools/<工具id>.pdf`，
每個工具頁面可直接「檢視投影片」與「下載 PDF」。要更新某份投影片，替換 `assets/tools/` 內對應 PDF 即可
（壓縮腳本使用 PyMuPDF 將投影片以螢幕解析度重繪）。原始高解析檔在 Google 雲端硬碟（見 `tools.deckFolderUrl`）。

### ⚠ 待確認的暫定資料 / Placeholders to verify
- 部分成員的 **英文姓名、Email、Google Scholar 連結** 為暫定，請於 `members.js` 更新。
- `publications.js` / `awards.js` / `news.js` / `activities.js` 內含 **（範例）** 字樣者為結構範例，請替換為實際資料。

---

## 💻 本機預覽 / Run locally

因為 JSX 由瀏覽器透過 Babel 載入外部檔案，需以 **本機伺服器**（非直接雙擊 `index.html`）開啟：

```bash
# 在專案資料夾執行其一 / from the project folder
python -m http.server 8000
# 或 / or
npx serve .
```

然後開啟 / then open: <http://localhost:8000>

---

## 🚀 部署到 GitHub Pages / Deploy

1. 推送到 GitHub repository（見下方）。
2. 到 repo 的 **Settings → Pages**，Source 選 **Deploy from a branch**，branch 選 `main` / 根目錄 `/`。
3. 稍候即可由 `https://<帳號>.github.io/<repo>/` 瀏覽。
   （已內含 `.nojekyll`，確保 `js/` 等資料夾正常提供。）

```bash
git init
git add .
git commit -m "Jack Lab website"
git branch -M main
git remote add origin git@github.com:Gary2686/jack-lab.git
git push -u origin main
```

---

## 🎨 設計 / Design
藍白色系、淺灰背景、卡片式區塊、圓角、柔和陰影與適度動態效果。
主色定義於 `index.html` 的 Tailwind `theme.extend.colors`（`navy` / `brand` / `sand`），可集中調整。

© 版權所有 中山大學資管系徐傑克實驗室 (Jack Lab)
