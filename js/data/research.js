/* =============================================================================
 * research.js — 研究領域與成果 / Research areas
 *
 * 彈性結構：每個 area 可直接放 `sections`，或放 `subAreas`（每個子分類再含 sections）。
 * Flexible: an area may have `sections` directly, or `subAreas` (each with sections).
 *
 * section.type 支援 / supported types:
 *   "tags"  items: [{zh,en}]                      → 標籤膠囊 pills
 *   "cards" items: [{title{zh,en}, desc{zh,en}}]  → 小卡列表 cards
 *   "links" items: [{title{zh,en}, desc{zh,en}, url}] → 連結卡 link cards
 *   "faq"   items: [{q{zh,en}, a{zh,en}}]         → 問答 accordion
 *   "note"  note: {zh,en}                          → 段落 paragraph
 * 特殊 / special: subArea.toolHub:true → 顯示 26 個分析工具入口 (連到 #/tools/:id)
 *
 * 新增研究主題：在 areas 陣列加入一個物件即可。
 * Add a research area by appending an object to `areas`.
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.research = {
  areas: [
    /* ===================== 1. 人工智慧與數位轉型 ===================== */
    {
      id: "ai",
      icon: "cpu",
      name: { zh: "人工智慧與數位轉型", en: "AI & Digital Transformation" },
      tagline: { zh: "AI 賦能組織，驅動數位創新與企業績效", en: "AI-enabled organizations driving digital innovation and performance" },
      intro: {
        zh: "本主軸探討人工智慧、生成式 AI 與數位科技如何驅動組織的數位轉型與變革。我們關注企業如何採用與導入 AI、AI 如何賦能流程與決策，以及數位創新如何影響企業績效與競爭力。",
        en: "This pillar studies how AI, generative AI, and digital technologies drive organizational transformation. We examine how firms adopt and deploy AI, how AI augments processes and decisions, and how digital innovation shapes performance and competitiveness.",
      },
      sections: [
        {
          id: "topics",
          title: { zh: "研究主題", en: "Research topics" },
          type: "tags",
          items: [
            { zh: "生成式 AI", en: "Generative AI" },
            { zh: "AI 採用與導入", en: "AI adoption" },
            { zh: "數位轉型策略", en: "Digital transformation" },
            { zh: "組織變革", en: "Organizational change" },
            { zh: "AI 賦能", en: "AI enablement" },
            { zh: "數位創新", en: "Digital innovation" },
            { zh: "企業績效", en: "Firm performance" },
          ],
        },
        {
          id: "outcomes",
          title: { zh: "代表性成果", en: "Selected outcomes" },
          type: "cards",
          items: [
            { title: { zh: "AI 採用前因與績效效果", en: "Antecedents and performance effects of AI adoption" }, desc: { zh: "探討企業導入 AI 的關鍵因素與其對營運績效的影響。（成果待補充）", en: "Key drivers of enterprise AI adoption and their impact on operational performance. (To be added.)" } },
            { title: { zh: "生成式 AI 與工作流程重塑", en: "Generative AI and workflow redesign" }, desc: { zh: "分析生成式 AI 如何改變知識工作的流程與分工。（成果待補充）", en: "How generative AI reshapes knowledge-work processes. (To be added.)" } },
          ],
        },
        {
          id: "projects",
          title: { zh: "研究計畫", en: "Research projects" },
          type: "cards",
          items: [
            { title: { zh: "數位轉型與 AI 賦能研究計畫", en: "Digital transformation & AI enablement project" }, desc: { zh: "計畫名稱、期間與補助單位待補充。", en: "Project title, period and funding agency to be added." } },
          ],
        },
        {
          id: "applications",
          title: { zh: "實務應用", en: "Practical applications" },
          type: "cards",
          items: [
            { title: { zh: "企業 AI 導入諮詢", en: "Enterprise AI advisory" }, desc: { zh: "與企業合作評估 AI 應用場景與導入路徑。（案例待補充）", en: "Partnering with firms to assess AI use cases and adoption paths. (Cases to be added.)" } },
          ],
        },
        {
          id: "related",
          title: { zh: "相關發表", en: "Related publications" },
          type: "note",
          note: { zh: "完整論文清單請見「學術發表」頁面，可依主題標籤篩選 AI 與數位轉型相關研究。", en: "See the Publications page for the full list; filter by the AI / digital-transformation topic tags." },
        },
      ],
    },

    /* ===================== 2. 神經科學與人機互動 ===================== */
    {
      id: "neuro",
      icon: "brain",
      name: { zh: "神經科學與人機互動", en: "Neuroscience & HCI" },
      tagline: { zh: "以腦波與眼動，量化使用者的認知與決策", en: "Quantifying cognition and decisions with EEG and eye tracking" },
      intro: {
        zh: "本主軸運用神經科學方法，研究使用者在人機互動與資訊系統使用情境下的認知負荷、情緒、注意力與決策歷程，補足傳統問卷難以觸及的內隱反應。研究再細分為腦波（EEG）與眼動（Eye Tracking）兩個子領域。",
        en: "This pillar applies neuroscience methods to study users' cognitive load, emotion, attention, and decision processes during human–computer interaction and information-systems use, capturing implicit responses that surveys miss. It is divided into EEG and Eye Tracking sub-areas.",
      },
      subAreas: [
        {
          id: "eeg",
          name: { zh: "腦波 EEG", en: "EEG" },
          intro: {
            zh: "以腦電圖（EEG）量測使用者在操作資訊系統時的腦部活動，研究認知負荷、情緒反應、注意力與決策歷程，並對應到系統設計與使用行為。",
            en: "Using electroencephalography (EEG) to measure brain activity during system use — studying cognitive load, emotional response, attention, and decision processes, and linking them to design and behavior.",
          },
          equipment: { zh: "多通道 EEG 腦波儀（設備規格待補充）", en: "Multi-channel EEG system (specifications to be added)" },
          sections: [
            { id: "topics", title: { zh: "研究主題", en: "Topics" }, type: "tags", items: [ { zh: "認知負荷", en: "Cognitive load" }, { zh: "情緒反應", en: "Emotional response" }, { zh: "注意力", en: "Attention" }, { zh: "決策歷程", en: "Decision process" }, { zh: "資訊系統使用", en: "IS use" } ] },
            { id: "cases", title: { zh: "研究案例", en: "Studies" }, type: "cards", items: [ { title: { zh: "資訊系統使用的認知負荷", en: "Cognitive load in IS use" }, desc: { zh: "以 EEG 指標評估介面複雜度對使用者負荷的影響。（案例待補充）", en: "Using EEG indices to assess interface complexity. (To be added.)" } } ] },
            { id: "images", title: { zh: "實驗圖片", en: "Lab photos" }, type: "note", note: { zh: "實驗場景與設備照片待補充。", en: "Photos of the setup and equipment to be added." } },
          ],
        },
        {
          id: "eye",
          name: { zh: "眼動 Eye Tracking", en: "Eye Tracking" },
          intro: {
            zh: "以眼動追蹤量測使用者的視覺注意力與資訊搜尋歷程，應用於介面設計、使用者體驗與決策行為研究。",
            en: "Using eye tracking to measure visual attention and information-search behavior, applied to interface design, UX, and decision research.",
          },
          equipment: { zh: "眼動追蹤儀（設備規格待補充）", en: "Eye tracker (specifications to be added)" },
          sections: [
            { id: "topics", title: { zh: "研究主題", en: "Topics" }, type: "tags", items: [ { zh: "視覺注意力", en: "Visual attention" }, { zh: "介面設計", en: "Interface design" }, { zh: "資訊搜尋", en: "Information search" }, { zh: "使用者體驗", en: "UX" }, { zh: "決策行為", en: "Decision behavior" } ] },
            { id: "cases", title: { zh: "研究案例", en: "Studies" }, type: "cards", items: [ { title: { zh: "介面佈局與視覺搜尋", en: "Layout and visual search" }, desc: { zh: "以注視軌跡分析不同版面配置對搜尋效率的影響。（案例待補充）", en: "Analyzing gaze paths across layouts. (To be added.)" } } ] },
            { id: "images", title: { zh: "實驗圖片", en: "Lab photos" }, type: "note", note: { zh: "眼動熱區圖與實驗照片待補充。", en: "Heatmaps and lab photos to be added." } },
          ],
        },
      ],
    },

    /* ===================== 3. 個案研究與服務科學 ===================== */
    {
      id: "case",
      icon: "briefcase",
      name: { zh: "個案研究與服務科學", en: "Case Studies & Service Science" },
      tagline: { zh: "從真實個案到分析工具，連結管理理論與實務", en: "From real cases to analytical tools — linking theory and practice" },
      intro: {
        zh: "本主軸聚焦個案研究、服務科學、管理實務、教學個案與產學連結。我們將真實企業情境轉化為教學與研究素材，並整理一套策略分析工具與教學資源，協助學生與研究者系統化地分析管理問題。",
        en: "This pillar focuses on case research, service science, management practice, teaching cases, and university–industry links. We turn real business situations into teaching and research materials, and curate a toolkit of strategy frameworks and teaching resources for systematic analysis.",
      },
      subAreas: [
        {
          id: "case-links",
          name: { zh: "個案連結", en: "Case Links" },
          intro: { zh: "教學個案、研究個案、企業案例與個案教材的連結與索引。", en: "Links and index for teaching cases, research cases, corporate cases, and case materials." },
          sections: [
            { id: "list", title: { zh: "個案資源", en: "Case resources" }, type: "links", items: [ { title: { zh: "教學個案（範例）", en: "Teaching case (sample)" }, desc: { zh: "個案標題、產業與連結待補充。", en: "Case title, industry and link to be added." }, url: "" } ] },
          ],
        },
        {
          id: "tools-resources",
          name: { zh: "分析工具與教學資源", en: "Analysis Tools & Resources" },
          intro: {
            zh: "整合實驗室常用的策略分析工具與教學資源。每個工具皆有獨立介紹頁，包含方法簡介、使用情境、核心構面與應用案例，並可連結原始教學投影片。",
            en: "A curated set of strategy tools and teaching resources used in the lab. Each tool has its own page with an overview, when-to-use, core framework, and an example, with links to the original teaching slides.",
          },
          toolHub: true,
        },
      ],
    },

    /* ===================== 4. 模糊集質性比較分析 fsQCA ===================== */
    {
      id: "fsqca",
      icon: "diagram",
      name: { zh: "模糊集質性比較分析 fsQCA", en: "fsQCA" },
      tagline: { zh: "以組態思維探索條件如何組合導向結果", en: "Configurational thinking: how conditions combine to produce outcomes" },
      intro: {
        zh: "模糊集質性比較分析（fuzzy-set Qualitative Comparative Analysis, fsQCA）是一種結合質性與量化邏輯的研究方法，以集合論與布林邏輯探討「條件組態」如何導向特定結果。本頁作為實驗室的特色方法資源頁，提供方法介紹、應用案例、教學資源與工具連結。",
        en: "Fuzzy-set Qualitative Comparative Analysis (fsQCA) blends qualitative and quantitative logic, using set theory and Boolean logic to study how configurations of conditions lead to outcomes. This page serves as the lab's signature-method resource hub: overview, applications, teaching resources, and tools.",
      },
      sections: [
        {
          id: "method",
          title: { zh: "fsQCA 方法介紹", en: "Method overview" },
          type: "note",
          note: {
            zh: "fsQCA 以「集合關係」而非「淨效果」看待因果，強調條件的「組合」「等效性」與「非對稱性」：達成結果的路徑可能不只一條，且導致結果出現與不出現的條件未必對稱。適合中小樣本、理論導向且重視組態的研究問題。",
            en: "fsQCA views causation through set relations rather than net effects, emphasizing combinations, equifinality, and asymmetry: multiple paths can lead to an outcome, and the conditions for its presence and absence need not be symmetric. It suits small-to-medium samples and configuration-oriented questions.",
          },
        },
        {
          id: "applications",
          title: { zh: "研究應用案例", en: "Applications" },
          type: "cards",
          items: [
            { title: { zh: "科技採用的組態分析", en: "Configurations of technology adoption" }, desc: { zh: "探討哪些條件組合共同導向高採用意願。（案例待補充）", en: "Which condition bundles jointly lead to high adoption. (To be added.)" } },
            { title: { zh: "服務體驗與滿意度路徑", en: "Paths to service satisfaction" }, desc: { zh: "辨識通往高滿意度的多元組態路徑。（案例待補充）", en: "Identifying multiple paths to high satisfaction. (To be added.)" } },
          ],
        },
        {
          id: "teaching",
          title: { zh: "教學資源", en: "Teaching resources" },
          type: "links",
          items: [
            { title: { zh: "fsQCA 入門講義", en: "fsQCA primer" }, desc: { zh: "校準、真值表與一致性／涵蓋率的入門說明。（連結待補充）", en: "Calibration, truth tables, consistency & coverage. (Link to be added.)" }, url: "" },
          ],
        },
        {
          id: "software",
          title: { zh: "軟體與工具連結", en: "Software & tools" },
          type: "links",
          items: [
            { title: { zh: "fs/QCA 軟體", en: "fs/QCA software" }, desc: { zh: "常用的 fsQCA 分析軟體。（官方連結待補充）", en: "Common fsQCA analysis software. (Official link to be added.)" }, url: "" },
            { title: { zh: "R 套件（QCA / SetMethods）", en: "R packages (QCA / SetMethods)" }, desc: { zh: "以 R 進行 QCA 分析的套件。（連結待補充）", en: "R packages for QCA analysis. (Link to be added.)" }, url: "" },
          ],
        },
        {
          id: "faq",
          title: { zh: "常見問題", en: "FAQ" },
          type: "faq",
          items: [
            { q: { zh: "fsQCA 與迴歸分析有何不同？", en: "How is fsQCA different from regression?" }, a: { zh: "迴歸估計各變數的「淨效果」；fsQCA 關注條件的「組合」如何共同導向結果，並允許多重路徑與非對稱因果。", en: "Regression estimates each variable's net effect; fsQCA examines how combinations of conditions jointly produce an outcome, allowing multiple paths and asymmetric causation." } },
            { q: { zh: "需要多大的樣本？", en: "How large a sample is needed?" }, a: { zh: "fsQCA 適用於中小樣本，重點在於案例的理論代表性與校準品質，而非大樣本統計檢定。", en: "fsQCA fits small-to-medium samples; what matters is theoretical representativeness and calibration quality rather than large-N significance testing." } },
          ],
        },
        {
          id: "related",
          title: { zh: "相關發表", en: "Related publications" },
          type: "note",
          note: { zh: "fsQCA 相關論文請見「學術發表」頁面，並以 fsQCA 主題標籤篩選。", en: "See the Publications page and filter by the fsQCA topic tag." },
        },
      ],
    },
  ],
};
