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
    { id: "conference", label: { zh: "研討會", en: "Conference" } },
  ],
  items: [
    {
      id: "n-uhima-2026", category: "labNews", date: "2026-06-02", pinned: true, tags: ["conference", "ai"],
      title: {
        zh: "UHIMA 2026 ｜「AI 賦能智慧照護：高齡健康新紀元」國際研討會（7/2–7/3 中山大學）",
        en: "UHIMA 2026 | AI-Enabled Smart Care: A New Era of Aging Health (July 2–3, NSYSU)",
      },
      summary: {
        zh: "第 21 屆國際健康資訊管理研討會（UHIMA 2026）暨第 6 屆台灣長期照護管理研討會（TLCMA 2026），主題「AI 賦能智慧照護：高齡健康新紀元」，2026 年 7 月 2 日（四）至 7 月 3 日（五）於國立中山大學舉行，由台灣健康資訊管理學會與台灣長期照護管理學會主辦。",
        en: "The 21st International Conference on Health Information Management (UHIMA 2026) and the 6th Taiwan Long-term Care Management Conference (TLCMA 2026), themed \"AI-Enabled Smart Care: A New Era of Aging Health,\" will be held at National Sun Yat-sen University on July 2–3, 2026, co-hosted by the Taiwan Health Information Management Association and the Taiwan Long-term Care Management Association.",
      },
      body: {
        zh: "本研討會匯集學術界與實務界專家，探討人工智慧在高齡照護、智慧醫療與護理領域的創新應用與發展趨勢。\n\n徵稿主題涵蓋：智慧高齡健康、智慧醫療照護、護理照護、醫療資訊科技、智慧睡眠照護等六大議題。徵稿截止日：2026 年 4 月 26 日（週日）。\n\n相關資訊與報名連結請見研討會官網。",
        en: "The conference brings together scholars and practitioners to explore innovative applications and trends of AI in aging care, smart healthcare, and nursing.\n\nTopics include smart aging health, smart medical care, nursing care, healthcare information technology, and smart sleep care. Submission deadline: April 26, 2026. See the conference website for full information and registration.",
      },
      image: "", url: "https://uhima2026.mis.nsysu.edu.tw/",
    },
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
    {
      id: "n-bnext-20260525-1", category: "media", date: "2026-05-25", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜AI 來了先砍誰？Cloudflare 執行長揭裁員新規則：「衡量者」先裁、工程師業務照樣聘",
        en: "Bnext｜Who gets cut first in the AI era? Cloudflare CEO's new rule: 'Measurers' go first, builders and sellers stay",
      },
      summary: {
        zh: "Cloudflare 執行長 Matthew Prince 援引 Drucker 的員工分類框架，把職位分成 Builder（價值創造者）、Seller（業務推廣者）與 Measurer（效能衡量者）三類，AI 時代下中階管理、營運與稽核這類「衡量者」最容易被自動化取代，直接創造價值的工程師與業務則持續擴大招聘。對 AI 驅動下的組織再設計與人才配置提供具體的判斷依據。",
        en: "Cloudflare CEO Matthew Prince invokes Drucker's framing to split roles into Builders, Sellers, and Measurers — and argues AI is making the middle-management, ops, and audit-style 'Measurer' roles the prime targets for cuts, while value-creating engineers and salespeople are being hired more aggressively. A concrete lens on org redesign and talent allocation under AI.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91035/cloudflare-ai-layoffs-builder-seller-measurer",
    },
    {
      id: "n-bnext-20260521-1", category: "media", date: "2026-05-21", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜從產品安全到營運韌性：合勤集團揭 AI 時代資安新戰略",
        en: "Bnext｜From product security to operational resilience: Zyxel unveils its AI-era cybersecurity strategy",
      },
      summary: {
        zh: "合勤集團整合旗下黑貓資訊、兆勤與勤晁三家子公司，回應歐盟《網路韌性法案》(CRA)推出兩階段資安戰略：2026 年強化「通報即戰力」的產品安全應變機制，2027 年導入 Security by Design 的全生命週期治理，並透過 Nebula 雲地聯防與多層次防禦因應量子運算威脅。為企業資安從被動合規走向主動風險治理提供完整框架。",
        en: "Zyxel integrates three subsidiaries to roll out a two-phase strategy aligned with the EU Cyber Resilience Act: in 2026, build a 'report-as-defense' incident-response capability; in 2027, institutionalize Security-by-Design across the full lifecycle, with the Nebula cloud–edge platform and multi-layered defenses against quantum-era threats. A useful frame for moving enterprise cybersecurity from passive compliance to proactive governance.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/90987/zyxel_2026-05",
    },
    {
      id: "n-bnext-20260424-1", category: "media", date: "2026-04-24", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜AI 加持近 9 成企業，甚至扛起營運大任！解放人類產能的 AI「18 同仁」出列",
        en: "Bnext｜AI now powers nearly 90% of enterprises and shoulders core operations — meet the 18 AI 'coworkers'",
      },
      summary: {
        zh: "麥肯錫調查顯示 88% 企業已在至少一項職能定期使用 AI，文章盤點 18 家為企業痛點量身打造的 AI 應用新創，涵蓋招募、客服、財務、資安等領域。AI 正從輕量級辦公輔助升級為扛起營運的「數位員工」，未來辦公室將以 AI 代理為主力，員工轉為協調自己 AI 團隊的管理者 — 對 AI 落地策略、組織再設計與人才角色變動研究都是清楚的時間切片。",
        en: "A McKinsey survey shows 88% of enterprises already use AI in at least one function. The piece profiles 18 startups built around concrete enterprise pain points — recruiting, support, finance, security — arguing AI is shifting from light office helper to operations-bearing 'digital employee', with humans becoming coordinators of their own AI teams. A useful timestamp for studies on AI adoption, org redesign, and shifting talent roles.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/90657/corp-app-ai100",
    },
    {
      id: "n-bnext-20260323-1", category: "media", date: "2026-03-23", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜數位轉型最難一段！北捷「QR 紙票取代代幣」技術沒問題，為何用戶還是卡在閘門前？",
        en: "Bnext｜The hardest mile in digital transformation: Taipei Metro's QR ticket works on paper — so why are riders still stuck at the gate?",
      },
      summary: {
        zh: "北捷以 QR 紙票取代代幣的技術本身沒問題，但用戶卻在找閘門、紙票破損、掃描延遲等情境上頻頻卡關。文章點出數位轉型最常被低估的一環是「過渡期設計」：終態技術再完整也補不上認知落差，組織應該在設計階段就把真實使用情境與過渡期體驗放到與終態技術同等優先序。對服務設計、UX 與數位轉型研究是非常具體的本土案例。",
        en: "Taipei Metro's QR-paper-ticket replacement works technically, yet users keep stalling at the gate — searching for compatible turnstiles, dealing with torn paper, or waiting for scans. The article surfaces what digital transformation projects most often underestimate: transition-phase design. End-state tech can't paper over cognitive gaps; real-world usage and the in-between experience must be first-class design concerns. A vivid local case for service-design, UX, and digital-transformation researchers.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/90381/metro-digital-transformation-ux-gap",
    },
  ],
};
