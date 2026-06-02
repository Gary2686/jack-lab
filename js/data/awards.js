/* =============================================================================
 * awards.js — 榮譽榜 / Honors & Awards
 * 新增一筆：在 items 加入物件，type 對應下方 types 之一。
 * item 欄位 / fields:
 *   id, type, year, title{zh,en}, recipient{zh,en}, org{zh,en}, desc{zh,en}, image('' = 灰底)
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.awards = {
  types: [
    { id: "studentThesis", label: { zh: "學生與論文獎項", en: "Student & Thesis Awards" } },
    { id: "competition", label: { zh: "競賽成果", en: "Competitions" } },
    { id: "honor", label: { zh: "教學與研究榮譽", en: "Teaching & Research Honors" } },
    { id: "milestone", label: { zh: "實驗室里程碑", en: "Lab Milestones" } },
  ],
  items: [
    {
      id: "a-hsu-sbir-115",
      type: "honor",
      year: 2026,
      title: {
        zh: "115 年度「小型企業創新研發計畫（SBIR）」服務領域 審查委員",
        en: "SBIR 2026 (Year 115) Service-Domain Review Committee Member",
      },
      recipient: { zh: "徐士傑", en: "Shih-Chieh Hsu" },
      org: { zh: "經濟部 中小及新創企業署", en: "Small and Medium Enterprise and Startup Administration, MOEA" },
      desc: {
        zh: "獲經濟部中小及新創企業署聘任為 115 年度「小型企業創新研發計畫（SBIR）」服務領域審查委員，協助審查中小企業之創新研發提案。",
        en: "Appointed by MOEA's SMESA as a review committee member for the 2026 (ROC Year 115) Small Business Innovation Research (SBIR) Program in the Service Domain, evaluating innovation R&D proposals from SMEs.",
      },
      image: "assets/awards/hsu-sbir-115.jpg",
    },
    {
      id: "a-hsu-sbir-114",
      type: "honor",
      year: 2025,
      title: {
        zh: "114 年度「小型企業創新研發計畫（SBIR）」服務領域 審查委員",
        en: "SBIR 2025 (Year 114) Service-Domain Review Committee Member",
      },
      recipient: { zh: "徐士傑", en: "Shih-Chieh Hsu" },
      org: { zh: "經濟部 中小及新創企業署", en: "Small and Medium Enterprise and Startup Administration, MOEA" },
      desc: {
        zh: "獲經濟部中小及新創企業署聘任為 114 年度「小型企業創新研發計畫（SBIR）」服務領域審查委員。",
        en: "Appointed by MOEA's SMESA as a review committee member for the 2025 (ROC Year 114) SBIR Program in the Service Domain.",
      },
      image: "assets/awards/hsu-sbir-114.jpg",
    },
    {
      id: "a-hsu-teaching-114-1",
      type: "honor",
      year: 2025,
      title: {
        zh: "114 學年度第 1 學期「教學優良課程」教師",
        en: "Outstanding Teaching Course Instructor (AY 2025–2026, 1st Semester)",
      },
      recipient: { zh: "徐士傑", en: "Shih-Chieh Hsu" },
      org: { zh: "國立中山大學", en: "National Sun Yat-sen University" },
      desc: {
        zh: "獲頒國立中山大學 114 學年度第 1 學期「教學優良課程」教師獎，肯定其教學品質與課程設計。",
        en: "Recognized as an Outstanding Teaching Course Instructor at NSYSU for the 1st semester of AY 2025–2026.",
      },
      image: "",
    },
    {
      id: "a-hsu-research-114",
      type: "honor",
      year: 2025,
      title: {
        zh: "114 學年度 學術研究績優教師",
        en: "Outstanding Research Faculty (AY 2025–2026)",
      },
      recipient: { zh: "徐士傑", en: "Shih-Chieh Hsu" },
      org: { zh: "國立中山大學 管理學院", en: "College of Management, NSYSU" },
      desc: {
        zh: "獲國立中山大學管理學院頒發 114 學年度學術研究績優教師獎，肯定其於資訊管理領域的研究表現。",
        en: "Awarded Outstanding Research Faculty by the College of Management, NSYSU, for AY 2025–2026.",
      },
      image: "",
    },
    {
      id: "a-hsu-de-yan-taom-2025",
      type: "studentThesis",
      year: 2025,
      title: {
        zh: "2025 第 18 屆台灣管理學會論文大賞 — AI 應用論文競賽 佳作（碩士｜AI 產業與管理應用組）",
        en: "18th TAOM Best Paper Award (2025) — AI Application Track, Merit Award (M.S., AI Industry & Management)",
      },
      recipient: { zh: "徐德諺（指導教授：徐士傑）", en: "Hsu Te-Yen (Advisor: Shih-Chieh Hsu)" },
      org: { zh: "台灣管理學會（TAOM）", en: "Taiwan Academy of Management (TAOM)" },
      desc: {
        zh: "論文題目：從可供性實現理論觀點探討人工智慧於團隊協作中的應用與可能產生的影響。",
        en: "Paper: An affordance-actualization perspective on AI applications in team collaboration and their potential effects.",
      },
      image: "",
    },
    {
      id: "a-cheng-umc-14",
      type: "studentThesis",
      year: 2024,
      title: {
        zh: "第 14 屆聯電經營管理論文獎 — 傑出獎",
        en: "14th UMC Management Paper Award — Distinguished Award",
      },
      recipient: {
        zh: "鄭鈞、邱兆民、梁定澎、徐士傑、陳怡蓁",
        en: "Cheng J., Chiu C.-M., Liang T.-P., Hsu S.-C., Chen Y.-C.",
      },
      org: { zh: "聯華電子（UMC）", en: "United Microelectronics Corporation (UMC)" },
      desc: {
        zh: "資管系師生團隊鄭鈞、邱兆民、梁定澎、徐士傑、陳怡蓁，共同榮獲第 14 屆聯電經營管理論文獎傑出獎。",
        en: "A joint NSYSU Information Management team received the Distinguished Award at the 14th UMC Management Paper Award.",
      },
      image: "",
    },
    {
      id: "a-cheng-best-dissertation-113",
      type: "studentThesis",
      year: 2025,
      title: {
        zh: "113 學年度 博士研究生優秀畢業論文獎",
        en: "Outstanding Doctoral Dissertation Award (AY 2024–2025)",
      },
      recipient: { zh: "鄭鈞（指導教授：徐士傑）", en: "Cheng J. (Advisor: Shih-Chieh Hsu)" },
      org: { zh: "國立中山大學", en: "National Sun Yat-sen University" },
      desc: {
        zh: "論文題目：差別待遇都一樣嗎？探討資料外洩事件中可比較性如何放大補償不公的影響（Is All Disparate Compensation Treatment the Same? Investigating How Comparability Amplifies the Effect of Compensation Injustice in Data Breach Incidents）。",
        en: "Dissertation: \"Is All Disparate Compensation Treatment the Same? Investigating How Comparability Amplifies the Effect of Compensation Injustice in Data Breach Incidents.\"",
      },
      image: "",
    },
    {
      id: "a-undergrad-vr-2025",
      type: "competition",
      year: 2025,
      title: {
        zh: "2025 第 30 屆全國大專校院資訊應用服務創新競賽 — 資訊應用組 第二名",
        en: "30th National Collegiate ICT Innovation Service Competition (2025) — Information Application Track, 2nd Place",
      },
      recipient: {
        zh: "張耀仁、楊嘉瑜、黃云沛、吳長恩、羅榆翔、張宇承（指導：徐士傑、邱兆民）",
        en: "Chang Y.-J., Yang C.-Y., Huang Y.-P., Wu C.-E., Lo Y.-H., Chang Y.-C. (Advisors: Hsu S.-C., Chiu C.-M.)",
      },
      org: { zh: "教育部 / 大專校院資訊應用服務創新競賽", en: "Ministry of Education / National Collegiate ICT Innovation Service Competition" },
      desc: {
        zh: "大學部專題作品「VR 樂園『憶』壽延年」榮獲第 30 屆全國大專校院資訊應用服務創新競賽資訊應用組第二名。",
        en: "The undergraduate project \"VR Park: Memory & Longevity\" won 2nd place in the Information Application Track at the 30th National Collegiate ICT Innovation Service Competition.",
      },
      image: "",
    },
  ],
};
