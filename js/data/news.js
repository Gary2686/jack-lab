/* =============================================================================
 * news.js — 最新消息與趨勢資訊 / News & Trends
 * 新增一則：在 items 加入物件即可（date 用 YYYY-MM-DD，會自動排序）。
 * Add an item to `items` (date as YYYY-MM-DD; sorted automatically).
 *
 * item 欄位 / fields:
 *   id, category(對應 categories), date, pinned(bool), tags:[tagId],
 *   title{zh,en}, summary{zh,en}, body{zh,en}(可省略), image('' = 灰底), url
 * ⚠ 以下為結構範例，請替換為實際消息。 Sample entries — replace with real data.
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.news = {
  categories: [
    { id: "labNews", label: { zh: "實驗室最新消息", en: "Lab News" } },
    { id: "trends", label: { zh: "研究趨勢資訊", en: "Research Trends" } },
    { id: "events", label: { zh: "活動紀錄", en: "Events" } },
    { id: "media", label: { zh: "媒體與外部連結", en: "Media & Links" } },
  ],
  tags: [
    { id: "recruiting", label: { zh: "招生", en: "Recruiting" } },
    { id: "paper", label: { zh: "論文", en: "Paper" } },
    { id: "talk", label: { zh: "演講", en: "Talk" } },
    { id: "ai", label: { zh: "AI", en: "AI" } },
    { id: "neuro", label: { zh: "神經科學", en: "Neuroscience" } },
    { id: "fsqca", label: { zh: "fsQCA", en: "fsQCA" } },
    { id: "workshop", label: { zh: "工作坊", en: "Workshop" } },
  ],
  items: [
    {
      id: "n-1", category: "labNews", date: "2026-05-28", pinned: true, tags: ["recruiting"],
      title: {
        zh: "Jack Lab 招生：徵求碩士生與博士生加入",
        en: "Jack Lab is Recruiting Master's and Ph.D. Students",
      },
      summary: {
        zh: "Jack Lab 持續招收對人工智慧與數位轉型、神經科學與人機互動、個案研究與服務科學，以及模糊集質性比較分析（fsQCA）感興趣的同學，碩士生與博士生皆歡迎加入。",
        en: "Jack Lab is recruiting Master's and Ph.D. students interested in AI & digital transformation, neuroscience & HCI, case studies & service science, or fuzzy-set Qualitative Comparative Analysis (fsQCA).",
      },
      body: {
        zh: "Jack Lab（國立中山大學資訊管理學系徐傑克實驗室）是一個跨領域研究團隊，研究橫跨人工智慧、數位轉型、神經科學與人機互動、服務科學、個案研究與 fsQCA 方法論。\n\n我們提供：\n• 腦波（EEG）與眼動追蹤實驗設備，支援行為與認知層面的研究設計\n• 國際期刊與頂尖研討會（AMCIS、PACIS、HICSS、ICIS、ECIS 等）的發表機會與經驗\n• 跨領域研究訓練、產學合作專案與個案教學\n• 完整的策略分析工具與教學資源，協助學生系統化建立分析思維\n\n歡迎對嚴謹研究方法、真實管理問題與新興科技同時感興趣的同學加入。報名與洽詢請聯絡指導教授徐士傑主任或實驗室成員，亦可參考本網站「研究領域與成果」、「學術發表」與「團隊成員」頁面進一步了解實驗室方向。",
        en: "Jack Lab (Department of Information Management, National Sun Yat-sen University) is an interdisciplinary research team working at the intersection of AI, digital transformation, neuroscience & HCI, service science, case research, and fsQCA methodology.\n\nWhat we offer:\n• EEG and eye-tracking facilities for behavioral and cognitive studies\n• Publication opportunities at top venues (AMCIS, PACIS, HICSS, ICIS, ECIS, and SSCI / SCIE journals)\n• Interdisciplinary training, university–industry projects, and case-based teaching\n• A curated toolkit of strategy frameworks and teaching resources\n\nWe welcome students who care about both rigorous methodology and real-world management problems. To apply or inquire, please contact Prof. Shih-Chieh Hsu (Chair) or any Jack Lab member; the Research, Publications, and Team pages on this site provide more detail about our directions.",
      },
      image: "", url: "",
    },
    {
      id: "n-bnext-20260528-1", category: "media", date: "2026-05-28", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜軟體開發奇異點已到？Claude Code 負責人：AI 開始自我迭代，傳統 SaaS 護城河將被瓦解",
        en: "Bnext｜Has the software-singularity arrived? Claude Code lead: AI is starting to self-iterate, traditional SaaS moats are eroding",
      },
      summary: {
        zh: "Claude Code 負責人 Boris Cherny 指出，AI Agent 已能自我迭代並承擔大量程式撰寫工作，正在動搖傳統 SaaS 產品的競爭護城河。",
        en: "Claude Code lead Boris Cherny argues that AI Agents can now self-iterate and shoulder much of the coding workload, eroding the moat of traditional SaaS products.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91052/boris-cherny-ai-agent-saas",
    },
    {
      id: "n-bnext-20260528-2", category: "media", date: "2026-05-28", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜別再給 AI 下 SOP！20 年老鳥都常忽略的「麻瓜溝通法」，才能逼出 AI 全部潛能",
        en: "Bnext｜Stop giving AI an SOP — the 'muggle-style' prompting trick even veterans miss to unlock AI's full potential",
      },
      summary: {
        zh: "資深工作者習慣寫 SOP 式指令，反而限制了 AI 的發揮；文章分享更貼近自然對話、給予情境與目的的提示寫法，才能引出 AI 完整能力。",
        en: "Veterans tend to write SOP-like prompts that cap AI's potential; the article shows that natural, context-rich dialogue unlocks the model's full capability.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91059/ai-prompt-tips-senior-vs-junior",
    },
  ],
};
