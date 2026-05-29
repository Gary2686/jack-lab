/* =============================================================================
 * consulting.js — 顧問服務 / Consulting Services
 * 實驗室對外的產學案、企業輔導、工作坊與應用開發專案。
 * Jack Lab's industry-collaboration projects: corporate coaching, workshops,
 * and applied-research engagements. Card layout & fields mirror activities.js
 * so the same render logic can be reused on the page.
 *
 * item 欄位 / fields:
 *   id, date(YYYY-MM-DD), title{zh,en}, location{zh,en}, tags:[{zh,en}],
 *   description{zh,en}, instructor(memberId), projectMembers:[memberId],
 *   photos:[path]
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.consulting = {
  items: [
    {
      id: "act-dementia-vr-2025", date: "2025-09-20",
      title: { zh: "智趣時光 · 失智症照護 VR 應用開發（與高雄榮總合作）", en: "Cognitive-Fun Time · Dementia-Care VR Application (with Kaohsiung Veterans General Hospital)" },
      location: { zh: "高雄 · 左營區福山里活動中心 / 高雄榮總", en: "Kaohsiung · Zuoying Fushan Community Center / KSVGH" },
      tags: [
        { zh: "產學合作", en: "Industry Collaboration" },
        { zh: "VR", en: "VR" },
        { zh: "醫療照護", en: "Healthcare" },
        { zh: "跨領域研究", en: "Interdisciplinary" },
      ],
      description: {
        zh: "Jack Lab 與高雄榮總合作開發「智趣時光」失智症照護 VR 應用，協助家屬與照護者更深入理解失智症患者的日常情境與互動策略。\n\n應用設計涵蓋 7 種典型失智症情境（例如患者誤認家中有小偷、重複相同對話等），體驗者透過語音回應系統選擇適當的應對方式，系統即時檢核並提供教學回饋。\n\n專案以 Unity + VR 開發、情境設計與使用者體驗研究為核心，結合跨領域的設計思維與行為研究工具。2025 年 9 月在高雄榮總與左營區福山里活動中心進行成果展示，吸引一般民眾、家屬，以及樹人醫專等職能治療相關科系師生參與體驗，並從跨領域使用者回饋持續優化系統流程與互動設計。",
        en: "In collaboration with Kaohsiung Veterans General Hospital (KSVGH), Jack Lab developed the \"Cognitive-Fun Time\" dementia-care VR application, helping families and caregivers gain a deeper understanding of patients' day-to-day situations and effective interaction strategies.\n\nThe app covers seven typical dementia scenarios (e.g., patient mistakenly believing there is an intruder at home, repeating the same conversation). Users select an appropriate response through voice interaction, and the system provides real-time feedback and instructional videos.\n\nBuilt with Unity + VR, scenario design, and user-experience research, the project integrates cross-disciplinary design thinking with behavioral research tools. Public demonstrations were held in September 2025 at KSVGH and the Zuoying Fushan Community Center, drawing in the general public, family members, and occupational-therapy students from Shu-Te College — whose feedback continues to shape the system's flow and interaction design.",
      },
      instructor: "hsu-shih-chieh",
      projectMembers: ["chien-yun-ting", "yang-chu-chun", "hsu-te-yen", "liu-kuan-hung", "huang-shu-han", "chang-chan-chia"],
      photos: [
        "assets/activities/dementia-vr-2025/1.jpg",
        "assets/activities/dementia-vr-2025/2.jpg",
        "assets/activities/dementia-vr-2025/3.jpg",
        "assets/activities/dementia-vr-2025/4.jpg",
        "assets/activities/dementia-vr-2025/5.jpg",
        "assets/activities/dementia-vr-2025/6.jpg",
      ],
    },
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
        "assets/activities/sen-art-museum/5.jpg",
        "assets/activities/sen-art-museum/6.jpg",
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
      photos: [
        "assets/activities/strategic-innovation-2025/1.jpg",
        "assets/activities/strategic-innovation-2025/2.jpg",
        "assets/activities/strategic-innovation-2025/3.jpg",
        "assets/activities/strategic-innovation-2025/4.jpg",
        "assets/activities/strategic-innovation-2025/5.jpg",
        "assets/activities/strategic-innovation-2025/6.jpg",
      ],
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
        "assets/activities/fanshikang/5.jpg",
        "assets/activities/fanshikang/6.jpg",
      ],
    },
  ],
};
