/* =============================================================================
 * news.js — 最新消息與趨勢資訊 / News & Trends
 * 新增一則：在 items 加入物件即可（date 用 YYYY-MM-DD，會自動排序）。
 * Add an item to `items` (date as YYYY-MM-DD; sorted automatically).
 *
 * item 欄位 / fields:
 *   id, category(對應 categories), date, pinned(bool), tags:[tagId],
 *   title{zh,en}, summary{zh,en}, body{zh,en}(可省略), image('' = 灰底), url
 * ⚠ 以下為結構範例，請替換為實際消息。 Sample entries — replace with real data.
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.news = {
  categories: [
    { id: "labNews", label: { zh: "實驗室最新消息", en: "Lab News" } },
    { id: "trends", label: { zh: "研究趨勢資訊", en: "Research Trends" } },
    { id: "events", label: { zh: "活動紀錄", en: "Events" } },
    { id: "media", label: { zh: "媒體與外部連結", en: "Media & Links" } },
  ],
  tags: [
    { id: "recruiting", label: { zh: "招生", en: "Recruiting" } },
    { id: "paper", label: { zh: "論文", en: "Paper" } },
    { id: "talk", label: { zh: "演講", en: "Talk" } },
    { id: "ai", label: { zh: "AI", en: "AI" } },
    { id: "neuro", label: { zh: "神經科學", en: "Neuroscience" } },
    { id: "fsqca", label: { zh: "fsQCA", en: "fsQCA" } },
    { id: "workshop", label: { zh: "工作坊", en: "Workshop" } },
  ],
  items: [
    {
      id: "n-1", category: "labNews", date: "2026-05-01", pinned: true, tags: ["recruiting"],
      title: { zh: "（範例）Jack Lab 招收碩士生", en: "(Sample) Jack Lab is recruiting master's students" },
      summary: { zh: "歡迎對 AI、數位轉型、神經科學與人機互動有興趣的同學加入。", en: "We welcome students interested in AI, digital transformation, and neuroscience & HCI." },
      body: { zh: "詳細招生資訊與聯絡方式待補充。", en: "Detailed recruiting information and contact to be added." },
      image: "", url: "",
    },
    {
      id: "n-2", category: "labNews", date: "2026-04-15", pinned: false, tags: ["paper", "ai"],
      title: { zh: "（範例）實驗室論文獲期刊接受", en: "(Sample) Lab paper accepted by a journal" },
      summary: { zh: "一篇關於生成式 AI 與企業績效的研究獲接受刊登。", en: "A study on generative AI and firm performance has been accepted." },
      body: { zh: "論文資訊待補充，後續可連結至「學術發表」頁面。", en: "Paper details to be added; can later link to the Publications page." },
      image: "", url: "",
    },
    {
      id: "n-3", category: "trends", date: "2026-03-20", pinned: false, tags: ["ai", "fsqca"],
      title: { zh: "（範例）趨勢：生成式 AI 與組態研究方法", en: "(Sample) Trend: Generative AI and configurational methods" },
      summary: { zh: "整理近期 AI 與 fsQCA 在資訊管理研究中的應用趨勢。", en: "A roundup of recent trends in AI and fsQCA within IM research." },
      body: { zh: "趨勢內文待補充。", en: "Trend article to be added." },
      image: "", url: "",
    },
    {
      id: "n-4", category: "events", date: "2026-02-10", pinned: false, tags: ["workshop", "neuro"],
      title: { zh: "（範例）腦波與眼動研究方法工作坊", en: "(Sample) EEG & eye-tracking methods workshop" },
      summary: { zh: "實驗室舉辦神經科學研究方法工作坊，分享實驗設計與資料分析。", en: "The lab held a workshop on neuroscience research methods." },
      body: { zh: "活動紀錄與照片待補充。", en: "Event notes and photos to be added." },
      image: "", url: "",
    },
    {
      id: "n-5", category: "media", date: "2026-01-05", pinned: false, tags: ["talk"],
      title: { zh: "（範例）媒體報導／外部連結", en: "(Sample) Media coverage / external link" },
      summary: { zh: "相關報導、外部平台文章或學術社群連結。", en: "Related coverage, external articles, or academic-community links." },
      body: { zh: "連結待補充。", en: "Link to be added." },
      image: "", url: "",
    },
  ],
};
