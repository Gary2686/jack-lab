/* =============================================================================
 * activities.js — 活動參與 / Activities
 * 實驗室的內部活動：聚餐、迎新、畢業典禮、團隊出遊等生活紀錄。
 * Lab social activities: welcome dinners, graduation, gatherings, retreats —
 * the human moments of lab life. (Industry consulting projects live in
 * consulting.js.)
 *
 * item 欄位 / fields:
 *   id, date(YYYY-MM-DD), title{zh,en}, location{zh,en}, tags:[{zh,en}],
 *   description{zh,en}, photos:[]   // photos 留空陣列即顯示灰色佔位
 *
 * 加入照片：把圖片放到 assets/，再填路徑，例如
 *   photos: ["assets/activity-2026-retreat-1.jpg", ...]
 * ⚠ 以下為結構範例（draft: true 隱藏），請替換為實際活動。
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.activities = {
  items: [
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
