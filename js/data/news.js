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
      id: "n-1", category: "labNews", date: "2026-05-28", pinned: true, tags: ["recruiting"],
      title: {
        zh: "Jack Lab 招生：徵求碩士生與博士生加入",
        en: "Jack Lab is Recruiting Master's and Ph.D. Students",
      },
      summary: {
        zh: "Jack Lab 持續招收對人工智慧與數位轉型、神經科學與人機互動、個案研究與服務科學，以及模糊集質性比較分析（fsQCA）感興趣的同學，碩士生與博士生皆歡迎加入。",
        en: "Jack Lab is recruiting Master's and Ph.D. students interested in AI & digital transformation, neuroscience & HCI, case studies & service science, or fuzzy-set Qualitative Comparative Analysis (fsQCA).",
      },
      body: {
        zh: "Jack Lab（國立中山大學資訊管理學系徐傑克實驗室）是一個跨領域研究團隊，研究橫跨人工智慧、數位轉型、神經科學與人機互動、服務科學、個案研究與 fsQCA 方法論。\n\n我們提供：\n• 腦波（EEG）與眼動追蹤實驗設備，支援行為與認知層面的研究設計\n• 國際期刊與頂尖研討會（AMCIS、PACIS、HICSS、ICIS、ECIS 等）的發表機會與經驗\n• 跨領域研究訓練、產學合作專案與個案教學\n• 完整的策略分析工具與教學資源，協助學生系統化建立分析思維\n\n歡迎對嚴謹研究方法、真實管理問題與新興科技同時感興趣的同學加入。報名與洽詢請聯絡指導教授徐士傑主任或實驗室成員，亦可參考本網站「研究領域與成果」、「學術發表」與「團隊成員」頁面進一步了解實驗室方向。",
        en: "Jack Lab (Department of Information Management, National Sun Yat-sen University) is an interdisciplinary research team working at the intersection of AI, digital transformation, neuroscience & HCI, service science, case research, and fsQCA methodology.\n\nWhat we offer:\n• EEG and eye-tracking facilities for behavioral and cognitive studies\n• Publication opportunities at top venues (AMCIS, PACIS, HICSS, ICIS, ECIS, and SSCI / SCIE journals)\n• Interdisciplinary training, university–industry projects, and case-based teaching\n• A curated toolkit of strategy frameworks and teaching resources\n\nWe welcome students who care about both rigorous methodology and real-world management problems. To apply or inquire, please contact Prof. Shih-Chieh Hsu (Chair) or any Jack Lab member; the Research, Publications, and Team pages on this site provide more detail about our directions.",
      },
      image: "", url: "",
    },
    {
      id: "n-2", category: "labNews", date: "2026-04-15", pinned: false, draft: true, tags: ["paper", "ai"],
      title: { zh: "（範例）實驗室論文獲期刊接受", en: "(Sample) Lab paper accepted by a journal" },
      summary: { zh: "一篇關於生成式 AI 與企業績效的研究獲接受刊登。", en: "A study on generative AI and firm performance has been accepted." },
      body: { zh: "論文資訊待補充，後續可連結至「學術發表」頁面。", en: "Paper details to be added; can later link to the Publications page." },
      image: "", url: "",
    },
    {
      id: "n-3", category: "trends", date: "2026-03-20", pinned: false, draft: true, tags: ["ai", "fsqca"],
      title: { zh: "（範例）趨勢：生成式 AI 與組態研究方法", en: "(Sample) Trend: Generative AI and configurational methods" },
      summary: { zh: "整理近期 AI 與 fsQCA 在資訊管理研究中的應用趨勢。", en: "A roundup of recent trends in AI and fsQCA within IM research." },
      body: { zh: "趨勢內文待補充。", en: "Trend article to be added." },
      image: "", url: "",
    },
    {
      id: "n-4", category: "events", date: "2026-02-10", pinned: false, draft: true, tags: ["workshop", "neuro"],
      title: { zh: "（範例）腦波與眼動研究方法工作坊", en: "(Sample) EEG & eye-tracking methods workshop" },
      summary: { zh: "實驗室舉辦神經科學研究方法工作坊，分享實驗設計與資料分析。", en: "The lab held a workshop on neuroscience research methods." },
      body: { zh: "活動紀錄與照片待補充。", en: "Event notes and photos to be added." },
      image: "", url: "",
    },
    {
      id: "n-5", category: "media", date: "2026-01-05", pinned: false, draft: true, tags: ["talk"],
      title: { zh: "（範例）媒體報導／外部連結", en: "(Sample) Media coverage / external link" },
      summary: { zh: "相關報導、外部平台文章或學術社群連結。", en: "Related coverage, external articles, or academic-community links." },
      body: { zh: "連結待補充。", en: "Link to be added." },
      image: "", url: "",
    },
  ],
};
