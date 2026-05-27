/* =============================================================================
 * site.js — 全站文字內容 / Site-wide content (繁中 + English)
 * 維護方式：所有可見文字集中在此，採 { zh, en } 對照結構。
 * Edit text here. Every visible string is bilingual: { zh, en }.
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.site = {
  /* ---- 基本識別 / Identity ---- */
  brand: {
    short: { zh: "Jack Lab", en: "Jack Lab" },
    full: { zh: "徐傑克實驗室 Jack Lab", en: "Jack Lab" },
    org: {
      zh: "國立中山大學 資訊管理學系",
      en: "Department of Information Management, National Sun Yat-sen University",
    },
    orgShort: { zh: "中山大學 資管系", en: "NSYSU · Dept. of IM" },
  },

  /* ---- 導覽列 / Navigation（順序即顯示順序，可增刪）---- */
  nav: [
    { id: "home", path: "#/", label: { zh: "首頁", en: "Home" } },
    { id: "about", path: "#/about", label: { zh: "關於我們", en: "About" } },
    { id: "team", path: "#/team", label: { zh: "團隊成員", en: "Team" } },
    { id: "research", path: "#/research", label: { zh: "研究領域與成果", en: "Research" } },
    { id: "publications", path: "#/publications", label: { zh: "學術發表", en: "Publications" } },
    { id: "awards", path: "#/awards", label: { zh: "榮譽榜", en: "Honors" } },
    { id: "news", path: "#/news", label: { zh: "最新消息", en: "News" } },
    { id: "activities", path: "#/activities", label: { zh: "活動參與", en: "Activities" } },
  ],

  /* ---- 通用 UI 字串 / Shared UI strings ---- */
  ui: {
    switchLang: { zh: "English", en: "中文" },
    backToTop: { zh: "返回頂部", en: "Back to top" },
    readMore: { zh: "了解更多", en: "Read more" },
    viewAll: { zh: "查看全部", en: "View all" },
    explore: { zh: "進入頁面", en: "Explore" },
    all: { zh: "全部", en: "All" },
    year: { zh: "年份", en: "Year" },
    type: { zh: "類型", en: "Type" },
    topic: { zh: "主題", en: "Topic" },
    category: { zh: "分類", en: "Category" },
    search: { zh: "搜尋…", en: "Search…" },
    noResults: { zh: "目前沒有符合的內容。", en: "No matching items yet." },
    email: { zh: "Email", en: "Email" },
    scholar: { zh: "Google Scholar", en: "Google Scholar" },
    website: { zh: "個人網站", en: "Website" },
    interests: { zh: "研究興趣", en: "Research interests" },
    bio: { zh: "學術簡介", en: "Biography" },
    currentPosition: { zh: "目前動向", en: "Currently" },
    viewSlides: { zh: "檢視教學投影片", en: "View teaching slides" },
    slidesComingSoon: { zh: "教學投影片連結待補充", en: "Slides link coming soon" },
    pinned: { zh: "置頂", en: "Pinned" },
    comingSoon: { zh: "內容陸續更新中", en: "Content coming soon" },
    relatedPublications: { zh: "相關發表", en: "Related publications" },
    backToResearch: { zh: "返回研究領域", en: "Back to Research" },
    backToTools: { zh: "返回分析工具", en: "Back to tools" },
    framework: { zh: "核心構面", en: "Core framework" },
    whenToUse: { zh: "使用情境", en: "When to use" },
    example: { zh: "應用案例", en: "Example" },
    definition: { zh: "方法簡介", en: "Overview" },
    references: { zh: "延伸閱讀", en: "Further reading" },
    photos: { zh: "活動照片", en: "Photos" },
    placeholderPhoto: { zh: "照片待補", en: "Photo coming soon" },
  },

  /* ---- 首頁 / Home ---- */
  home: {
    hero: {
      eyebrow: { zh: "國立中山大學 · 資訊管理學系", en: "National Sun Yat-sen University · Information Management" },
      title: { zh: "Jack Lab 徐傑克實驗室", en: "Jack Lab" },
      tagline: {
        zh: "連結資訊管理理論、數位科技與使用者行為，打造有理論貢獻、也有實務價值的研究。",
        en: "Bridging information systems theory, digital technology, and user behavior — research with both scholarly and practical impact.",
      },
      intro: {
        zh: "我們結合人工智慧與數位轉型、神經科學與人機互動、個案研究與服務科學，以及模糊集質性比較分析（fsQCA），探討科技如何改變組織與人的決策與行為。",
        en: "We integrate AI & digital transformation, neuroscience & human–computer interaction, case studies & service science, and fuzzy-set Qualitative Comparative Analysis (fsQCA) to study how technology reshapes the decisions and behavior of organizations and people.",
      },
      ctaPrimary: { zh: "認識研究領域", en: "Explore research" },
      ctaSecondary: { zh: "認識團隊", en: "Meet the team" },
    },
    intro: {
      title: { zh: "關於 Jack Lab", en: "About Jack Lab" },
      body: {
        zh: "Jack Lab 隸屬於國立中山大學資訊管理學系，是一個跨領域的學術研究團隊。我們關注數位科技與人工智慧如何驅動組織轉型，並運用神經科學工具深入理解使用者在資訊系統中的認知與決策歷程。實驗室同時重視嚴謹的研究方法與真實的管理實務，致力於培養兼具理論深度與應用能力的研究人才。",
        en: "Jack Lab is an interdisciplinary research team in the Department of Information Management at National Sun Yat-sen University. We study how digital technology and AI drive organizational transformation, and use neuroscience tools to understand users' cognition and decision processes within information systems. The lab values both rigorous methodology and real-world management practice, training researchers with theoretical depth and applied capability.",
      },
    },
    sections: {
      research: {
        title: { zh: "研究方向", en: "Research areas" },
        subtitle: { zh: "四大主軸，點擊卡片進入完整內容", en: "Four pillars — click a card for full content" },
      },
      team: {
        title: { zh: "團隊成員", en: "Our team" },
        subtitle: { zh: "指導教授、博士後、博士候選人與研究生", en: "Advisor, postdoc, doctoral and graduate researchers" },
      },
      news: {
        title: { zh: "最新消息與趨勢", en: "News & trends" },
        subtitle: { zh: "公告、活動、論文與研究趨勢", en: "Announcements, events, papers and research trends" },
      },
      publications: {
        title: { zh: "學術發表亮點", en: "Featured publications" },
        subtitle: { zh: "代表性論文、計畫與成果", en: "Selected papers, projects and outcomes" },
      },
    },
  },

  /* ---- 關於我們 / About ---- */
  about: {
    hero: {
      title: { zh: "關於我們", en: "About Us" },
      subtitle: {
        zh: "資訊管理 × 數位科技 × 使用者行為 × 組織管理",
        en: "Information Management × Digital Technology × User Behavior × Organization",
      },
    },
    intro: {
      title: { zh: "實驗室簡介", en: "Who we are" },
      body: {
        zh: "Jack Lab（徐傑克實驗室）隸屬於國立中山大學資訊管理學系，聚焦於人工智慧、數位轉型、神經科學與人機互動、服務科學、個案研究與模糊集質性比較分析（fsQCA）等研究領域。我們以資訊管理為核心，串聯科技、行為與管理三個面向，探討數位時代下組織與個人如何採用、使用並從科技中創造價值。",
        en: "Jack Lab, in the Department of Information Management at National Sun Yat-sen University, focuses on artificial intelligence, digital transformation, neuroscience & human–computer interaction, service science, case research, and fuzzy-set Qualitative Comparative Analysis (fsQCA). Anchored in information management, we connect technology, behavior, and management to study how organizations and individuals adopt, use, and create value from technology in the digital era.",
      },
    },
    vision: {
      title: { zh: "研究願景", en: "Our vision" },
      body: {
        zh: "我們致力於連結資訊管理理論、數位科技應用、使用者行為分析與組織管理實務，推動同時具備理論貢獻與實務價值的學術研究，並將研究成果轉化為教學個案與管理工具，回饋產業與社會。",
        en: "We strive to connect information systems theory, digital technology applications, user-behavior analysis, and organizational practice — advancing research with both theoretical contribution and practical value, and translating findings into teaching cases and management tools that give back to industry and society.",
      },
    },
    features: {
      title: { zh: "研究特色", en: "What sets us apart" },
      items: [
        {
          icon: "layers",
          title: { zh: "跨領域研究", en: "Interdisciplinary" },
          desc: {
            zh: "整合資訊管理、行為科學、神經科學與管理理論，從多重視角切入同一問題。",
            en: "Integrating information management, behavioral science, neuroscience, and management theory to view one problem from multiple angles.",
          },
        },
        {
          icon: "activity",
          title: { zh: "數據與行為分析", en: "Data & behavior" },
          desc: {
            zh: "運用腦波、眼動、問卷與fsQCA等方法，量化並解釋使用者的認知與決策。",
            en: "Using EEG, eye tracking, surveys, and fsQCA to quantify and explain users' cognition and decisions.",
          },
        },
        {
          icon: "link",
          title: { zh: "理論與實務連結", en: "Theory meets practice" },
          desc: {
            zh: "從真實企業個案出發，讓嚴謹的學術理論能對應並回應管理現場的需求。",
            en: "Starting from real corporate cases so that rigorous theory speaks to and answers the needs of management practice.",
          },
        },
        {
          icon: "share",
          title: { zh: "教學與資源共享", en: "Teaching & sharing" },
          desc: {
            zh: "開發策略分析工具與教學個案，將研究方法整理為可重複使用的學習資源。",
            en: "Building strategy tools and teaching cases that package research methods into reusable learning resources.",
          },
        },
      ],
    },
    advisor: {
      title: { zh: "指導教授", en: "Principal Investigator" },
    },
  },

  /* ---- 各頁標題 / Page headers ---- */
  pages: {
    team: {
      title: { zh: "團隊成員", en: "Our Team" },
      subtitle: { zh: "Jack Lab 的研究夥伴", en: "The people behind Jack Lab" },
    },
    research: {
      title: { zh: "研究領域與成果", en: "Research & Outcomes" },
      subtitle: { zh: "四大研究主軸與代表性成果", en: "Four research pillars and selected outcomes" },
    },
    publications: {
      title: { zh: "學術發表", en: "Publications" },
      subtitle: { zh: "期刊、研討會、專書、計畫與學生論文", en: "Journals, conferences, books, projects and student theses" },
    },
    awards: {
      title: { zh: "榮譽榜", en: "Honors & Awards" },
      subtitle: { zh: "獎項、競賽、榮譽與實驗室里程碑", en: "Awards, competitions, honors and lab milestones" },
    },
    news: {
      title: { zh: "最新消息與趨勢資訊", en: "News & Trends" },
      subtitle: { zh: "實驗室動態與研究趨勢", en: "Lab updates and research trends" },
    },
    activities: {
      title: { zh: "活動參與", en: "Activities" },
      subtitle: { zh: "實驗室活動心得、交流與生活紀錄", en: "Reflections, exchanges and moments from lab life" },
    },
  },

  /* ---- 頁尾 / Footer ---- */
  footer: {
    copyright: {
      zh: "版權所有 中山大學資管系徐傑克實驗室 (Jack Lab)",
      en: "Copyright © Jack Lab, Department of Information Management, NSYSU. All rights reserved.",
    },
    contactTitle: { zh: "聯絡我們", en: "Contact" },
    address: {
      zh: "804 高雄市鼓山區蓮海路70號 · 國立中山大學 資訊管理學系",
      en: "No. 70 Lien-hai Rd., Kaohsiung 804, Taiwan · Dept. of Information Management, NSYSU",
    },
    quickLinksTitle: { zh: "快速連結", en: "Quick links" },
    note: {
      zh: "本網站採資料與元件分離架構，內容可持續更新與擴充。",
      en: "Built with a data-driven, component-based architecture for easy long-term updates.",
    },
  },
};
