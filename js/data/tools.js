/* =============================================================================
 * tools.js — 分析工具與教學資源 / Analysis tools & teaching resources (26 tools)
 *
 * 每個工具有獨立介紹頁 (#/tools/:id)。Each tool has its own page (#/tools/:id).
 * item 欄位 / fields:
 *   id, categoryId, name{zh,en}, summary{zh,en}, definition{zh,en},
 *   whenToUse{zh:[],en:[]}, framework:[{title{zh,en}, desc{zh,en}}], example{zh,en},
 *   deckUrl ('' → 不顯示下載連結 / leave empty to hide download), references:[{label{zh,en}, url}]
 *
 * 📌 原始教學投影片在 Google 雲端硬碟 (G:\...\策略工具)。檔案較大不放進 repo；
 *    請將各檔在雲端設定共用後，把分享連結填入對應的 deckUrl 即可。
 *    Original decks live in Google Drive; they're large, so they're not committed.
 *    Share each file and paste its link into the matching `deckUrl`.
 *
 * 新增工具：在 items 加入物件並指定 categoryId 即可。
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.tools = {
  categories: [
    { id: "positioning", color: "blue", label: { zh: "策略定位與環境分析", en: "Positioning & Environment" } },
    { id: "growth", color: "indigo", label: { zh: "成長與創新", en: "Growth & Innovation" } },
    { id: "customer", color: "sky", label: { zh: "商業模式與顧客價值", en: "Business Model & Customer Value" } },
    { id: "channel", color: "teal", label: { zh: "通路與服務", en: "Channel & Service" } },
    { id: "performance", color: "amber", label: { zh: "績效與財務", en: "Performance & Finance" } },
    { id: "decision", color: "violet", label: { zh: "決策與利害關係人", en: "Decision & Stakeholders" } },
  ],

  items: [
    /* ---------- 策略定位與環境分析 / Positioning ---------- */
    {
      id: "swot", categoryId: "positioning",
      name: { zh: "SWOT 分析", en: "SWOT Analysis" },
      summary: { zh: "盤點內部優劣勢與外部機會威脅的策略定位工具。", en: "Maps internal strengths/weaknesses against external opportunities/threats." },
      definition: { zh: "SWOT 約於 1960 年代由史丹佛研究所提出，從四個面向評估企業現況，作為策略規劃的起點。", en: "Originating at SRI around the 1960s, SWOT assesses a firm across four dimensions as a starting point for strategy." },
      whenToUse: {
        zh: ["策略規劃初期盤點現況", "評估新事業或專案可行性", "個人職涯或品牌定位", "作為 TOWS 策略發想的輸入"],
        en: ["Initial situation audit in planning", "Assessing a new venture or project", "Personal career or brand positioning", "Input for TOWS strategy generation"],
      },
      framework: [
        { title: { zh: "優勢 Strengths", en: "Strengths" }, desc: { zh: "組織內部具備的有利條件與競爭優勢。", en: "Internal advantages and competitive strengths." } },
        { title: { zh: "劣勢 Weaknesses", en: "Weaknesses" }, desc: { zh: "組織內部存在的不足與限制因素。", en: "Internal shortcomings and constraints." } },
        { title: { zh: "機會 Opportunities", en: "Opportunities" }, desc: { zh: "外部環境中有助於發展的有利條件。", en: "Favorable external conditions to leverage." } },
        { title: { zh: "威脅 Threats", en: "Threats" }, desc: { zh: "外部環境中可能造成不利影響的挑戰。", en: "External challenges that may harm the firm." } },
      ],
      example: { zh: "Netflix：品牌與原創內容為優勢，內容成本高為劣勢，串流市場成長為機會，同業競爭為威脅。", en: "Netflix: brand and originals (S), high content cost (W), streaming growth (O), fierce rivalry (T)." },
      deckUrl: "", references: [],
    },
    {
      id: "tows", categoryId: "positioning",
      name: { zh: "TOWS 矩陣", en: "TOWS Matrix" },
      summary: { zh: "將 SWOT 兩兩配對，轉化為可執行的策略方向。", en: "Pairs SWOT factors to turn them into actionable strategies." },
      definition: { zh: "TOWS 由 Weihrich 提出，將 SWOT 四要素交叉配對，從現況分析推進到具體策略。", en: "Proposed by Weihrich, TOWS cross-pairs the four SWOT factors to move from analysis to concrete strategy." },
      whenToUse: {
        zh: ["完成 SWOT 後發想策略", "連結內部與外部因素", "產生攻守並重的策略選項"],
        en: ["After completing a SWOT", "Linking internal and external factors", "Generating offensive and defensive options"],
      },
      framework: [
        { title: { zh: "SO 進攻", en: "SO (Aggressive)" }, desc: { zh: "以優勢把握機會，積極擴張。", en: "Use strengths to seize opportunities." } },
        { title: { zh: "ST 防禦", en: "ST (Defensive)" }, desc: { zh: "以優勢化解或迴避威脅。", en: "Use strengths to counter threats." } },
        { title: { zh: "WO 改善", en: "WO (Turnaround)" }, desc: { zh: "改善劣勢以把握機會。", en: "Fix weaknesses to capture opportunities." } },
        { title: { zh: "WT 退守", en: "WT (Survival)" }, desc: { zh: "同時降低劣勢與威脅的衝擊。", en: "Minimize weaknesses and threats." } },
      ],
      example: { zh: "以自身技術優勢（S）搭配新興市場機會（O），發展 SO 擴張策略。", en: "Combine tech strength (S) with an emerging-market opportunity (O) for an SO expansion play." },
      deckUrl: "", references: [],
    },
    {
      id: "pestel", categoryId: "positioning",
      name: { zh: "PESTEL 分析", en: "PESTEL Analysis" },
      summary: { zh: "從六大面向掃描總體環境的趨勢與風險。", en: "Scans the macro-environment across six dimensions." },
      definition: { zh: "PESTEL 分析總體環境的六個面向，協助辨識影響組織的外部趨勢與風險。", en: "PESTEL examines six macro-environmental dimensions to identify external trends and risks." },
      whenToUse: {
        zh: ["進入新市場或產業前掃描環境", "中長期策略與風險規劃", "搭配五力與 SWOT 使用"],
        en: ["Scanning before entering a market", "Long-term strategy and risk planning", "Pairing with Five Forces and SWOT"],
      },
      framework: [
        { title: { zh: "政治 Political", en: "Political" }, desc: { zh: "政策、補助、政治穩定度與貿易。", en: "Policy, subsidies, stability, trade." } },
        { title: { zh: "經濟 Economic", en: "Economic" }, desc: { zh: "景氣、利率、匯率、所得。", en: "Growth, rates, FX, income." } },
        { title: { zh: "社會 Social", en: "Social" }, desc: { zh: "人口、文化、價值觀與生活型態。", en: "Demographics, culture, lifestyles." } },
        { title: { zh: "科技 Technological", en: "Technological" }, desc: { zh: "技術進展、研發與自動化。", en: "Tech progress, R&D, automation." } },
        { title: { zh: "環境 Environmental", en: "Environmental" }, desc: { zh: "氣候、永續與環保規範。", en: "Climate, sustainability, ESG." } },
        { title: { zh: "法律 Legal", en: "Legal" }, desc: { zh: "法規、合規與智財。", en: "Regulation, compliance, IP." } },
      ],
      example: { zh: "評估電動車產業：補助政策(P)、油價(E)、環保意識(S)、電池技術(T)、碳排規範(Env)、安全法規(L)。", en: "EV industry: subsidies (P), fuel prices (E), green awareness (S), battery tech (T), emissions rules (Env), safety law (L)." },
      deckUrl: "", references: [],
    },
    {
      id: "five-forces", categoryId: "positioning",
      name: { zh: "五力分析", en: "Porter's Five Forces" },
      summary: { zh: "分析產業競爭強度與獲利潛力的五種力量。", en: "Five forces shaping industry competition and profit potential." },
      definition: { zh: "由 Michael Porter 提出，透過五種力量評估產業的競爭結構與吸引力。", en: "Introduced by Michael Porter to assess the competitive structure and attractiveness of an industry." },
      whenToUse: {
        zh: ["評估產業吸引力與進入決策", "理解獲利受壓的來源", "制定競爭定位策略"],
        en: ["Assessing industry attractiveness/entry", "Locating sources of margin pressure", "Shaping competitive positioning"],
      },
      framework: [
        { title: { zh: "現有競爭", en: "Competitive rivalry" }, desc: { zh: "既有業者間的競爭激烈程度。", en: "Intensity among existing players." } },
        { title: { zh: "新進入者威脅", en: "New entrants" }, desc: { zh: "進入障礙高低與潛在競爭。", en: "Entry barriers and potential entrants." } },
        { title: { zh: "替代品威脅", en: "Substitutes" }, desc: { zh: "其他方案取代需求的可能性。", en: "Risk of substitution of demand." } },
        { title: { zh: "供應商議價力", en: "Supplier power" }, desc: { zh: "上游對價格與條件的影響力。", en: "Upstream bargaining leverage." } },
        { title: { zh: "買方議價力", en: "Buyer power" }, desc: { zh: "顧客壓低價格與要求的能力。", en: "Customers' bargaining leverage." } },
      ],
      example: { zh: "航空業：高固定成本與低轉換成本使現有競爭激烈，整體獲利受壓。", en: "Airlines: high fixed costs and low switching costs intensify rivalry, squeezing profits." },
      deckUrl: "", references: [],
    },
    {
      id: "dynamic-competition", categoryId: "positioning",
      name: { zh: "動態競爭分析", en: "Dynamic Competition Analysis" },
      summary: { zh: "以行動—回應視角分析競爭對手的攻防。", en: "Analyzes rivals through an action–response lens." },
      definition: { zh: "由陳明哲提出，以「市場共同性、資源相似性」與 AMC（知覺、動機、能力）解釋競爭者的攻擊與回應。", en: "Developed by Ming-Jer Chen, it uses market commonality, resource similarity, and the Awareness–Motivation–Capability (AMC) lens to explain competitive moves and responses." },
      whenToUse: {
        zh: ["分析特定競爭對手的行為", "預測對手對我方行動的回應", "規劃競爭攻防節奏"],
        en: ["Profiling a specific rival", "Predicting rivals' responses", "Sequencing competitive moves"],
      },
      framework: [
        { title: { zh: "市場共同性", en: "Market commonality" }, desc: { zh: "雙方市場重疊的程度。", en: "Overlap of served markets." } },
        { title: { zh: "資源相似性", en: "Resource similarity" }, desc: { zh: "雙方資源組合的相近程度。", en: "Similarity of resource endowments." } },
        { title: { zh: "知覺 Awareness", en: "Awareness" }, desc: { zh: "是否察覺對手的行動。", en: "Noticing rivals' actions." } },
        { title: { zh: "動機 Motivation", en: "Motivation" }, desc: { zh: "是否有誘因回應。", en: "Incentive to respond." } },
        { title: { zh: "能力 Capability", en: "Capability" }, desc: { zh: "是否具備回應的能力。", en: "Ability to respond." } },
      ],
      example: { zh: "兩家市場高度重疊的電信商，會密切偵測並快速回應彼此的資費調整。", en: "Two telcos with high market overlap closely monitor and quickly match each other's pricing." },
      deckUrl: "", references: [],
    },
    {
      id: "ecosystem", categoryId: "positioning",
      name: { zh: "商業生態系", en: "Business Ecosystem" },
      summary: { zh: "視企業為與夥伴共同演化的生態系統。", en: "Sees a firm as co-evolving within a web of partners." },
      definition: { zh: "由 James Moore 提出，主張企業與供應商、顧客、互補者相互依存、共同演化。", en: "Introduced by James Moore, the view treats firms, suppliers, customers, and complementors as interdependent and co-evolving." },
      whenToUse: {
        zh: ["平台與互補品策略", "理解產業價值網絡", "規劃合作與共創"],
        en: ["Platform & complementor strategy", "Mapping the value network", "Planning partnerships and co-creation"],
      },
      framework: [
        { title: { zh: "關鍵者/平台", en: "Keystone / platform" }, desc: { zh: "提供基礎並影響整體健康的核心。", en: "Core that anchors and shapes the ecosystem." } },
        { title: { zh: "利基成員", en: "Niche players" }, desc: { zh: "在特定環節創造價值的成員。", en: "Specialists creating value in niches." } },
        { title: { zh: "互補者", en: "Complementors" }, desc: { zh: "提供互補產品擴大整體價值。", en: "Provide complements that grow total value." } },
        { title: { zh: "共同演化", en: "Co-evolution" }, desc: { zh: "成員間相互適應與成長。", en: "Members adapt and grow together." } },
      ],
      example: { zh: "智慧型手機平台串連 App 開發者、配件商與電信商形成生態系。", en: "A smartphone platform links app developers, accessory makers, and carriers into one ecosystem." },
      deckUrl: "", references: [],
    },

    /* ---------- 成長與創新 / Growth & Innovation ---------- */
    {
      id: "ansoff", categoryId: "growth",
      name: { zh: "安索夫矩陣", en: "Ansoff Matrix" },
      summary: { zh: "以產品×市場新舊，規劃四種成長路徑。", en: "Four growth paths across new/existing products and markets." },
      definition: { zh: "由 Igor Ansoff 提出，依「產品」與「市場」的新舊組合，提供四種成長策略選項。", en: "By Igor Ansoff, it maps growth options by combining new/existing products and markets." },
      whenToUse: {
        zh: ["規劃成長方向", "評估擴張風險", "平衡既有與新事業"],
        en: ["Planning growth direction", "Weighing expansion risk", "Balancing core and new business"],
      },
      framework: [
        { title: { zh: "市場滲透", en: "Market penetration" }, desc: { zh: "既有產品於既有市場提升市占。", en: "More share with existing products/markets." } },
        { title: { zh: "市場開發", en: "Market development" }, desc: { zh: "既有產品進入新市場。", en: "Existing products into new markets." } },
        { title: { zh: "產品開發", en: "Product development" }, desc: { zh: "為既有市場開發新產品。", en: "New products for existing markets." } },
        { title: { zh: "多角化", en: "Diversification" }, desc: { zh: "新產品進入新市場，風險最高。", en: "New products in new markets (highest risk)." } },
      ],
      example: { zh: "既有產品進入新國家市場，屬於市場開發策略。", en: "Taking an existing product into a new country is market development." },
      deckUrl: "", references: [],
    },
    {
      id: "blue-ocean", categoryId: "growth",
      name: { zh: "藍海策略", en: "Blue Ocean Strategy" },
      summary: { zh: "以價值創新開創無競爭的新市場。", en: "Creates uncontested market space through value innovation." },
      definition: { zh: "由 Kim 與 Mauborgne 提出，主張跳脫紅海競爭，以價值創新開創新需求的藍海。", en: "By Kim & Mauborgne; instead of competing in 'red oceans,' create new demand via value innovation." },
      whenToUse: {
        zh: ["市場高度競爭、削價嚴重時", "尋找新需求與新客群", "重新定義產業邊界"],
        en: ["When markets are saturated/price-warring", "Seeking new demand and non-customers", "Redefining industry boundaries"],
      },
      framework: [
        { title: { zh: "消去 Eliminate", en: "Eliminate" }, desc: { zh: "去除產業習以為常但無價值的因素。", en: "Remove taken-for-granted, low-value factors." } },
        { title: { zh: "減少 Reduce", en: "Reduce" }, desc: { zh: "降低過度投資的因素。", en: "Cut over-served factors." } },
        { title: { zh: "提升 Raise", en: "Raise" }, desc: { zh: "提高被低估的關鍵因素。", en: "Boost under-served key factors." } },
        { title: { zh: "創造 Create", en: "Create" }, desc: { zh: "創造產業從未提供的新價值。", en: "Offer entirely new value." } },
      ],
      example: { zh: "太陽劇團去除傳統馬戲昂貴元素、創造劇場式體驗，開創新市場。", en: "Cirque du Soleil dropped costly circus elements and created theatrical experiences, opening new space." },
      deckUrl: "", references: [],
    },
    {
      id: "disruptive-innovation", categoryId: "growth",
      name: { zh: "破壞式創新", en: "Disruptive Innovation" },
      summary: { zh: "由低階或新市場由下而上顛覆領導者。", en: "Low-end or new-market entrants disrupt incumbents from below." },
      definition: { zh: "由 Clayton Christensen 提出，說明看似簡單便宜的創新如何逐步顛覆既有領導者。", en: "By Clayton Christensen; seemingly simple, cheaper innovations gradually upend established leaders." },
      whenToUse: {
        zh: ["評估新進者的顛覆潛力", "在位者防禦策略", "切入被忽略的市場"],
        en: ["Gauging entrants' disruptive potential", "Incumbent defense strategy", "Targeting overlooked segments"],
      },
      framework: [
        { title: { zh: "低階破壞", en: "Low-end disruption" }, desc: { zh: "以更便宜方案服務被過度滿足的顧客。", en: "Cheaper offerings for over-served customers." } },
        { title: { zh: "新市場破壞", en: "New-market disruption" }, desc: { zh: "服務原本未消費的新顧客。", en: "Serving non-consumers in new markets." } },
        { title: { zh: "維持性創新", en: "Sustaining innovation" }, desc: { zh: "為現有顧客持續改良。", en: "Improving for existing customers." } },
        { title: { zh: "在位者困境", en: "Incumbent's dilemma" }, desc: { zh: "領導者因守住高端而被顛覆。", en: "Leaders disrupted while defending high-end." } },
      ],
      example: { zh: "串流影音以便利與低價，從低階逐步顛覆傳統有線電視與租片。", en: "Streaming, cheap and convenient, gradually disrupted cable TV and video rental." },
      deckUrl: "", references: [],
    },
    {
      id: "innovation-diffusion", categoryId: "growth",
      name: { zh: "創新擴散", en: "Innovation Diffusion" },
      summary: { zh: "創新如何隨時間在社群中被採用。", en: "How an innovation spreads through a population over time." },
      definition: { zh: "由 Everett Rogers 提出，描述採用者類型與影響採用速度的創新特性。", en: "By Everett Rogers; describes adopter categories and the innovation attributes that drive adoption." },
      whenToUse: {
        zh: ["新產品上市與推廣規劃", "理解採用曲線與跨越鴻溝", "設計採用誘因"],
        en: ["Launch & adoption planning", "Understanding the adoption curve", "Designing adoption incentives"],
      },
      framework: [
        { title: { zh: "採用者曲線", en: "Adopter categories" }, desc: { zh: "創新者、早期採用者、早期/晚期大眾、落後者。", en: "Innovators, early adopters, early/late majority, laggards." } },
        { title: { zh: "相對優勢", en: "Relative advantage" }, desc: { zh: "比既有方案更好的程度。", en: "Perceived improvement over alternatives." } },
        { title: { zh: "相容性", en: "Compatibility" }, desc: { zh: "與既有價值與經驗的契合度。", en: "Fit with existing values/experience." } },
        { title: { zh: "複雜度", en: "Complexity" }, desc: { zh: "理解與使用的難易。", en: "Ease of understanding and use." } },
        { title: { zh: "可試用/可觀察", en: "Trialability / Observability" }, desc: { zh: "能否試用且結果可見。", en: "Can be tried; results are visible." } },
      ],
      example: { zh: "智慧型手機由創新者與早期採用者帶動，逐步擴散至大眾市場。", en: "Smartphones, led by innovators and early adopters, gradually diffused to the mass market." },
      deckUrl: "", references: [],
    },
    {
      id: "innovation-resistance", categoryId: "growth",
      name: { zh: "創新抵制模型", en: "Innovation Resistance Model" },
      summary: { zh: "解釋消費者抗拒創新的功能與心理障礙。", en: "Explains functional and psychological barriers to adoption." },
      definition: { zh: "由 Ram 與 Sheth 提出，將消費者抗拒創新的原因分為功能性與心理性障礙。", en: "By Ram & Sheth; resistance stems from functional and psychological barriers." },
      whenToUse: {
        zh: ["新產品推廣遇阻時診斷原因", "設計降低抗拒的策略", "理解採用前的心理門檻"],
        en: ["Diagnosing stalled adoption", "Designing barrier-reducing tactics", "Understanding pre-adoption hesitations"],
      },
      framework: [
        { title: { zh: "使用障礙", en: "Usage barrier" }, desc: { zh: "與既有習慣、流程衝突。", en: "Conflict with existing habits/workflows." } },
        { title: { zh: "價值障礙", en: "Value barrier" }, desc: { zh: "性價比不足以促成改變。", en: "Insufficient performance-to-price." } },
        { title: { zh: "風險障礙", en: "Risk barrier" }, desc: { zh: "對功能、財務或安全的疑慮。", en: "Functional, financial or safety concerns." } },
        { title: { zh: "傳統障礙", en: "Tradition barrier" }, desc: { zh: "與既有文化與規範相左。", en: "Clash with norms and traditions." } },
        { title: { zh: "形象障礙", en: "Image barrier" }, desc: { zh: "對品牌或品類的刻板印象。", en: "Stereotypes about the brand/category." } },
      ],
      example: { zh: "行動支付推廣初期，使用者因習慣現金（傳統）與安全疑慮（風險）而抗拒。", en: "Early mobile payments faced resistance from cash habits (tradition) and security worries (risk)." },
      deckUrl: "", references: [],
    },
    {
      id: "ma", categoryId: "growth",
      name: { zh: "併購 (M&A)", en: "Mergers & Acquisitions" },
      summary: { zh: "以合併或收購取得綜效、市場與資源。", en: "Combining or acquiring firms for synergy, market, or resources." },
      definition: { zh: "併購是透過合併或收購其他企業，快速取得市場、技術或綜效的成長方式。", en: "M&A grows a firm by merging with or acquiring others to gain market, technology, or synergy." },
      whenToUse: {
        zh: ["快速進入市場或取得技術", "追求規模或範疇經濟", "整合產業鏈"],
        en: ["Fast market/technology entry", "Pursuing scale or scope economies", "Integrating the value chain"],
      },
      framework: [
        { title: { zh: "水平併購", en: "Horizontal" }, desc: { zh: "併購同業以擴大市占。", en: "Acquiring competitors for share." } },
        { title: { zh: "垂直併購", en: "Vertical" }, desc: { zh: "整合上下游供應鏈。", en: "Integrating up/downstream." } },
        { title: { zh: "多角化併購", en: "Conglomerate" }, desc: { zh: "跨入不相關事業分散風險。", en: "Entering unrelated businesses." } },
        { title: { zh: "綜效與整合", en: "Synergy & integration" }, desc: { zh: "評估綜效並管理併購後整合。", en: "Assess synergy; manage PMI." } },
      ],
      example: { zh: "企業收購上游供應商以確保原料供應，屬於垂直併購。", en: "Acquiring an upstream supplier to secure materials is a vertical merger." },
      deckUrl: "", references: [],
    },
    {
      id: "franchise", categoryId: "growth",
      name: { zh: "加盟模式", en: "Franchise Model" },
      summary: { zh: "授權品牌與營運模式以快速複製擴張。", en: "Licensing brand and operations to scale quickly." },
      definition: { zh: "授權者將品牌、營運模式與技術授權給加盟者，由加盟者出資經營，達到快速展店。", en: "A franchisor licenses brand, format, and know-how to franchisees who invest and operate, enabling rapid expansion." },
      whenToUse: {
        zh: ["以有限資本快速展店", "標準化可複製的營運模式", "借助在地經營者"],
        en: ["Scaling with limited capital", "Standardized, replicable operations", "Leveraging local operators"],
      },
      framework: [
        { title: { zh: "授權者與加盟者", en: "Franchisor & franchisee" }, desc: { zh: "雙方權利義務關係。", en: "Roles and obligations of both sides." } },
        { title: { zh: "經營模式授權", en: "Business-format" }, desc: { zh: "整套品牌、流程與訓練的授權。", en: "Whole-system brand, process, training." } },
        { title: { zh: "權利金與抽成", en: "Fees & royalties" }, desc: { zh: "加盟金與營收抽成。", en: "Upfront fees and ongoing royalties." } },
        { title: { zh: "標準化與品牌", en: "Standardization" }, desc: { zh: "維持一致品質與品牌形象。", en: "Consistent quality and brand." } },
      ],
      example: { zh: "連鎖餐飲以加盟快速展店，同時維持品牌標準。", en: "Restaurant chains expand via franchising while keeping brand standards." },
      deckUrl: "", references: [],
    },

    /* ---------- 商業模式與顧客價值 / Business Model & Customer Value ---------- */
    {
      id: "bmc", categoryId: "customer",
      name: { zh: "商業模式圖 BMC", en: "Business Model Canvas" },
      summary: { zh: "以九大要素一頁式描繪商業模式。", en: "Describes a business model on one page via nine blocks." },
      definition: { zh: "由 Osterwalder 提出的商業模式畫布，用九個區塊呈現價值如何被創造、傳遞與獲取。", en: "Osterwalder's canvas captures how value is created, delivered, and captured across nine building blocks." },
      whenToUse: {
        zh: ["設計或檢視商業模式", "新創提案與溝通", "盤點模式缺口"],
        en: ["Designing/reviewing a model", "Startup pitching & alignment", "Spotting model gaps"],
      },
      framework: [
        { title: { zh: "目標客群", en: "Customer Segments" }, desc: { zh: "服務的對象。", en: "Who you serve." } },
        { title: { zh: "價值主張", en: "Value Propositions" }, desc: { zh: "為顧客解決的問題與價值。", en: "Value delivered to customers." } },
        { title: { zh: "通路", en: "Channels" }, desc: { zh: "如何觸及與交付。", en: "How you reach and deliver." } },
        { title: { zh: "顧客關係", en: "Customer Relationships" }, desc: { zh: "如何取得與維繫顧客。", en: "How you acquire and retain." } },
        { title: { zh: "收益流", en: "Revenue Streams" }, desc: { zh: "如何賺取收入。", en: "How you earn revenue." } },
        { title: { zh: "關鍵資源", en: "Key Resources" }, desc: { zh: "必要的資產與資源。", en: "Assets the model requires." } },
        { title: { zh: "關鍵活動", en: "Key Activities" }, desc: { zh: "最重要的營運活動。", en: "Most important activities." } },
        { title: { zh: "關鍵夥伴", en: "Key Partnerships" }, desc: { zh: "供應商與合作網絡。", en: "Suppliers and partners." } },
        { title: { zh: "成本結構", en: "Cost Structure" }, desc: { zh: "主要成本來源。", en: "Major cost drivers." } },
      ],
      example: { zh: "以 BMC 描繪訂閱制軟體：價值主張為便利、收益流為月費、關鍵資源為平台。", en: "For SaaS: value = convenience, revenue = subscription, key resource = the platform." },
      deckUrl: "", references: [],
    },
    {
      id: "vpc", categoryId: "customer",
      name: { zh: "價值主張圖 VPC", en: "Value Proposition Canvas" },
      summary: { zh: "聚焦顧客需求與價值之間的契合。", en: "Focuses on the fit between customer needs and value." },
      definition: { zh: "由 Osterwalder 提出，是 BMC 中「價值主張」與「顧客」兩塊的放大鏡，檢視兩者是否契合。", en: "Osterwalder's zoom-in on the value proposition and customer blocks, testing for fit." },
      whenToUse: {
        zh: ["設計或精煉價值主張", "深入理解顧客需求", "驗證產品—市場契合"],
        en: ["Designing/refining a value prop", "Understanding customer needs", "Testing product–market fit"],
      },
      framework: [
        { title: { zh: "顧客任務 Jobs", en: "Customer Jobs" }, desc: { zh: "顧客想完成的事。", en: "What customers try to get done." } },
        { title: { zh: "痛點 Pains", en: "Pains" }, desc: { zh: "過程中的困擾與風險。", en: "Frustrations and risks." } },
        { title: { zh: "獲益 Gains", en: "Gains" }, desc: { zh: "期望的好處與結果。", en: "Desired outcomes and benefits." } },
        { title: { zh: "產品與服務", en: "Products & Services" }, desc: { zh: "你提供的東西。", en: "What you offer." } },
        { title: { zh: "痛點解方", en: "Pain Relievers" }, desc: { zh: "如何緩解痛點。", en: "How you ease pains." } },
        { title: { zh: "獲益引擎", en: "Gain Creators" }, desc: { zh: "如何創造獲益。", en: "How you create gains." } },
      ],
      example: { zh: "外送 App 解決「沒時間外出用餐」的任務，緩解等待與不便的痛點。", en: "A delivery app addresses the 'no time to eat out' job and relieves waiting pains." },
      deckUrl: "", references: [],
    },
    {
      id: "cvp", categoryId: "customer",
      name: { zh: "顧客價值主張", en: "Customer Value Proposition" },
      summary: { zh: "說明顧客為何該選擇你的獨特價值。", en: "States the distinctive reason customers should choose you." },
      definition: { zh: "顧客價值主張清楚說明目標顧客能獲得的獨特利益與差異點，是行銷與定位的核心。", en: "A CVP clearly states the distinctive benefits and differentiation a target customer receives — the core of positioning." },
      whenToUse: {
        zh: ["定位與訊息設計", "差異化競爭", "業務與行銷溝通"],
        en: ["Positioning and messaging", "Differentiation", "Sales & marketing communication"],
      },
      framework: [
        { title: { zh: "目標顧客", en: "Target customer" }, desc: { zh: "為誰提供價值。", en: "Who the value is for." } },
        { title: { zh: "顧客需求", en: "Need" }, desc: { zh: "要滿足的核心需求。", en: "The core need addressed." } },
        { title: { zh: "提供的利益", en: "Benefit" }, desc: { zh: "帶來的具體好處。", en: "Concrete benefits offered." } },
        { title: { zh: "差異化", en: "Point of difference" }, desc: { zh: "與對手不同之處。", en: "How you differ from rivals." } },
        { title: { zh: "佐證", en: "Proof" }, desc: { zh: "可信的證據與保證。", en: "Credible evidence/assurance." } },
      ],
      example: { zh: "主打「比同業快一倍的到貨速度」作為核心差異價值。", en: "Promising 'delivery twice as fast as rivals' as the core differentiating value." },
      deckUrl: "", references: [],
    },
    {
      id: "kano", categoryId: "customer",
      name: { zh: "Kano 模型", en: "Kano Model" },
      summary: { zh: "依屬性對滿意度的影響分類以取捨功能。", en: "Classifies attributes by their effect on satisfaction." },
      definition: { zh: "由狩野紀昭提出，將產品屬性對顧客滿意度的影響分為數類，協助功能優先順序與取捨。", en: "By Noriaki Kano; classifies attributes by how they affect satisfaction, guiding feature prioritization." },
      whenToUse: {
        zh: ["功能優先順序排序", "辨識魅力與必備功能", "需求蒐集與產品規劃"],
        en: ["Prioritizing features", "Spotting delighters vs. basics", "Requirements and roadmap"],
      },
      framework: [
        { title: { zh: "必備品質", en: "Must-be" }, desc: { zh: "缺了會不滿，有了不加分。", en: "Expected; absence dissatisfies." } },
        { title: { zh: "一維品質", en: "One-dimensional" }, desc: { zh: "做得越好，滿意度越高。", en: "More is linearly better." } },
        { title: { zh: "魅力品質", en: "Attractive" }, desc: { zh: "意外驚喜，大幅提升滿意。", en: "Delighters that surprise." } },
        { title: { zh: "無差異", en: "Indifferent" }, desc: { zh: "有無皆不影響滿意度。", en: "No effect on satisfaction." } },
        { title: { zh: "反向", en: "Reverse" }, desc: { zh: "提供反而造成不滿。", en: "Presence can dissatisfy." } },
      ],
      example: { zh: "手機「能通話」是必備、「電池續航」是一維、「驚喜設計」是魅力品質。", en: "For a phone: calling is must-be, battery life is one-dimensional, surprising design is a delighter." },
      deckUrl: "", references: [],
    },
    {
      id: "value-estimation", categoryId: "customer",
      name: { zh: "價值估計", en: "Value Estimation" },
      summary: { zh: "估計產品對顧客的經濟價值與願付價格。", en: "Estimates economic value to the customer and willingness to pay." },
      definition: { zh: "以顧客角度估計產品的經濟價值（EVC），作為定價與價值溝通的依據。", en: "Estimates the economic value to the customer (EVC) as a basis for pricing and value communication." },
      whenToUse: {
        zh: ["新產品定價", "價值溝通與議價", "比較替代方案"],
        en: ["Pricing new products", "Value selling & negotiation", "Comparing alternatives"],
      },
      framework: [
        { title: { zh: "參考價值", en: "Reference value" }, desc: { zh: "最佳替代方案的價格。", en: "Price of the best alternative." } },
        { title: { zh: "差異價值", en: "Differentiation value" }, desc: { zh: "相對替代方案的額外價值。", en: "Extra value vs. alternatives." } },
        { title: { zh: "經濟價值 EVC", en: "EVC" }, desc: { zh: "參考價值＋差異價值。", en: "Reference + differentiation value." } },
        { title: { zh: "願付價格", en: "Willingness to pay" }, desc: { zh: "顧客願意支付的上限。", en: "Customer's price ceiling." } },
      ],
      example: { zh: "新設備比現有方案每年省下維護成本，差異價值即可反映於定價。", en: "If new equipment saves annual maintenance vs. the alternative, that differentiation value informs price." },
      deckUrl: "", references: [],
    },

    /* ---------- 通路與服務 / Channel & Service ---------- */
    {
      id: "channel-functions", categoryId: "channel",
      name: { zh: "通路功能分析", en: "Channel Functions" },
      summary: { zh: "分析行銷通路所執行的功能與角色。", en: "Analyzes the functions a marketing channel performs." },
      definition: { zh: "分析通路成員所執行的交易、物流與促成功能，以釐清各角色的價值與分工。", en: "Examines transactional, logistical, and facilitating functions to clarify each channel member's role." },
      whenToUse: {
        zh: ["設計或檢視通路結構", "評估中間商價值", "決定功能由誰承擔"],
        en: ["Designing channel structure", "Assessing intermediaries' value", "Assigning who performs functions"],
      },
      framework: [
        { title: { zh: "交易功能", en: "Transactional" }, desc: { zh: "購買、銷售與承擔風險。", en: "Buying, selling, risk-taking." } },
        { title: { zh: "物流功能", en: "Logistical" }, desc: { zh: "儲存、運送與分類整理。", en: "Storing, transporting, sorting." } },
        { title: { zh: "促成功能", en: "Facilitating" }, desc: { zh: "資訊、融資與促銷。", en: "Information, financing, promotion." } },
      ],
      example: { zh: "經銷商承擔庫存與物流，零售商負責接觸末端顧客。", en: "Distributors hold inventory and logistics; retailers reach end customers." },
      deckUrl: "", references: [],
    },
    {
      id: "channel-selection", categoryId: "channel",
      name: { zh: "通路選擇分析", en: "Channel Selection Analysis" },
      summary: { zh: "決定以何種密度、經由哪些通路觸及顧客。", en: "Decides which channels and what distribution intensity to use." },
      definition: { zh: "依市場、產品與公司條件，決定配銷密度與通路組合，以有效觸及目標顧客。", en: "Chooses distribution intensity and channel mix based on market, product, and firm factors." },
      whenToUse: {
        zh: ["新產品上市鋪貨決策", "通路衝突管理", "線上線下整合"],
        en: ["Go-to-market distribution", "Managing channel conflict", "Omnichannel integration"],
      },
      framework: [
        { title: { zh: "密集配銷", en: "Intensive" }, desc: { zh: "盡可能多的通路（如日用品）。", en: "As many outlets as possible." } },
        { title: { zh: "選擇配銷", en: "Selective" }, desc: { zh: "挑選部分合適通路。", en: "A curated set of outlets." } },
        { title: { zh: "獨家配銷", en: "Exclusive" }, desc: { zh: "限定少數通路（如精品）。", en: "A few exclusive outlets." } },
        { title: { zh: "影響因素", en: "Selection factors" }, desc: { zh: "市場、產品、公司、中間商與環境。", en: "Market, product, firm, intermediary, environment." } },
      ],
      example: { zh: "精品採獨家配銷以維持品牌形象與服務品質。", en: "Luxury brands use exclusive distribution to protect image and service." },
      deckUrl: "", references: [],
    },
    {
      id: "service-failure-recovery", categoryId: "channel",
      name: { zh: "服務失誤與補救", en: "Service Failure & Recovery" },
      summary: { zh: "探討服務失誤類型與有效補救之道。", en: "Addresses types of service failure and effective recovery." },
      definition: { zh: "探討服務失誤的成因與補救策略，並理解妥善補救反而提升忠誠的「補救矛盾」。", en: "Studies why service fails and how to recover — including the 'recovery paradox' where good recovery boosts loyalty." },
      whenToUse: {
        zh: ["設計客訴與補救流程", "提升顧客留存", "服務品質管理"],
        en: ["Designing complaint/recovery flows", "Improving retention", "Service quality management"],
      },
      framework: [
        { title: { zh: "失誤類型", en: "Failure types" }, desc: { zh: "結果、過程與互動失誤。", en: "Outcome, process, interaction failures." } },
        { title: { zh: "分配公平", en: "Distributive justice" }, desc: { zh: "補償結果是否公平。", en: "Fairness of the compensation." } },
        { title: { zh: "程序公平", en: "Procedural justice" }, desc: { zh: "處理流程是否公平迅速。", en: "Fairness/speed of the process." } },
        { title: { zh: "互動公平", en: "Interactional justice" }, desc: { zh: "對待顧客的態度是否尊重。", en: "Respect shown to the customer." } },
        { title: { zh: "補救矛盾", en: "Recovery paradox" }, desc: { zh: "妥善補救可能比未失誤更滿意。", en: "Great recovery can exceed no-failure satisfaction." } },
      ],
      example: { zh: "航班延誤後迅速安排住宿與補償，反而提升顧客忠誠（補救矛盾）。", en: "After a delay, fast hotel and compensation can raise loyalty (recovery paradox)." },
      deckUrl: "", references: [],
    },

    /* ---------- 績效與財務 / Performance & Finance ---------- */
    {
      id: "balanced-scorecard", categoryId: "performance",
      name: { zh: "平衡計分卡", en: "Balanced Scorecard" },
      summary: { zh: "從四構面平衡衡量績效並連結策略。", en: "Balances performance across four perspectives, linked to strategy." },
      definition: { zh: "由 Kaplan 與 Norton 提出，從財務與非財務四構面平衡衡量組織績效並落實策略。", en: "By Kaplan & Norton; balances financial and non-financial perspectives to execute strategy." },
      whenToUse: {
        zh: ["策略落地與績效管理", "設計 KPI 與目標", "平衡短期與長期"],
        en: ["Strategy execution & KPIs", "Designing measures and targets", "Balancing short/long term"],
      },
      framework: [
        { title: { zh: "財務", en: "Financial" }, desc: { zh: "股東與營收獲利目標。", en: "Shareholder and financial goals." } },
        { title: { zh: "顧客", en: "Customer" }, desc: { zh: "顧客價值與滿意度。", en: "Customer value and satisfaction." } },
        { title: { zh: "內部流程", en: "Internal process" }, desc: { zh: "關鍵營運流程效能。", en: "Effectiveness of key processes." } },
        { title: { zh: "學習與成長", en: "Learning & growth" }, desc: { zh: "人才、文化與能力建構。", en: "People, culture, capabilities." } },
      ],
      example: { zh: "企業同時追蹤營收（財務）、滿意度（顧客）、流程效率與員工培訓。", en: "A firm tracks revenue (financial), satisfaction (customer), process efficiency, and training." },
      deckUrl: "", references: [],
    },
    {
      id: "cost-profitability", categoryId: "performance",
      name: { zh: "成本與獲利能力分析", en: "Cost & Profitability Analysis" },
      summary: { zh: "分析成本結構與分項獲利以支援決策。", en: "Analyzes cost structure and segment profitability." },
      definition: { zh: "拆解成本結構並衡量不同產品或客群的獲利能力，支援定價與資源配置。", en: "Breaks down costs and measures profitability by product or segment to guide pricing and allocation." },
      whenToUse: {
        zh: ["定價與產品組合決策", "找出虧損產品/客群", "損益兩平評估"],
        en: ["Pricing and product-mix", "Finding loss-making lines", "Break-even assessment"],
      },
      framework: [
        { title: { zh: "固定/變動成本", en: "Fixed/variable cost" }, desc: { zh: "區分隨產量變動的成本。", en: "Costs that do/don't vary with volume." } },
        { title: { zh: "邊際貢獻", en: "Contribution margin" }, desc: { zh: "售價減變動成本。", en: "Price minus variable cost." } },
        { title: { zh: "損益兩平", en: "Break-even" }, desc: { zh: "收支相等的銷量或營收。", en: "Volume/revenue where profit = 0." } },
        { title: { zh: "分項獲利", en: "Profitability by segment" }, desc: { zh: "依產品/客群分析獲利。", en: "Profit by product/customer." } },
      ],
      example: { zh: "計算損益兩平點，判斷新產品需賣多少才能回本。", en: "Compute the break-even point to see how much a new product must sell to recover costs." },
      deckUrl: "", references: [],
    },
    {
      id: "equity-risk", categoryId: "performance",
      name: { zh: "股權風險", en: "Equity Risk" },
      summary: { zh: "衡量股權投資風險與必要報酬。", en: "Measures equity-investment risk and required return." },
      definition: { zh: "衡量股權投資的風險，區分系統性與非系統性風險，並反映於投資人的必要報酬。", en: "Assesses equity risk, separating systematic from unsystematic risk, reflected in required return." },
      whenToUse: {
        zh: ["投資評估與資金成本", "投資組合分散", "評價與折現率設定"],
        en: ["Investment & cost of capital", "Portfolio diversification", "Valuation discount rates"],
      },
      framework: [
        { title: { zh: "系統性風險", en: "Systematic risk" }, desc: { zh: "市場整體無法分散的風險。", en: "Market-wide, non-diversifiable risk." } },
        { title: { zh: "非系統性風險", en: "Unsystematic risk" }, desc: { zh: "個別公司可分散的風險。", en: "Firm-specific, diversifiable risk." } },
        { title: { zh: "Beta 係數", en: "Beta" }, desc: { zh: "對市場波動的敏感度。", en: "Sensitivity to market moves." } },
        { title: { zh: "風險溢酬 / CAPM", en: "Risk premium / CAPM" }, desc: { zh: "以風險換算必要報酬。", en: "Translating risk into required return." } },
      ],
      example: { zh: "高 Beta 的股票對市場波動更敏感，投資人會要求更高的報酬。", en: "High-beta stocks move more with the market, so investors demand higher returns." },
      deckUrl: "", references: [],
    },

    /* ---------- 決策與利害關係人 / Decision & Stakeholders ---------- */
    {
      id: "power-interest", categoryId: "decision",
      name: { zh: "權力與利益矩陣", en: "Power–Interest Matrix" },
      summary: { zh: "依權力與利益分類利害關係人並訂定策略。", en: "Maps stakeholders by power and interest to set engagement." },
      definition: { zh: "由 Mendelow 提出，以「權力×利益」兩軸將利害關係人分為四類，制定相應的互動策略。", en: "Mendelow's matrix maps stakeholders on power × interest into four groups with tailored engagement." },
      whenToUse: {
        zh: ["專案與變革的利害關係人管理", "溝通與資源配置", "辨識關鍵影響者"],
        en: ["Project/change stakeholder management", "Communication & resourcing", "Identifying key influencers"],
      },
      framework: [
        { title: { zh: "高權力高利益", en: "High power, high interest" }, desc: { zh: "重點管理，密切溝通。", en: "Manage closely." } },
        { title: { zh: "高權力低利益", en: "High power, low interest" }, desc: { zh: "維持滿意，避免反對。", en: "Keep satisfied." } },
        { title: { zh: "低權力高利益", en: "Low power, high interest" }, desc: { zh: "保持告知，爭取支持。", en: "Keep informed." } },
        { title: { zh: "低權力低利益", en: "Low power, low interest" }, desc: { zh: "定期監測即可。", en: "Monitor with minimal effort." } },
      ],
      example: { zh: "主要投資人屬高權力高利益，需密切溝通與管理。", en: "Major investors are high-power, high-interest — manage them closely." },
      deckUrl: "", references: [],
    },
    {
      id: "trade-off", categoryId: "decision",
      name: { zh: "權衡分析", en: "Trade-off Analysis" },
      summary: { zh: "在多個衝突目標間取捨以支援決策。", en: "Weighs competing objectives to support decisions." },
      definition: { zh: "在多個相互衝突的準則或屬性間進行系統化取捨與比較，以選出整體最適方案。", en: "Systematically weighs competing criteria or attributes to choose the overall best option." },
      whenToUse: {
        zh: ["多準則決策", "資源或設計取捨", "方案評選"],
        en: ["Multi-criteria decisions", "Resource/design trade-offs", "Option selection"],
      },
      framework: [
        { title: { zh: "評估準則", en: "Criteria" }, desc: { zh: "界定關鍵決策準則。", en: "Define key decision criteria." } },
        { title: { zh: "權重設定", en: "Weights" }, desc: { zh: "依重要性分配權重。", en: "Assign weights by importance." } },
        { title: { zh: "屬性取捨", en: "Trade-offs" }, desc: { zh: "比較準則間的得失。", en: "Compare gains and losses." } },
        { title: { zh: "敏感度分析", en: "Sensitivity" }, desc: { zh: "檢視假設改變的影響。", en: "Test how assumptions affect choice." } },
      ],
      example: { zh: "在成本、品質與交期之間取捨，選擇整體最適方案。", en: "Trading off cost, quality, and lead time to pick the overall best option." },
      deckUrl: "", references: [],
    },
  ],
};

/* ---- 教學投影片雲端資料夾（各工具原始檔在此；deckUrl 為空時的後備連結）----
       Drive folder with all decks (fallback when a tool's deckUrl is empty) ---- */
window.DATA.tools.deckFolderUrl = "https://drive.google.com/drive/folders/19TyIrAjPRcY_znNrDTd7RXacguBhQPTc?usp=sharing";

/* ---- 各工具的「架構概念圖」型別（由 ToolDiagram 以 SVG/CSS 繪製）----
       Diagram type per tool, rendered as SVG/CSS by ToolDiagram.
       type: quadrant | radial | canvas | fit | steps | curve | pillars(預設) ---- */
(function () {
  var D = {
    swot: { type: "quadrant", center: "SWOT", axes: { zh: "縱軸：內部 ↔ 外部　橫軸：正面 ↔ 負面", en: "Vertical: Internal ↔ External · Horizontal: Helpful ↔ Harmful" } },
    tows: { type: "quadrant", center: "TOWS", axes: { zh: "優勢 / 劣勢 × 機會 / 威脅 的配對策略", en: "Strengths/Weaknesses paired with Opportunities/Threats" } },
    ansoff: { type: "quadrant", cells: [0, 2, 1, 3], axes: { zh: "縱軸：市場 既有 ↔ 新　橫軸：產品 既有 ↔ 新", en: "Market (existing↔new) × Product (existing↔new)" } },
    "blue-ocean": { type: "quadrant", center: { zh: "價值創新", en: "Value Innovation" } },
    "power-interest": { type: "quadrant", cells: [1, 0, 3, 2], axes: { zh: "縱軸：權力 高 ↔ 低　橫軸：利益 低 ↔ 高", en: "Power (high↔low) × Interest (low↔high)" } },
    "five-forces": { type: "radial", centerIndex: 0 },
    "dynamic-competition": { type: "radial", center: { zh: "競爭對手分析", en: "Competitor analysis" } },
    ecosystem: { type: "radial", centerIndex: 0 },
    "balanced-scorecard": { type: "radial", center: { zh: "願景與策略", en: "Vision & Strategy" } },
    bmc: { type: "canvas" },
    vpc: { type: "fit" },
    kano: { type: "curve" },
    "innovation-diffusion": { type: "steps" },
    cvp: { type: "steps" },
    "value-estimation": { type: "steps" },
    "trade-off": { type: "steps" },
  };
  window.DATA.tools.items.forEach(function (it) {
    it.diagram = D[it.id] || { type: "pillars" };
    // 每個工具對應自己的教學投影片 PDF（已壓縮放在 assets/tools/）
    // Each tool maps to its own compressed teaching deck in assets/tools/.
    it.deckUrl = "assets/tools/" + it.id + ".pdf";
  });
})();
