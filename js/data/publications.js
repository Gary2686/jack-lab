/* =============================================================================
 * publications.js — 學術發表 / Publications
 * 新增一筆發表：在 items 加入物件，type 對應下方 types 之一。
 * Add a publication by appending to `items`; `type` must match one of `types`.
 *
 * item 欄位 / fields:
 *   id, type, year, topics:[topicId], featured(bool),
 *   title{zh,en}, authors{zh,en}, venue{zh,en}, detail{zh,en}(卷期頁/期間/地點),
 *   doi, url, abstract{zh,en}(可省略 optional)
 * ⚠ 以下為結構範例，請替換為實際發表。 Sample entries — replace with real data.
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
    { id: "neuro", label: { zh: "神經科學與 HCI", en: "Neuroscience & HCI" } },
    { id: "service", label: { zh: "個案與服務科學", en: "Case & Service Science" } },
    { id: "fsqca", label: { zh: "fsQCA", en: "fsQCA" } },
  ],
  items: [
    {
      id: "j-sample-1", type: "journal", year: 2025, topics: ["ai"], featured: true,
      title: { zh: "（範例）生成式 AI 採用對企業績效的影響", en: "(Sample) The Impact of Generative AI Adoption on Firm Performance" },
      authors: { zh: "徐士傑、鄭鈞、葉欲禾", en: "Hsu, S.-C., Cheng, J., & Yeh, G." },
      venue: { zh: "資訊管理學報", en: "Journal of Information Management" },
      detail: { zh: "卷(期), 頁碼待補充", en: "Vol(Issue), pages TBA" },
      doi: "", url: "",
      abstract: { zh: "本文探討企業導入生成式 AI 的關鍵前因及其對營運績效的影響。（摘要待補充）", en: "This study examines the antecedents of generative-AI adoption and its effect on firm performance. (Abstract to be added.)" },
    },
    {
      id: "j-sample-2", type: "journal", year: 2024, topics: ["neuro"], featured: false,
      title: { zh: "（範例）介面複雜度對認知負荷的影響：EEG 證據", en: "(Sample) Interface Complexity and Cognitive Load: Evidence from EEG" },
      authors: { zh: "徐士傑、葉欲禾", en: "Hsu, S.-C., & Yeh, G." },
      venue: { zh: "人機互動期刊", en: "Journal of Human–Computer Interaction" },
      detail: { zh: "卷(期), 頁碼待補充", en: "Vol(Issue), pages TBA" },
      doi: "", url: "",
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
      id: "b-sample-1", type: "book", year: 2024, topics: ["service"], featured: false,
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
