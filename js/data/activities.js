/* =============================================================================
 * activities.js — 活動參與 / Activities
 * 實驗室活動心得、經歷描述與照片。新增一筆活動：在 items 加入物件。
 * Lab activity reflections, descriptions and photos. Add an item to `items`.
 *
 * item 欄位 / fields:
 *   id, date(YYYY-MM-DD), title{zh,en}, location{zh,en}, tags:[{zh,en}],
 *   description{zh,en}, photos:[]   // photos 留空陣列即顯示灰色佔位 / empty = gray placeholders
 *
 * 加入照片：把圖片放到 assets/，再填路徑，例如
 * Add photos: drop images in assets/ then list paths, e.g.
 *   photos: ["assets/activity-2026-retreat-1.jpg", "assets/activity-2026-retreat-2.jpg"]
 * ⚠ 以下為結構範例，請替換為實際活動。 Sample entries — replace with real data.
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.activities = {
  items: [
    {
      id: "act-sen-art-2026", date: "2026-03-15",
      title: { zh: "森美術 · 策略管理工作坊", en: "Sen Art Museum · Strategic Management Workshop" },
      location: { zh: "森美術 Sen Art Museum", en: "Sen Art Museum" },
      tags: [
        { zh: "產學合作", en: "Industry Collaboration" },
        { zh: "策略管理", en: "Strategic Management" },
        { zh: "商業模式", en: "Business Model" },
      ],
      description: {
        zh: "Jack Lab 為森美術提供策略管理與商業模式診斷工作坊，協助團隊釐清品牌定位、顧客價值主張與下一階段的成長方向。我們以實驗室自主整理的策略分析工具組（包含商業模式畫布、價值主張、競爭分析與顧客洞察等框架）為基礎，搭配個案研究方法引導討論，與品牌共同產出可落地的策略地圖。",
        en: "Jack Lab delivered a strategic-management and business-model diagnostic workshop for Sen Art Museum, helping the team sharpen brand positioning, customer value proposition, and the next phase of growth. Drawing on the lab's curated strategy toolkit (business model canvas, value proposition, competitive analysis, customer insight, and related frameworks) and case-research methods, we co-produced an actionable strategy map with the brand.",
      },
      instructor: "hsu-shih-chieh",
      projectMembers: ["liu-kuan-hung", "tseng-shu-huan", "kung-sung-yu", "wu-cheng-chien"],
      photos: [
        "assets/activities/sen-art-museum/1.jpg",
        "assets/activities/sen-art-museum/2.jpg",
        "assets/activities/sen-art-museum/3.jpg",
        "assets/activities/sen-art-museum/4.jpg",
      ],
    },
    {
      id: "act-strategic-innovation-2025", date: "2025-10-15",
      title: { zh: "2025 策略創新工作坊 · 南部企業輔導", en: "2025 Strategic Innovation Workshop · Southern Taiwan SMEs" },
      location: { zh: "高雄 · 南部在地企業", en: "Kaohsiung · Southern Taiwan SMEs" },
      tags: [
        { zh: "產學合作", en: "Industry Collaboration" },
        { zh: "策略創新", en: "Strategic Innovation" },
        { zh: "企業輔導", en: "Coaching" },
      ],
      description: {
        zh: "2025 策略創新工作坊累計輔導約 15 家南部在地企業，主題橫跨數位轉型、商業模式創新、市場定位與顧客價值。徐士傑教授帶領 Jack Lab 團隊，以實驗室整合的策略分析工具組合（涵蓋商業模式、競爭定位、顧客價值、創新管理等）作為共同語言，搭配多輪深度個別輔導，協助每家企業聚焦核心問題、確認方向並產出可立即執行的下一步行動。",
        en: "The 2025 Strategic Innovation Workshop coached around 15 SMEs across southern Taiwan, covering digital transformation, business-model innovation, market positioning, and customer value. Led by Prof. Shih-Chieh Hsu, the Jack Lab team used the lab's integrated strategy toolkit (business model, competitive positioning, customer value, innovation management, etc.) as a shared language, then ran multiple rounds of deep one-on-one consultation to help each firm focus on the core problem, confirm a direction, and produce concrete next-step actions.",
      },
      instructor: "hsu-shih-chieh",
      projectMembers: ["gary-yeh", "liu-kuan-hung", "chang-chan-chia", "huang-shu-han"],
      photos: [],
    },
    {
      id: "act-fanshikang-2025", date: "2025-09-15",
      title: { zh: "凡事康 · 個案研究與策略診斷", en: "Fanshikang · Case Research & Strategy Diagnostics" },
      location: { zh: "凡事康", en: "Fanshikang" },
      tags: [
        { zh: "產學合作", en: "Industry Collaboration" },
        { zh: "個案研究", en: "Case Research" },
        { zh: "策略診斷", en: "Strategy Diagnostics" },
      ],
      description: {
        zh: "Jack Lab 為凡事康進行個案研究與策略診斷，協助釐清商業模式、市場定位與成長機會。透過實驗室擅長的深度個案分析方法、策略框架與顧客行為研究工具，與經營團隊一同辨識營運痛點、評估差異化可能，並描繪未來發展的策略選項。",
        en: "Jack Lab provided case-research and strategy-diagnostic support for Fanshikang, clarifying its business model, market positioning, and growth opportunities. Using the lab's signature in-depth case-analysis methods, strategy frameworks, and consumer-behavior research tools, we worked with the management team to identify operational pain points, evaluate differentiation paths, and outline strategic options for the road ahead.",
      },
      instructor: "hsu-shih-chieh",
      projectMembers: ["gary-yeh"],
      photos: [
        "assets/activities/fanshikang/1.jpg",
        "assets/activities/fanshikang/2.jpg",
        "assets/activities/fanshikang/3.jpg",
        "assets/activities/fanshikang/4.jpg",
      ],
    },
    {
      id: "act-1", date: "2026-04-20",
      title: { zh: "（範例）實驗室期末聚會", en: "(Sample) End-of-Semester Lab Gathering" },
      location: { zh: "高雄 · 國立中山大學", en: "Kaohsiung · NSYSU" },
      tags: [{ zh: "聚會", en: "Gathering" }, { zh: "團隊", en: "Team" }],
      description: {
        zh: "實驗室成員齊聚，回顧本學期的研究進度與學習收穫，並規劃下階段的研究方向。",
        en: "Lab members gathered to review the semester's research progress and plan the next phase.",
      },
      photos: [], draft: true,
    },
    {
      id: "act-2", date: "2026-02-10",
      title: { zh: "（範例）神經科學研究方法工作坊", en: "(Sample) Neuroscience Methods Workshop" },
      location: { zh: "Jack Lab 實驗室", en: "Jack Lab" },
      tags: [{ zh: "工作坊", en: "Workshop" }, { zh: "EEG", en: "EEG" }, { zh: "眼動", en: "Eye tracking" }],
      description: {
        zh: "成員實際操作腦波與眼動設備，學習實驗設計、資料蒐集與分析流程。",
        en: "Members hands-on with EEG and eye-tracking equipment, learning experimental design, data collection, and analysis.",
      },
      photos: [], draft: true,
    },
    {
      id: "act-3", date: "2025-11-15",
      title: { zh: "（範例）學術研討會參與", en: "(Sample) Conference Participation" },
      location: { zh: "", en: "" },
      tags: [{ zh: "研討會", en: "Conference" }, { zh: "交流", en: "Exchange" }],
      description: {
        zh: "成員參與學術研討會並發表研究成果，與國內外學者交流。",
        en: "Members presented research at an academic conference and exchanged ideas with scholars.",
      },
      photos: [], draft: true,
    },
  ],
};
