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
            { title: { zh: "AI 採用前因與績效效果", en: "Antecedents and performance effects of AI adoption" }, desc: { zh: "探討企業導入 AI 的關鍵因素與其對營運績效的影響。", en: "Key drivers of enterprise AI adoption and their impact on operational performance." } },
            { title: { zh: "生成式 AI 與工作流程重塑", en: "Generative AI and workflow redesign" }, desc: { zh: "分析生成式 AI 如何改變知識工作的流程與分工。", en: "How generative AI reshapes knowledge-work processes." } },
          ],
        },
        {
          id: "projects",
          title: { zh: "研究計畫", en: "Research projects" },
          type: "cards",
          items: [
            { title: { zh: "數位轉型與 AI 賦能研究計畫", en: "Digital transformation & AI enablement project" }, desc: { zh: "聚焦企業在數位轉型階段中導入人工智慧的策略路徑、組織配適與績效影響。", en: "Examining the strategic pathways, organizational fit, and performance impact of AI adoption during enterprise digital transformation." } },
          ],
        },
        {
          id: "applications",
          title: { zh: "實務應用", en: "Practical applications" },
          type: "cards",
          items: [
            { title: { zh: "企業 AI 導入諮詢", en: "Enterprise AI advisory" }, desc: { zh: "與企業合作評估 AI 應用場景與導入路徑，將學術研究方法轉化為實務可行的轉型建議。", en: "Partnering with firms to assess AI use cases and adoption paths, translating research methods into actionable transformation guidance." } },
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
          equipment: { zh: "多通道 EEG 腦波儀", en: "Multi-channel EEG system" },
          sections: [
            { id: "topics", title: { zh: "研究主題", en: "Topics" }, type: "tags", items: [ { zh: "認知負荷", en: "Cognitive load" }, { zh: "情緒反應", en: "Emotional response" }, { zh: "注意力", en: "Attention" }, { zh: "決策歷程", en: "Decision process" }, { zh: "資訊系統使用", en: "IS use" } ] },
            { id: "cases", title: { zh: "研究案例", en: "Studies" }, type: "cards", items: [ { title: { zh: "資訊系統使用的認知負荷", en: "Cognitive load in IS use" }, desc: { zh: "以 EEG 指標評估介面複雜度對使用者負荷的影響。", en: "Using EEG indices to assess how interface complexity affects user cognitive load." } } ] },
          ],
        },
        {
          id: "eye",
          name: { zh: "眼動 Eye Tracking", en: "Eye Tracking" },
          intro: {
            zh: "以眼動追蹤量測使用者的視覺注意力與資訊搜尋歷程，應用於介面設計、使用者體驗與決策行為研究。",
            en: "Using eye tracking to measure visual attention and information-search behavior, applied to interface design, UX, and decision research.",
          },
          equipment: { zh: "眼動追蹤儀", en: "Eye tracker" },
          sections: [
            { id: "topics", title: { zh: "研究主題", en: "Topics" }, type: "tags", items: [ { zh: "視覺注意力", en: "Visual attention" }, { zh: "介面設計", en: "Interface design" }, { zh: "資訊搜尋", en: "Information search" }, { zh: "使用者體驗", en: "UX" }, { zh: "決策行為", en: "Decision behavior" } ] },
            { id: "cases", title: { zh: "研究案例", en: "Studies" }, type: "cards", items: [ { title: { zh: "介面佈局與視覺搜尋", en: "Layout and visual search" }, desc: { zh: "以注視軌跡分析不同版面配置對使用者搜尋效率與決策路徑的影響。", en: "Analyzing gaze paths across layouts to understand search efficiency and decision pathways." } } ] },
          ],
        },
      ],
    },

    /* ===================== 3. 資訊安全 ===================== */
    {
      id: "security",
      icon: "shield",
      name: { zh: "資訊安全", en: "Information Security" },
      tagline: { zh: "研究資安政策遵循、資安疲勞與安全壓力管理", en: "Studying security-policy compliance, security fatigue, and security stress" },
      intro: {
        zh: "本主軸聚焦資訊安全政策遵循、資安疲勞、資安壓力、違規合理化與事件後補償等議題，探討員工如何理解、接受或抗拒組織的資訊安全要求，以及組織如何設計更有效且更具人性的安全治理機制。",
        en: "This pillar focuses on information security policy compliance, security fatigue, security stress, neutralization, and post-breach compensation. We examine how employees understand, accept, or resist organizational security requirements, and how organizations can design more effective and humane security governance.",
      },
      sections: [
        {
          id: "topics",
          title: { zh: "研究主題", en: "Research topics" },
          type: "tags",
          items: [
            { zh: "資訊安全政策遵循", en: "Information security policy compliance" },
            { zh: "資安疲勞", en: "Security fatigue" },
            { zh: "資訊安全壓力", en: "Information security stress" },
            { zh: "違規合理化", en: "Neutralization" },
            { zh: "事件後補償", en: "Post-breach compensation" },
            { zh: "承諾與自我效能", en: "Commitment and self-efficacy" },
          ],
        },
        {
          id: "outcomes",
          title: { zh: "代表性成果", en: "Selected outcomes" },
          type: "cards",
          items: [
            { title: { zh: "員工資安政策遵循意圖", en: "Employees' security-policy compliance intention" }, desc: { zh: "探討 loafing 與承諾如何影響員工遵循資訊安全政策的意圖。", en: "Examining how loafing and commitment shape employees' intention to comply with information security policies." } },
            { title: { zh: "資安疲勞的形成與緩解", en: "Formation and alleviation of security fatigue" }, desc: { zh: "以工作需求與資源理論理解資安疲勞如何形成，以及組織可如何降低其負面影響。", en: "Using job demands-resources theory to understand how security fatigue emerges and how organizations can alleviate it." } },
            { title: { zh: "資安壓力、正念與安全行為", en: "Security stress, mindfulness, and secure behavior" }, desc: { zh: "研究資安壓力、正念、自我效能與保護動機如何影響安全政策遵循。", en: "Studying how security stress, mindfulness, self-efficacy, and protection motivation influence security-policy compliance." } },
          ],
        },
        {
          id: "applications",
          title: { zh: "實務應用", en: "Practical applications" },
          type: "cards",
          items: [
            { title: { zh: "資安治理與訓練設計", en: "Security governance and training design" }, desc: { zh: "協助組織從員工行為與心理負荷角度設計更有效的資安政策、教育訓練與提醒機制。", en: "Helping organizations design policies, training, and reminders that account for employee behavior and psychological load." } },
            { title: { zh: "資安疲勞與壓力診斷", en: "Security-fatigue and stress diagnosis" }, desc: { zh: "評估資安規範、工作需求與組織支持之間的落差，降低員工抗拒與違規風險。", en: "Assessing gaps among security requirements, work demands, and organizational support to reduce resistance and violation risk." } },
          ],
        },
        {
          id: "related",
          title: { zh: "相關發表", en: "Related publications" },
          type: "note",
          note: { zh: "完整論文清單請見「學術發表」頁面，可依資訊安全主題篩選資安政策遵循、資安疲勞與安全壓力相關研究。", en: "See the Publications page for the full list; filter by Information Security for studies on compliance, fatigue, and security stress." },
        },
      ],
    },

    /* ===================== 4. 電子商務與數位服務 ===================== */
    {
      id: "ecommerce",
      icon: "globe",
      name: { zh: "電子商務與數位服務", en: "E-Commerce & Digital Services" },
      tagline: { zh: "探索數位平台、線上服務與消費者採用行為", en: "Exploring digital platforms, online services, and consumer adoption" },
      intro: {
        zh: "本主軸聚焦電子商務、社群商務、直播商務、金融科技、訂閱服務與數位內容平台等情境，研究消費者如何評估、採用與持續使用數位服務，以及信任、服務品質、規範、任務科技配適等因素如何影響線上行為。",
        en: "This pillar focuses on e-commerce, social commerce, live-streaming commerce, fintech, subscription services, and digital-content platforms. We study how consumers evaluate, adopt, and continue using digital services, and how trust, service quality, norms, and task-technology fit shape online behavior.",
      },
      sections: [
        {
          id: "topics",
          title: { zh: "研究主題", en: "Research topics" },
          type: "tags",
          items: [
            { zh: "電子商務", en: "E-commerce" },
            { zh: "社群商務", en: "Social commerce" },
            { zh: "直播商務", en: "Live-streaming commerce" },
            { zh: "數位銀行與金融科技", en: "Digital banking & fintech" },
            { zh: "訂閱服務", en: "Subscription services" },
            { zh: "數位內容與平台服務", en: "Digital content & platform services" },
            { zh: "信任移轉與服務採用", en: "Trust transfer & service adoption" },
          ],
        },
        {
          id: "outcomes",
          title: { zh: "代表性成果", en: "Selected outcomes" },
          type: "cards",
          items: [
            { title: { zh: "線上 AI 客服品質屬性", en: "Quality attributes of online AI customer service" }, desc: { zh: "建構 AI 客服服務品質屬性，理解使用者如何感知智慧化服務互動。", en: "Constructing service-quality attributes for AI customer service and how users perceive intelligent service interactions." } },
            { title: { zh: "直播商務與規範違反", en: "Live-streaming commerce and norm violation" }, desc: { zh: "探討推力與阻力如何影響直播電商中的規範違反行為。", en: "Examining how thrust and drag forces affect norm-violation behavior in live-streaming e-commerce." } },
            { title: { zh: "跨境社群商務信任移轉", en: "Trust transfer in cross-border social commerce" }, desc: { zh: "分析跨境社群商務中信任如何移轉並影響消費者行為。", en: "Analyzing how trust transfers in cross-border social commerce and shapes consumer behavior." } },
          ],
        },
        {
          id: "applications",
          title: { zh: "實務應用", en: "Practical applications" },
          type: "cards",
          items: [
            { title: { zh: "數位服務體驗設計", en: "Digital-service experience design" }, desc: { zh: "協助平台與服務提供者理解使用者採用、流失與滿意度的關鍵因素。", en: "Helping platforms and service providers understand the key factors behind adoption, churn, and satisfaction." } },
            { title: { zh: "平台商業模式與服務創新", en: "Platform business models and service innovation" }, desc: { zh: "從消費者行為與服務科學角度分析數位商業模式。", en: "Analyzing digital business models from consumer-behavior and service-science perspectives." } },
          ],
        },
        {
          id: "related",
          title: { zh: "相關發表", en: "Related publications" },
          type: "note",
          note: { zh: "完整論文清單請見「學術發表」頁面，可依電子商務與數位服務主題篩選相關研究。", en: "See the Publications page for the full list; filter by E-Commerce & Digital Services for related studies." },
        },
      ],
    },

    /* ===================== 5. 團隊與專案管理 ===================== */
    {
      id: "team",
      icon: "users",
      name: { zh: "團隊與專案管理", en: "Team & Project Management" },
      tagline: { zh: "研究資訊系統開發團隊的韌性、知識資本與專案績效", en: "Studying resilience, intellectual capital, and project performance in ISD teams" },
      intro: {
        zh: "本主軸聚焦資訊系統開發（ISD）專案團隊、團隊韌性、知識資本、專案協作與組織支持等議題，探討團隊如何在不確定、高壓與快速變動的科技專案環境中維持績效、調適能力與持續交付。",
        en: "This pillar focuses on information systems development (ISD) project teams, team resilience, intellectual capital, project collaboration, and organizational support. We study how teams sustain performance, adaptability, and delivery in uncertain, high-pressure, and fast-changing technology project environments.",
      },
      sections: [
        {
          id: "topics",
          title: { zh: "研究主題", en: "Research topics" },
          type: "tags",
          items: [
            { zh: "資訊系統開發專案團隊", en: "ISD project teams" },
            { zh: "團隊韌性能力", en: "Team resilience capability" },
            { zh: "智慧資本", en: "Intellectual capital" },
            { zh: "專案協作", en: "Project collaboration" },
            { zh: "團隊調適與復原", en: "Team adaptation and recovery" },
            { zh: "專案績效", en: "Project performance" },
          ],
        },
        {
          id: "outcomes",
          title: { zh: "代表性成果", en: "Selected outcomes" },
          type: "cards",
          items: [
            { title: { zh: "ISD 專案團隊韌性能力", en: "Team resilience capability in ISD project teams" }, desc: { zh: "探討資訊系統開發團隊如何形成韌性能力，以因應專案壓力、不確定性與變動。", en: "Examining how ISD project teams build resilience capability to respond to project stress, uncertainty, and change." } },
            { title: { zh: "智慧資本與團隊韌性", en: "Intellectual capital and team resilience" }, desc: { zh: "分析人力、結構與關係資本如何支持團隊韌性與專案成果。", en: "Analyzing how human, structural, and relational capital support team resilience and project outcomes." } },
          ],
        },
        {
          id: "applications",
          title: { zh: "實務應用", en: "Practical applications" },
          type: "cards",
          items: [
            { title: { zh: "科技專案團隊診斷", en: "Technology project-team diagnosis" }, desc: { zh: "協助組織檢視專案團隊的知識資本、協作方式與韌性缺口。", en: "Helping organizations assess project teams' intellectual capital, collaboration patterns, and resilience gaps." } },
            { title: { zh: "團隊韌性培育", en: "Team-resilience development" }, desc: { zh: "將研究成果轉化為團隊管理、專案治理與人才培育的實務建議。", en: "Translating research into practical guidance for team management, project governance, and talent development." } },
          ],
        },
        {
          id: "related",
          title: { zh: "相關發表", en: "Related publications" },
          type: "note",
          note: { zh: "完整論文清單請見「學術發表」頁面，可依團隊與專案管理主題篩選相關研究。", en: "See the Publications page for the full list; filter by Team & Project Management for related studies." },
        },
      ],
    },

    /* ===================== 6. 哈佛教學個案 ===================== */
    {
      id: "case",
      icon: "briefcase",
      name: { zh: "哈佛教學個案", en: "Harvard Teaching Cases" },
      tagline: { zh: "整理 Jack Lab 發表於《哈佛商業評論》的教學個案", en: "Curating Jack Lab teaching cases published in Harvard Business Review" },
      intro: {
        zh: "本頁集中整理 Jack Lab 發表於《哈佛商業評論》的教學個案。個案頁以教學個案連結與摘要為主，不放置研究論文分類；與團隊、專案管理相關的研究已移至「團隊與專案管理」主題。",
        en: "This page curates Jack Lab teaching cases published in Harvard Business Review. It focuses on teaching-case links and summaries, not research-paper categorization; studies related to teams and project management are now under Team & Project Management.",
      },
      subAreas: [
        {
          id: "case-links",
          name: { zh: "哈佛個案連結", en: "Harvard Case Links" },
          intro: { zh: "Jack Lab 相關哈佛教學個案的連結與索引。", en: "Links and index for Jack Lab Harvard teaching cases." },
          sections: [
            { id: "hbr", title: { zh: "哈佛商業評論教學個案", en: "Harvard Business Review Cases" }, type: "links", items: [
              { title: { zh: "上市前的資訊系統抉擇", en: "Information System Decisions Before IPO" }, desc: { zh: "徐士傑、葉欲禾（2025）·《哈佛商業評論》", en: "Hsu, S.-C. & Yeh, G. (2025) · HBR (Chinese Edition)" }, url: "https://www.hbrtaiwan.com/case-study/24149/information-system-decisions-before-ipo" },
              { title: { zh: "新加坡是下一個開拓據點嗎？", en: "Is Singapore Next?" }, desc: { zh: "徐士傑、葉欲禾（2025）·《哈佛商業評論》", en: "Hsu, S.-C. & Yeh, G. (2025) · HBR (Chinese Edition)" }, url: "https://www.hbrtaiwan.com/case-study/23950/is-singapore-next" },
              { title: { zh: "下一哩該如何計程？", en: "What's the Next Mile?" }, desc: { zh: "徐士傑、葉欲禾（2024）·《哈佛商業評論》", en: "Hsu, S.-C. & Yeh, G. (2024) · HBR (Chinese Edition)" }, url: "https://www.hbrtaiwan.com/case-study/23554/whats-the-next-mile" },
              { title: { zh: "進軍海外市場，該射哪支箭？", en: "How to Expand into Overseas Markets" }, desc: { zh: "徐士傑、張簡郁庭（2023）·《哈佛商業評論》", en: "Hsu, S.-C. & Chang-Chien, Y.-T. (2023) · HBR (Chinese Edition)" }, url: "https://www.hbrtaiwan.com/case-study/22506/how-to-expand-into-overseas-markets" },
              { title: { zh: "邁向企業成長之路", en: "Toward Corporate Growth" }, desc: { zh: "徐士傑、張簡郁庭（2023）·《哈佛商業評論》", en: "Hsu, S.-C. & Chang-Chien, Y.-T. (2023) · HBR (Chinese Edition)" }, url: "https://service.hbrtaiwan.com/search?searchtext=%E5%BE%90%E5%A3%AB%E5%82%91&templateSlug=case-study" },
              { title: { zh: "站在成長的叉路口，該選擇哪種商業模式？", en: "Which Business Model Leads to Success?" }, desc: { zh: "徐士傑、許惠媚（2022）·《哈佛商業評論》", en: "Hsu, S.-C. & Hsu, H.-M. (2022) · HBR (Chinese Edition)" }, url: "https://www.hbrtaiwan.com/case-study/21267/which-business-modal-can-make-success" },
            ] },
          ],
        },
      ],
    },

    /* ===================== 7. 模糊集質性比較分析 fsQCA ===================== */
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
            { title: { zh: "科技採用的組態分析", en: "Configurations of technology adoption" }, desc: { zh: "探討哪些條件組合共同導向高採用意願，凸顯非單一變數的路徑差異。", en: "Identifying combinations of conditions that jointly lead to high adoption, highlighting path differences beyond single-variable effects." } },
            { title: { zh: "服務體驗與滿意度路徑", en: "Paths to service satisfaction" }, desc: { zh: "辨識通往高滿意度的多元組態路徑，協助服務設計者了解達標的不同方式。", en: "Identifying multiple configurational paths to high satisfaction, helping service designers see alternative routes to success." } },
          ],
        },
        {
          id: "teaching",
          title: { zh: "教學資源", en: "Teaching resources" },
          type: "links",
          items: [
            { title: { zh: "fsQCA 入門講義", en: "fsQCA primer" }, desc: { zh: "校準、真值表與一致性／涵蓋率的入門說明。", en: "An introduction to calibration, truth tables, consistency, and coverage." }, url: "" },
          ],
        },
        {
          id: "software",
          title: { zh: "軟體與工具連結", en: "Software & tools" },
          type: "links",
          items: [
            { title: { zh: "fs/QCA 軟體", en: "fs/QCA software" }, desc: { zh: "由 Charles Ragin 團隊發布、最常被使用的 fsQCA 分析桌面軟體。", en: "The most widely used desktop software for fsQCA analysis, released by Charles Ragin's team." }, url: "https://sites.socsci.uci.edu/~cragin/fsQCA/software.shtml" },
            { title: { zh: "R 套件（QCA / SetMethods）", en: "R packages (QCA / SetMethods)" }, desc: { zh: "以 R 進行 QCA 分析的常用套件，支援校準、真值表分析與穩健性檢驗。", en: "Common R packages for QCA analysis, supporting calibration, truth-table analysis, and robustness checks." }, url: "https://cran.r-project.org/package=QCA" },
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
