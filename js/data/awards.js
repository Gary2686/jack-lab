/* =============================================================================
 * awards.js — 榮譽榜 / Honors & Awards
 * 新增一筆：在 items 加入物件，type 對應下方 types 之一。
 * item 欄位 / fields:
 *   id, type, year, title{zh,en}, recipient{zh,en}, org{zh,en}, desc{zh,en}, image('' = 灰底)
 * ⚠ 以下為結構範例，請替換為實際榮譽紀錄。 Sample entries — replace with real data.
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
      id: "a-1", type: "studentThesis", year: 2025,
      title: { zh: "（範例）碩士論文獎", en: "(Sample) Outstanding Master's Thesis Award" },
      recipient: { zh: "Jack Lab 研究生", en: "Jack Lab graduate student" },
      org: { zh: "頒獎單位待補充", en: "Awarding body TBA" },
      desc: { zh: "表彰於資訊管理領域之傑出碩士論文。（說明待補充）", en: "Recognizing an outstanding master's thesis in IM. (Details to be added.)" },
      image: "",
    },
    {
      id: "a-2", type: "competition", year: 2025,
      title: { zh: "（範例）資料分析競賽 佳績", en: "(Sample) Data Analytics Competition — Award" },
      recipient: { zh: "Jack Lab 團隊", en: "Jack Lab team" },
      org: { zh: "主辦單位待補充", en: "Organizer TBA" },
      desc: { zh: "於資料分析／服務設計相關競賽獲獎。（說明待補充）", en: "Awarded in a data-analytics / service-design competition. (Details to be added.)" },
      image: "",
    },
    {
      id: "a-3", type: "honor", year: 2024,
      title: { zh: "（範例）教學優良獎", en: "(Sample) Teaching Excellence Award" },
      recipient: { zh: "徐士傑", en: "Shih-Chieh Hsu" },
      org: { zh: "國立中山大學", en: "National Sun Yat-sen University" },
      desc: { zh: "肯定於教學與研究上的貢獻。（說明待補充）", en: "Recognizing contributions to teaching and research. (Details to be added.)" },
      image: "",
    },
    {
      id: "a-4", type: "milestone", year: 2024,
      title: { zh: "（範例）Jack Lab 神經科學實驗室建置", en: "(Sample) Neuroscience Lab Established" },
      recipient: { zh: "Jack Lab", en: "Jack Lab" },
      org: { zh: "中山大學 資訊管理學系", en: "Dept. of IM, NSYSU" },
      desc: { zh: "建置腦波與眼動實驗設備，啟動神經科學與人機互動研究。（說明待補充）", en: "Set up EEG and eye-tracking facilities, launching neuroscience & HCI research. (Details to be added.)" },
      image: "",
    },
  ],
};
