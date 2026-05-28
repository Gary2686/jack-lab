/* =============================================================================
 * publications.js — 學術發表 / Publications
 * 新增一筆發表：在 items 加入物件，type 對應下方 types 之一。
 * Add a publication by appending to `items`; `type` must match one of `types`.
 *
 * item 欄位 / fields:
 *   id, type, year, topics:[topicId], featured(bool),
 *   title{zh,en}, authors{zh,en}, venue{zh,en}, detail{zh,en}(卷期頁/期間/地點),
 *   doi, url, abstract{zh,en}(可省略 optional)
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.publications = {
  types: [
    { id: "journal", label: { zh: "期刊論文", en: "Journal Articles" } },
    { id: "conference", label: { zh: "研討會論文", en: "Conference Papers" } },
    { id: "book", label: { zh: "專書 / 個案 / 教材", en: "Books, Cases & Materials" } },
    { id: "project", label: { zh: "研究計畫", en: "Research Projects" } },
    { id: "thesis", label: { zh: "學生論文", en: "Student Theses" } },
  ],
  topics: [
    { id: "ai", label: { zh: "AI 與數位轉型", en: "AI & Digital Transformation" } },
    { id: "neuro", label: { zh: "神經科學與人機互動", en: "Neuroscience & HCI" } },
    { id: "ecommerce", label: { zh: "電子商務與數位服務", en: "E-Commerce & Digital Services" } },
    { id: "team", label: { zh: "團隊與專案管理", en: "Team & Project Management" } },
    { id: "case", label: { zh: "哈佛教學個案", en: "Harvard Teaching Cases" } },
    { id: "fsqca", label: { zh: "fsQCA", en: "fsQCA" } },
  ],
  items: [
    {
      id: "j-2025-security-policy-loafing-commitment", type: "journal", year: 2025, topics: ["neuro"], featured: true,
      title: { zh: "Employees' intention to comply with information security policies: The impacts of loafing and commitment", en: "Employees' intention to comply with information security policies: The impacts of loafing and commitment" },
      authors: { zh: "Chiu, C. M., Cheng, H. L., Hsu, J. S. C.*, Tan, C. M., & Huang, C. H.", en: "Chiu, C. M., Cheng, H. L., Hsu, J. S. C.*, Tan, C. M., & Huang, C. H." },
      venue: { zh: "International Journal of Human-Computer Interaction", en: "International Journal of Human-Computer Interaction" },
      detail: { zh: "SSCI, 41(14), 9066-9082", en: "SSCI, 41(14), 9066-9082" },
      doi: "10.1080/10447318.2024.2422757", url: "",
    },
    {
      id: "j-2025-aics-quality-attributes", type: "journal", year: 2025, topics: ["ai"], featured: true,
      title: { zh: "Constructing the quality attributes of online artificial intelligent customer service (AICS)", en: "Constructing the quality attributes of online artificial intelligent customer service (AICS)" },
      authors: { zh: "Gary Yu-Ho Yeh, Kuang-Ting Cheng, Chao-Min Chiu, Jack Shih-Chieh Hsu*, & Shih-Yi Chien", en: "Gary Yu-Ho Yeh, Kuang-Ting Cheng, Chao-Min Chiu, Jack Shih-Chieh Hsu*, & Shih-Yi Chien" },
      venue: { zh: "International Journal of Human-Computer Interaction", en: "International Journal of Human-Computer Interaction" },
      detail: { zh: "SSCI, November 2025", en: "SSCI, November 2025" },
      doi: "10.1080/10447318.2025.2589862", url: "",
    },
    {
      id: "j-2025-team-resilience-isd", type: "journal", year: 2025, topics: ["team"], featured: true,
      title: { zh: "Team resilience capability in information systems development (ISD) project teams", en: "Team resilience capability in information systems development (ISD) project teams" },
      authors: { zh: "Jack Shih-Chieh Hsu, Kuang-Ting Cheng, Yuzhu Li, & Ryan Brading", en: "Jack Shih-Chieh Hsu, Kuang-Ting Cheng, Yuzhu Li, & Ryan Brading" },
      venue: { zh: "Technological Forecasting and Social Change", en: "Technological Forecasting and Social Change" },
      detail: { zh: "SSCI, 217, 124186", en: "SSCI, 217, 124186" },
      doi: "10.1016/j.techfore.2025.124186", url: "",
    },
    {
      id: "j-2025-podcast-task-technology-fit", type: "journal", year: 2025, topics: ["ecommerce"], featured: false,
      title: { zh: "Drivers of podcast usage other than use & gratification: A task-technology fit perspective", en: "Drivers of podcast usage other than use & gratification: A task-technology fit perspective" },
      authors: { zh: "Jacob Chun Cheng, Jack Shih-Chieh Hsu*, Hong-Jyun Shen, & Cheng-Lin Chen", en: "Jacob Chun Cheng, Jack Shih-Chieh Hsu*, Hong-Jyun Shen, & Cheng-Lin Chen" },
      venue: { zh: "Electronic Commerce Research and Applications", en: "Electronic Commerce Research and Applications" },
      detail: { zh: "SCIE, 72, 101515", en: "SCIE, 72, 101515" },
      doi: "10.1016/j.elerap.2025.101515", url: "https://doi.org/10.1016/j.elerap.2025.101515",
    },
    {
      id: "j-2025-live-streaming-norm-violation", type: "journal", year: 2025, topics: ["ecommerce"], featured: false,
      title: { zh: "The thrust and drag forces affecting norm violation in live streaming eCommerce", en: "The thrust and drag forces affecting norm violation in live streaming eCommerce" },
      authors: { zh: "Chang-Chien, Y. T., Cheng, K. T., Hsu, J. S. C.*, & Huang, H. H.", en: "Chang-Chien, Y. T., Cheng, K. T., Hsu, J. S. C.*, & Huang, H. H." },
      venue: { zh: "Electronic Commerce Research and Applications", en: "Electronic Commerce Research and Applications" },
      detail: { zh: "SCIE, 70, 101478", en: "SCIE, 70, 101478" },
      doi: "10.1016/j.elerap.2025.101478", url: "https://doi.org/10.1016/j.elerap.2025.101478",
    },
    {
      id: "j-2025-boutique-bags-subscription", type: "journal", year: 2025, topics: ["ecommerce"], featured: false,
      title: { zh: "Factors affecting consumer intention to adopt boutique bags subscription service", en: "Factors affecting consumer intention to adopt boutique bags subscription service" },
      authors: { zh: "Chang-Chien, Y. T., Hsu, J. S. C.*, Hung-Chun Shen, Jacob Chun Cheng, & Gary Yu-Ho Yeh", en: "Chang-Chien, Y. T., Hsu, J. S. C.*, Hung-Chun Shen, Jacob Chun Cheng, & Gary Yu-Ho Yeh" },
      venue: { zh: "Journal of Electronic Commerce Research", en: "Journal of Electronic Commerce Research" },
      detail: { zh: "SSCI", en: "SSCI" },
      doi: "", url: "http://www.jecr.org/sites/default/files/2026vol27no1_Index_0.pdf",
    },
    {
      id: "j-2024-internet-banking-trust-transfer", type: "journal", year: 2024, topics: ["ecommerce"], featured: false,
      title: { zh: "The facilitators and inhibitors of customer adoption of pure Internet banking: Trust transfer and status quo bias", en: "The facilitators and inhibitors of customer adoption of pure Internet banking: Trust transfer and status quo bias" },
      authors: { zh: "Chao-Min Chiu, Paul Jen-Hwa Hu, Jack Shih-Chieh Hsu*, & Yen-Chun Lin", en: "Chao-Min Chiu, Paul Jen-Hwa Hu, Jack Shih-Chieh Hsu*, & Yen-Chun Lin" },
      venue: { zh: "Journal of Organizational Computing and Electronic Commerce", en: "Journal of Organizational Computing and Electronic Commerce" },
      detail: { zh: "SSCI, 34(2), 85-107", en: "SSCI, 34(2), 85-107" },
      doi: "10.1080/10919392.2024.2315714", url: "",
    },
    {
      id: "j-2024-information-security-fatigue", type: "journal", year: 2024, topics: ["neuro"], featured: false,
      title: { zh: "Examining formation and alleviation of information security fatigue by using job demands-resources theory", en: "Examining formation and alleviation of information security fatigue by using job demands-resources theory" },
      authors: { zh: "Hsu, J. S. C., Hung, Y. W., Hsieh, P. J., & Chiu, C. M.", en: "Hsu, J. S. C., Hung, Y. W., Hsieh, P. J., & Chiu, C. M." },
      venue: { zh: "Information Systems Journal", en: "Information Systems Journal" },
      detail: { zh: "SSCI, 34(6), 2132-2172", en: "SSCI, 34(6), 2132-2172" },
      doi: "10.1111/isj.12524", url: "",
    },
    {
      id: "j-2023-social-media-fatigue", type: "journal", year: 2023, topics: ["neuro"], featured: false,
      title: { zh: "How social media fatigue, feigning and altering emotion discourage the use of social media", en: "How social media fatigue, feigning and altering emotion discourage the use of social media" },
      authors: { zh: "Hsu, J. S. C., Chiu, C. M., Chang-Chien, Y. T., & Tang, K.", en: "Hsu, J. S. C., Chiu, C. M., Chang-Chien, Y. T., & Tang, K." },
      venue: { zh: "Internet Research", en: "Internet Research" },
      detail: { zh: "SSCI, 34(4), 1488-1518", en: "SSCI, 34(4), 1488-1518" },
      doi: "10.1108/INTR-06-2022-0390", url: "",
    },
    {
      id: "j-2022-intellectual-capital-team-resilience", type: "journal", year: 2022, topics: ["team"], featured: false,
      title: { zh: "Intellectual capital and team resilience capability of information system development project teams", en: "Intellectual capital and team resilience capability of information system development project teams" },
      authors: { zh: "Kuang-Ting Cheng, Jack Shih-Chieh Hsu*, Yuzhu Li, & Ryan Brading", en: "Kuang-Ting Cheng, Jack Shih-Chieh Hsu*, Yuzhu Li, & Ryan Brading" },
      venue: { zh: "Information & Management", en: "Information & Management" },
      detail: { zh: "SSCI, 60(1), 103722", en: "SSCI, 60(1), 103722" },
      doi: "10.1016/j.im.2022.103722", url: "",
    },
    {
      id: "j-2022-cross-border-social-commerce", type: "journal", year: 2022, topics: ["ecommerce"], featured: false,
      title: { zh: "Cross-border social commerce: From a trust transfer perspective", en: "Cross-border social commerce: From a trust transfer perspective" },
      authors: { zh: "Wiyata, Jack Shih-Chieh Hsu, Yu Wen Hung, & Chao-Min Chiu", en: "Wiyata, Jack Shih-Chieh Hsu, Yu Wen Hung, & Chao-Min Chiu" },
      venue: { zh: "Journal of Electronic Commerce Research", en: "Journal of Electronic Commerce Research" },
      detail: { zh: "SSCI, 23(2), 115-137", en: "SSCI, 23(2), 115-137" },
      doi: "", url: "http://jecr.org/sites/default/files/2022vol23no2_Paper4.pdf",
    },
    {
      id: "c-sample-1", type: "conference", year: 2025, topics: ["fsqca"], featured: false,
      title: { zh: "（範例）以 fsQCA 探討科技採用的組態路徑", en: "(Sample) Configurational Paths to Technology Adoption: An fsQCA Study" },
      authors: { zh: "葉欲禾、徐士傑", en: "Yeh, G., & Hsu, S.-C." },
      venue: { zh: "國際資訊系統研討會 (ICIS)", en: "Intl. Conf. on Information Systems (ICIS)" },
      detail: { zh: "會議地點待補充", en: "Location TBA" },
      doi: "", url: "",
    },
    {
      id: "b-sample-1", type: "book", year: 2024, topics: ["case"], featured: false,
      title: { zh: "（範例）服務科學教學個案集", en: "(Sample) Service Science Teaching Case Collection" },
      authors: { zh: "徐士傑 主編", en: "Hsu, S.-C. (Ed.)" },
      venue: { zh: "出版單位待補充", en: "Publisher TBA" },
      detail: { zh: "ISBN / 章節待補充", en: "ISBN / chapters TBA" },
      doi: "", url: "",
    },
    {
      id: "p-sample-1", type: "project", year: 2025, topics: ["ai"], featured: true,
      title: { zh: "（範例）AI 賦能數位轉型之研究", en: "(Sample) AI-Enabled Digital Transformation" },
      authors: { zh: "主持人：徐士傑", en: "PI: Shih-Chieh Hsu" },
      venue: { zh: "國科會 / 產學合作（補助單位待補充）", en: "NSTC / Industry (funder TBA)" },
      detail: { zh: "計畫期間：待補充", en: "Period: TBA" },
      doi: "", url: "",
      abstract: { zh: "計畫摘要待補充。", en: "Project abstract to be added." },
    },
    {
      id: "t-sample-1", type: "thesis", year: 2024, topics: ["neuro"], featured: false,
      title: { zh: "（範例）眼動指標於介面設計評估之應用", en: "(Sample) Eye-Tracking Metrics for Interface Evaluation" },
      authors: { zh: "學生：劉冠宏　指導教授：徐士傑", en: "Student: Liu, K.-H.　Advisor: Hsu, S.-C." },
      venue: { zh: "國立中山大學 資訊管理學系 碩士論文", en: "M.B.A. Thesis, Dept. of IM, NSYSU" },
      detail: { zh: "", en: "" },
      doi: "", url: "",
    },
  ],
};
