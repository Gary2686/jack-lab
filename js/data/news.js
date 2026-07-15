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
    {
      id: "n-bnext-20260603-1", category: "media", date: "2026-06-03", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜代理式商務連動百兆 AI 商機！4 張圖掌握「依賴經濟」大勢：對話框正接管搜尋框",
        en: "Bnext｜Agentic commerce unlocks a trillion-dollar AI market: the rise of the 'dependency economy' as the chat box takes over the search box",
      },
      summary: {
        zh: "文章指出 AI 正從爭奪「注意力」演進到爭奪「情感占有率」的依賴經濟時代：購物入口從「打開購物網站」前移到「與 AI 聊天」，消費者首次主動把決策權交給自主代理程式。對電商與消費者行為研究而言，這重塑了顧客旅程與獲利模式，也帶來決策授權與倫理層面的全新課題。",
        en: "The piece argues AI is shifting from competing for 'attention' to competing for 'share of dependency': the shopping entry point moves from opening a store to chatting with an AI agent, as consumers for the first time actively delegate decisions to autonomous agents. For e-commerce and consumer-behavior research it reshapes the customer journey and monetization models, raising new questions about decision delegation and ethics.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91092/ai-agentic-ommerce",
    },
    {
      id: "n-bnext-20260602-1", category: "media", date: "2026-06-02", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜黃仁勳猛催 token、企業 AI 帳單卻失控！微軟與 Uber 都踩煞車，「養 AI 比用人貴」現實已上演",
        en: "Bnext｜Token prices fall but AI bills explode: Microsoft and Uber hit the brakes as 'AI costs more than headcount' becomes reality",
      },
      summary: {
        zh: "本文揭示企業 AI 的成本悖論：雖然 token 單價持續下降，AI 代理的消耗量卻膨脹得更快，整體推理成本反而上升，連微軟、Uber 都被迫緊縮 AI 政策。對管理者是一記提醒——應檢視 AI 投資的真實 ROI，而非盲目跟風願景敘事，重新評估技術導入的商業合理性。",
        en: "The article exposes the enterprise AI cost paradox: even as per-token prices fall, agent consumption grows faster, pushing total inference costs up — forcing even Microsoft and Uber to rein in AI policies. A reminder for managers to scrutinize the real ROI of AI investment rather than chase vision-driven hype, and to reassess the business case for adoption.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91045/ai-cost-token-agent",
    },
    {
      id: "n-bnext-20260608-1", category: "media", date: "2026-06-08", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜觀點：AI Bots 流量 2025 年暴增 21 倍，直逼 Google 爬蟲！你的購物網站準備好迎接 Agent 了嗎？",
        en: "Bnext｜Opinion: AI-bot traffic surged 21× in 2025, rivaling Google's crawler — is your e-commerce site ready for agents?",
      },
      summary: {
        zh: "AI 機器人流量已占全網約 4.2%、年成長逾 21 倍，逼近搜尋引擎爬蟲，迫使電商網站從「人類優先」轉向「Agent 優先」設計；Google 推行 UCP 協議、Cloudflare 推出 Agent Readiness Score 檢測工具，企業應主動優化網站結構（如 markdown、llm.txt）以被 AI 代理發現。對電商與服務設計研究而言，「Agent 友善性」正成為新的核心競爭力與顧客旅程入口。",
        en: "AI-bot traffic now makes up ~4.2% of the web and grew over 21× in 2025, nearly matching search-engine crawlers — pushing e-commerce sites to shift from human-first to agent-first design. With Google's UCP protocol and Cloudflare's Agent Readiness Score, firms must optimize site structure (markdown, llm.txt) to be discoverable by AI agents. For e-commerce and service-design research, 'agent-friendliness' is emerging as a new core competitive edge and customer-journey entry point.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91191/is-your-shopping-site-ready-for-ai-agents",
    },
    {
      id: "n-bnext-20260605-1", category: "media", date: "2026-06-05", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜不只在 Threads 陪聊！Meta AI 將化身「超級店員」，進駐 IG、Messenger 幫全球商家接單",
        en: "Bnext｜Beyond Threads chat: Meta AI becomes a 'super clerk' on Instagram and Messenger to take orders for businesses worldwide",
      },
      summary: {
        zh: "Meta 推出 Business Agent，將 AI 部署到 WhatsApp、Messenger 與 Instagram，協助商家處理客服、產品推薦與銷售轉化，把每日逾 10 億筆商家對話轉化為商務平台。此舉是 Meta 在廣告之外尋求新營收模式，也反映平台經濟正向「AI 代理即服務」轉型；對平台經濟、電商與消費者行為研究是觀察既有用戶基礎如何轉化為企業 AI 市場優勢的清楚案例。",
        en: "Meta's new Business Agent deploys AI across WhatsApp, Messenger, and Instagram to handle customer service, recommendations, and sales conversion, turning over a billion daily business conversations into a commerce platform. It marks Meta's search for revenue beyond ads and signals platform economies pivoting toward 'AI-agent-as-a-service.' A clear case for platform-economy, e-commerce, and consumer-behavior research on how an installed user base converts into enterprise-AI advantage.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91148/meta-business-agent-ai-business-entry-whatsapp-messenger-instagram",
    },
    {
      id: "n-bnext-20260602-2", category: "media", date: "2026-06-02", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜硬體成本年降 40%！台大教授徐宏民：AI 雖突破自駕瓶頸，但我對機器人商業化更樂觀",
        en: "Bnext｜Hardware costs falling 40% a year: NTU's Winston Hsu on why he's even more bullish on robots than self-driving",
      },
      summary: {
        zh: "台大教授徐宏民指出，大語言模型的「泛化能力」突破了傳統自駕長尾效應瓶頸；電動車規模經濟讓機器人硬體成本以每年 40% 速度下降，餐飲與醫療照護等缺工產業將迎來服務型機器人應用爆發。相較自駕車的高風險開放環境，封閉場域的服務型機器人商業化前景更明確。對人機互動與 AI 實體化研究，這揭示通用推理能力與成本優化如何重塑產業落地路徑。",
        en: "NTU professor Winston Hsu argues LLMs' generalization breaks the long-tail bottleneck that has stalled self-driving, while EV-driven scale economies are cutting robot hardware costs ~40% per year — poised to unleash service robots in labor-short sectors like dining and healthcare. Unlike high-risk open-road autonomy, service robots in closed environments have a clearer path to commercialization. For HCI and embodied-AI research, it shows how general reasoning plus cost optimization reshape real-world deployment.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91120/ai-robot-commercialization-autonomous-driving",
    },
    {
      id: "n-bnext-20260610-1", category: "media", date: "2026-06-10", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜3 億用戶數據幹嘛分你！亞馬遜鎖緊生態圈「獨自升級」接招 AI 代理浪潮，它在提防什麼事？",
        en: "Bnext｜Why share 300M users' data? Amazon walls off its ecosystem to face the AI-agent wave alone",
      },
      summary: {
        zh: "亞馬遜自研購物代理 Rufus 在 2025 年吸引逾 3 億用戶、帶動 120 億美元增量收入，轉換率高出一般用戶 60%；它選擇封鎖第三方 AI 爬蟲、以數據護城河「獨自升級」，與沃爾瑪、Etsy 擁抱 OpenAI、Google 的開放路線形成對比。對電商與平台經濟研究而言，這是「閉門數據主導 vs. 開放生態整合」策略取捨的清楚案例，也揭示 AI 代理正從搜尋工具轉為購物決策中介。",
        en: "Amazon's in-house shopping agent Rufus drew over 300M users in 2025, drove $12B in incremental revenue, and converted 60% better than average — and Amazon chose to block third-party AI crawlers and 'upgrade alone' behind a data moat, contrasting with Walmart's and Etsy's open embrace of OpenAI and Google. For e-commerce and platform-economy research it is a clear case of the closed-data-dominance vs. open-ecosystem-integration trade-off, and shows AI agents shifting from search tools to shopping-decision intermediaries.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91210/amazon-ai-agent",
    },
    {
      id: "n-bnext-20260610-2", category: "media", date: "2026-06-10", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜搶你發問的第一刻！沃爾瑪的 AI 代理新盤算：不單挑改打群架，拚「鋪貨」進 ChatGPT、Gemini",
        en: "Bnext｜Win the moment you ask: Walmart's new agent play — stop going solo, get 'stocked' into ChatGPT and Gemini",
      },
      summary: {
        zh: "沃爾瑪從獨自開發轉為與 Google、OpenAI 合作，透過「通用商業協定」把自研代理 Sparky 嵌入 Gemini 與 ChatGPT，讓 AI 在回答消費者問題的同時精準推薦商品。其關鍵在於維持推薦的精準度與信任，而非盲目銷售。對電商與消費者行為研究，這與亞馬遜的封閉策略形成對照，凸顯購物起點正從搜尋框轉向對話框，且 AI 推薦的商業成敗繫於演算法信任度與「價值提供 vs. 過度商業化」的平衡。",
        en: "Walmart pivots from going solo to partnering with Google and OpenAI, embedding its Sparky agent into Gemini and ChatGPT via a 'universal commerce protocol' so AI recommends products while answering consumer questions — with success hinging on recommendation accuracy and trust rather than hard selling. A direct counterpoint to Amazon's closed strategy, it underscores that the shopping entry point is moving from the search box to the chat box, and that AI-recommendation success rests on algorithmic trust and the value-vs-overselling balance.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91209/walmart-ai-agent",
    },
    {
      id: "n-bnext-20260603-2", category: "media", date: "2026-06-03", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜微軟 Build 2026 懶人包｜你每天用的 Outlook 等辦公軟體，要從打開 App 變「呼叫代理」了",
        en: "Bnext｜Microsoft Build 2026 recap: your daily Outlook and office apps are shifting from 'open the app' to 'call the agent'",
      },
      summary: {
        zh: "微軟在 Build 2026 宣告從「應用程式時代」轉向「AI 代理時代」，執行長納德拉稱這是一次真正的平台轉移，推出 agent-first 平台 Project Solara、常駐型自動代理 Microsoft Scout 與量子晶片 Majorana 2，並把終端機、搜尋、編碼等工具重新設計以支援 agent 協作，同時保留身份追溯與權限控制。對 AI 代理與數位轉型研究而言，這是觀察軟體架構與企業治理如何因應「代理範式」重構的指標性案例。",
        en: "At Build 2026 Microsoft declared a shift from the 'app era' to the 'agent era' — CEO Nadella called it a genuine platform shift — unveiling the agent-first Project Solara platform, the always-on Microsoft Scout autopilot agent, and the Majorana 2 quantum chip, while redesigning terminal, search, and coding tools for agent collaboration with identity traceability and permission controls preserved. For AI-agent and digital-transformation research, it is a bellwether case of how software architecture and enterprise governance restructure around the 'agent paradigm.'",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91134/microsoft-project-solara-android-chip-to-cloud-ai-agent-platform",
    },
    {
      id: "n-bnext-20260613-1", category: "media", date: "2026-06-13", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜別盲目鑽研 Prompt！Claude 工程主管揭私房工作術：用不好 AI，問題出在你的想像力",
        en: "Bnext｜Stop obsessing over prompts: Anthropic's Claude engineering lead says the real gap is imagination, not tools",
      },
      summary: {
        zh: "Anthropic Claude Cowork 工程主管 Felix Rieseberg 主張，AI 用不好的瓶頸不在模型能力，而在使用者的想像力與工作流程設計。他提出三項心法：把問題「往上抽象一層」、把瑣事整段委派給 AI 並建立可重複使用的系統、依問題清晰度（而非難度）選模型，並從「審視輸出」轉為「評估結果」。對 AI 導入與知識工作研究而言，這把焦點從提示工程技巧移回到人類如何重構協作模式與任務分工。",
        en: "Felix Rieseberg, engineering manager on Anthropic's Claude Cowork, argues the bottleneck to using AI well lies not in model capability but in users' imagination and workflow design. He offers three practices: move 'up one abstraction layer', delegate whole chunks of tedious work to AI and build reusable systems, and pick models by problem clarity rather than difficulty — shifting from scrutinizing output to evaluating results. For AI-adoption and knowledge-work research, it redirects attention from prompt-engineering tricks back to how humans restructure collaboration patterns and task division.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91239/felix-rieseberg-ai-gap-in-imagination-not-tools",
    },
    {
      id: "n-bnext-20260612-1", category: "media", date: "2026-06-12", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜比同業早做一件事，momo 嘗到 AI 代理甜頭！商品推薦點擊率增 4 成、轉換率也提升 3 成",
        en: "Bnext｜One early move pays off: momo reaps AI-agent gains, +40% recommendation click-through and +30% conversion",
      },
      summary: {
        zh: "momo 因比同業更早建立完整的商品屬性資料庫，搭配向量搜尋與大語言模型強化的語意標籤導入「購物代理」，使商品推薦點擊率提升約 4 成、轉換率提升約 3 成。文章點出在代理驅動的電商時代，決勝關鍵不是炫目的 AI 功能，而是底層資料基礎建設；消費者互動正從關鍵字搜尋轉向語意理解，商品的「可被 AI 發現性」與信任成為新競爭要素。對電商與服務科學研究是少見的本土量化案例。",
        en: "By building comprehensive product-attribute databases earlier than rivals — paired with vector search and LLM-enriched semantic tags — momo's 'shopping agent' lifted recommendation click-through ~40% and conversion ~30%. The piece argues that in agent-driven commerce, foundational data infrastructure rather than flashy AI features determines success, as consumer interaction shifts from keyword search to semantic understanding and product 'AI-discoverability' and trust become new competitive factors. A rare local, quantified case for e-commerce and service-science research.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91211/momo-ai-agent",
    },
    {
      id: "n-bnext-20260612-2", category: "media", date: "2026-06-12", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜信用卡交給 AI 前的 16 個關鍵思考：免費的最貴？出包算誰？風險一次看",
        en: "Bnext｜16 questions before you let AI hold your credit card: is 'free' the costliest, and who's liable when it errs?",
      },
      summary: {
        zh: "本文集結四位專家、以 16 個關鍵問題剖析「代理式商務」的授權與責任邊界，核心原則是「誰授權，誰負責」——使用者對自己允許 AI 執行的行為仍負法律責任。文章提醒：免費 AI 服務的真實成本被補貼掩蓋、AI 推薦可能形成壟斷性的選擇控制、企業無法以「AI 說的」卸責（如 Air Canada 案），且共用 AI 帳號的資料外洩幾乎無法事後補救。對 AI 治理、消費者行為與數位倫理研究提供清楚的風險框架。",
        en: "Drawing on four experts, the article frames agentic commerce through 16 critical questions about authorization and liability, anchored on 'whoever authorizes bears responsibility' — users remain legally accountable for actions they let AI take. It warns that free AI's real costs are hidden by subsidies, that AI recommendations can create monopolistic control over choice, that firms cannot disclaim 'the AI said it' (as in the Air Canada case), and that data leaks from shared AI accounts are nearly impossible to remedy afterward. A clear risk framework for AI-governance, consumer-behavior, and digital-ethics research.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91213/ai-agent-qa",
    },
    {
      id: "n-bnext-20260618-1", category: "media", date: "2026-06-18", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜AI 代理愈多愈好？BCG 吳學霖打破迷思：千萬要避免「為了用 AI 而 AI」",
        en: "Bnext｜More AI agents, better? BCG's Wu Xuelin debunks the myth: avoid 'using AI for AI's sake'",
      },
      summary: {
        zh: "BCG X 大中華區負責人吳學霖指出，企業導入 AI 代理應避免「為了用 AI 而 AI」，須把資源聚焦在與核心競爭力最相關、價值最大的專案，並留意 tokens 的經濟成本。他強調當 CEO 親身領導轉型、跨部門檢視工作流程時，能產生個別部署無法達成的規模化效益。對 AI 導入策略與組織再設計研究，這提供了以價值創造為導向、需高層推動與組織變革配合的清楚判準。",
        en: "BCG X Greater China lead Wu Xuelin argues enterprises must avoid deploying AI agents 'for AI's sake', concentrating resources on the projects most tied to core competitiveness and highest value while watching token economics. He stresses that when CEOs personally lead transformation and review cross-departmental workflows, they unlock scale benefits unattainable through isolated deployments. For AI-adoption-strategy and org-redesign research, it offers a clear value-creation criterion requiring top-down drive and organizational change.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91257/taiwan-enterprises-ai-agents-adoption-impact-bcg-x-wu-xuelin",
    },
    {
      id: "n-bnext-20260617-1", category: "media", date: "2026-06-17", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜SpaceX 收購 Cursor！600 億美元交易背後，黃紹儒怎靠「GitHub 履歷」當上創始工程師？",
        en: "Bnext｜SpaceX acquires Cursor: behind the $60B deal, how a Taiwanese engineer landed a founding role via his 'GitHub résumé'",
      },
      summary: {
        zh: "AI 編程工具新創 Cursor 被 SpaceX 以 600 億美元收購，文章揭示三個觀察：25 歲執行長以「GitHub 作品」而非傳統履歷招募頂尖人才、台灣工程師黃紹儒靠開源專案成為早期創始工程師、以及 Cursor 被迫自建模型以擺脫對單一供應商的依賴。對人才管理與商業策略研究而言，這凸顯實作作品勝於履歷的甄選邏輯、新創的單一供應商風險，以及算力如何成為併購與融資的核心驅動力。",
        en: "AI-coding startup Cursor is acquired by SpaceX for $60B. The piece surfaces three observations: a 25-year-old CEO recruiting top talent via 'GitHub portfolios' rather than traditional résumés, a Taiwanese engineer who became a founding engineer through open-source work, and Cursor building its own models to escape single-supplier dependence. For talent-management and business-strategy research, it highlights portfolio-over-résumé selection logic, startup single-supplier risk, and how compute power has become a core driver of M&A and financing.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91262/cursor-spacex-600-billion-deal-taiwan-engineer",
    },
    {
      id: "n-bnext-20260616-1", category: "media", date: "2026-06-16", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜全公司都說「有在用 AI」，卻說不清楚改善了什麼？5 個問題找出企業轉型卡關在哪",
        en: "Bnext｜Everyone says they 'use AI' but can't say what improved? 5 questions to find where transformation stalls",
      },
      summary: {
        zh: "文章把企業 AI 應用區分為試驗、整合與「AI 原生」三層境界，強調真正的差距不在工具數量，而在部署哲學。企業需建立明確的工作角色定義、人類責任歸屬、沙箱測試、可觀測性儀表板與流程 KPI 等治理框架，才能從被動應用走向具信任基礎的智能組織。對數位轉型與治理研究的啟示是：轉型成敗取決於組織能否從「AI 能做什麼」轉向「我們授權什麼」的根本思維轉變。",
        en: "The article distinguishes three tiers of enterprise AI use — experimentation, integration, and 'AI-native' — arguing the real gap lies not in the number of tools but in deployment philosophy. Firms need governance frameworks: clear role definitions, human accountability, sandbox testing, observability dashboards, and process KPIs, to move from passive use to a trust-based intelligent organization. For digital-transformation and governance research, the lesson is that success hinges on shifting from 'what AI can do' to 'what we authorize.'",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91253/ai-native-enterprise-transformation-governance",
    },
    {
      id: "n-bnext-20260626-1", category: "media", date: "2026-06-26", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜Anthropic 產能暴增 8 倍有代價！Claude Code 主管揭管理痛點，AI 如何讓團隊陷入「孤島」危機？",
        en: "Bnext｜An 8× productivity surge has a cost: Anthropic's Claude Code lead on how AI pushes teams into 'silo' isolation",
      },
      summary: {
        zh: "Anthropic 工程師單季程式產出達過去平均的 8 倍，但「寫程式已不再是瓶頸」，審核負荷反而暴增。Claude Code 主管 Fiona Fung 提出「bad vs. sad」品質框架讓子團隊自訂標準，並坦言最大隱憂是高效協作讓工程師「幾乎不需跨組溝通」即可完成工作，效率之外也帶來孤立感與文化維繫難題，團隊因而啟動共食、共觀彼此工作方式的機制。對團隊與專案管理、知識管理及 AI 導入研究，這是 AI 重塑協作模式與組織認同的具體案例。",
        en: "Anthropic engineers' quarterly code output hit 8× the prior average, yet 'coding is no longer the bottleneck' — review load exploded instead. Claude Code lead Fiona Fung introduced a 'bad vs. sad' quality framework letting sub-teams set their own standards, and admits her biggest worry is that highly efficient collaboration lets engineers finish work with 'almost no cross-team communication', breeding isolation and cultural-cohesion challenges that prompted shared 'programming lunches'. A concrete case for team/project-management, knowledge-management, and AI-adoption research on how AI reshapes collaboration and organizational identity.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91335/claude-code-management-fiona-fung",
    },
    {
      id: "n-bnext-20260626-2", category: "media", date: "2026-06-26", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜AI 是革智慧工作者的命！緯創技術長：過去資料治理是給人看，AI 時代要給 AI 代理看",
        en: "Bnext｜AI is coming for knowledge workers: Wistron's CTO on data governance built for AI agents, not people",
      },
      summary: {
        zh: "緯創技術長沈慶堯指出，AI 不只取代勞力，更進入智慧工作領域，未來 AI 代理將參與產銷管理與研發設計等決策流程；資料治理因而進入 2.0——「過去是給人看的資料，AI 時代是給 AI 代理看的」，企業須將製造與領域知識轉化為 AI 可用格式，且不能只靠中央單位，需財務、生產、資材等現場專家共同系統化。文章強調真正的難題是組織文化調整、人才訓練與職務轉型。對數位轉型與知識管理研究，這提供「資料治理為 AI 重構」的清楚產業視角。",
        en: "Wistron CTO Shen Ching-yao argues AI is moving beyond manual labor into knowledge work, with AI agents set to join production-sales planning and R&D decisions — pushing data governance into a 2.0 era where 'data was once made for people; in the AI era it's made for AI agents.' Firms must convert manufacturing and domain knowledge into AI-usable formats and cannot rely on a central unit alone, requiring finance, production, and materials experts to systematize their know-how, while the real challenge is cultural change, talent training, and role transformation. A clear industry lens for digital-transformation and knowledge-management research on data governance restructured for AI.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91349/wistron-ai-factory-agent-smart-manufacturing",
    },
    {
      id: "n-bnext-20260626-3", category: "media", date: "2026-06-26", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜真人創作行銷效果是 AI 的 7 倍！iKala 程世嘉：「真實」將成企業新競爭優勢",
        en: "Bnext｜Human-made content markets 7× better than AI: iKala's Sega Cheng on 'authenticity' as the new competitive edge",
      },
      summary: {
        zh: "iKala 程世嘉指出，在 AI 內容氾濫下消費者會下意識迴避缺乏溫度的資訊，真人創作內容的行銷效果是 AI 生成的 7 倍，使「真實體驗與信任」成為稀缺資產；他並預測 2030 年前全球企業將投入 2,500 億美元驗證內容與交易是否為 AI 偽造。當交易從搜尋轉向 AI 代理模式，企業恐失去交易數據與流量入口，回歸品牌定位與真實經營反而成為強大競爭優勢。對電商、消費者行為與數位服務研究，這提供「真實性溢價」與 AI 時代信任經濟的清楚切入點。",
        en: "iKala's Sega Cheng argues that amid an AI-content flood consumers subconsciously avoid information that lacks warmth, with human-made content marketing 7× more effectively than AI-generated content — making 'authentic experience and trust' a scarce asset; he predicts global firms will spend $250B by 2030 verifying whether content and transactions are AI-faked. As commerce shifts from search to AI agents and firms risk losing transaction data and traffic entry points, returning to brand positioning and authentic operations becomes a powerful edge. A clear entry point for e-commerce, consumer-behavior, and digital-service research on the 'authenticity premium' and the trust economy in the AI era.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91345/ai_taiwan_2026_ikala_keynote_uuixsnru",
    },
    {
      id: "n-bnext-20260629-1", category: "media", date: "2026-06-29", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜代理型商務贏家不是電商，而是購物中心！百貨跨業態整合才是 AI 時代護城河",
        en: "Bnext｜The winners of agentic commerce aren't e-tailers but shopping malls: cross-format integration is the AI-era moat",
      },
      summary: {
        zh: "文章主張在代理式商務時代，最適合與 AI 代理合作的不是純電商，而是具備跨業態整合能力的百貨與購物中心——它們能同時滿足實體體驗與線上需求，並以結構化資料、跨業態展示與品牌信任建立難以複製的護城河。對電商與服務科學研究而言，這把競爭焦點從交易效率轉向「資料結構化程度」與「跨通路體驗整合」，並提醒傳統零售把 AI 代理視為轉型機遇而非威脅。",
        en: "The piece argues that in agentic commerce the best partners for AI agents are not pure e-tailers but department stores and malls with cross-format integration — able to serve both physical experience and online demand while building a hard-to-copy moat through structured data, multi-format display, and brand trust. For e-commerce and service-science research it shifts the competitive focus from transaction efficiency to degree of data structuring and cross-channel experience integration, reframing AI agents as a transformation opportunity rather than a threat for traditional retail.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91369/agentic-commerce-department-store",
    },
    {
      id: "n-bnext-20260629-2", category: "media", date: "2026-06-29", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜不只是砸錢雇傭兵！Meta AI 負責人汪滔：我們放手讓天才發揮，要打造未來的「代理經濟」",
        en: "Bnext｜More than hiring mercenaries: Meta AI chief Alexandr Wang on empowering talent to build the coming 'agent economy'",
      },
      summary: {
        zh: "Meta AI 負責人汪滔指出，建構「代理經濟」生態系不能只靠砸錢招募，更要賦予頂尖人才充足算力與自主空間，並以「讓聰明人告訴我們該怎麼做」取代命令式管理；其願景是讓消費者與企業的 AI 代理自動媒合與交易，形成全新經濟體系。對人才管理與組織創新研究而言，這是一個賦權與資源配置勝過直接管控的具體論點，也勾勒了 AI 代理重塑市場交易結構的長期圖像。",
        en: "Meta AI chief Alexandr Wang argues that building an 'agent economy' ecosystem takes more than throwing money at recruiting — it requires giving top talent ample compute and autonomy, replacing command-style management with 'let smart people tell us what to do' — with a vision of consumer and enterprise AI agents auto-matching and transacting to form a new economic system. For talent-management and organizational-innovation research it is a concrete argument that empowerment and resource allocation beat direct control, while sketching a long-run picture of AI agents reshaping market transaction structures.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91106/alexandr-wang-ai-agent-meta",
    },
    {
      id: "n-bnext-20260630-1", category: "media", date: "2026-06-30", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜AI 讓寫程式不再是瓶頸，然後呢？Spotify 工程副總：判斷什麼是「好點子」，變成管理大難題",
        en: "Bnext｜AI removes the coding bottleneck — now what? Spotify's VP of engineering: judging what's a 'good idea' becomes the hard management problem",
      },
      summary: {
        zh: "Spotify 工程副總指出，AI 開發工具並未降低工程紀律需求，反而提高組織對驗證與測試的標準；當程式碼生成不再是瓶頸，真正的限制移轉到產品決策與價值判斷。對管理者的啟示是把評估焦點從「產出多少程式碼」重新定位到「創造多少使用者價值」，並建立從需求、測試到成果的完整連結體系——企業要發揮 AI 潛能，得先整理組織脈絡與工程基礎，而非單純追求工具導入。對團隊與專案管理、知識工作研究是清楚的決策瓶頸轉移案例。",
        en: "Spotify's VP of engineering argues AI dev tools haven't lowered the need for engineering discipline — they raise the bar for validation and testing. Once code generation stops being the constraint, the real bottleneck shifts to product decisions and value judgment, so managers should refocus measurement from 'how much code' to 'how much user value', building a full chain from requirements to tests to outcomes. Unlocking AI's potential means first ordering organizational context and engineering foundations rather than chasing tool adoption — a clear case for team/project-management and knowledge-work research on where the decision bottleneck moves.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91376/spotify-ai-engineering-foundation-validation-loops-product-decisions",
    },
    {
      id: "n-bnext-20260630-2", category: "media", date: "2026-06-30", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜Meta 傳全面禁工程師用 Claude Code、Codex！擔心自家模型被「蒸餾」污染",
        en: "Bnext｜Meta reportedly bans engineers from Claude Code and Codex over fears of 'distillation' contaminating its own model",
      },
      summary: {
        zh: "Meta 傳對 Applied AI 部門工程師祭出禁令，禁用 Anthropic 的 Claude Code 與 OpenAI 的 Codex，擔心競爭對手模型的輸出會透過日常開發流程無意間混入自家 Llama 的訓練資料，形成模型蒸餾風險。此舉反映 AI 產業智財權保護戰升溫，企業開始把模型輸出、訓練資料與開發流程視為核心競爭資產。對 AI 治理與資訊安全研究而言，這凸顯組織須在創新效率與技術保密間建立內部工具使用規範，並重新評估對第三方服務的依賴與無意間的資料外洩風險。",
        en: "Meta has reportedly banned its Applied AI engineers from using Anthropic's Claude Code and OpenAI's Codex, fearing competitors' model outputs could inadvertently seep into Llama's training data through daily development and create a 'distillation' risk. The move reflects an escalating IP-protection battle in AI, with firms treating model outputs, training data, and development workflows as core competitive assets. For AI-governance and information-security research, it highlights the need for internal tool-use policies that balance innovation against technical secrecy, and a reassessment of third-party dependence and inadvertent data-leakage risk.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91380/meta-bans-claude-code-codex",
    },
    {
      id: "n-bnext-20260702-1", category: "media", date: "2026-07-02", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜台灣大資訊長：逆分工時代到來！「超人計畫」為框架，解密內部 4 個 AI 嵌入場景",
        en: "Bnext｜Taiwan Mobile's CIO: the age of 'reverse division of labor' — the 'Superman Project' and four internal AI-embedding scenarios",
      },
      summary: {
        zh: "台灣大資訊長蔡祈岩提出「AI 讓專才回歸通才」的逆分工觀點：當傳統分工走到瓶頸，企業應把重複性工作交給 AI 代理，釋放員工投入需要人類判斷與創意的任務。「超人計畫」從個人工具升級到組織級 AI Agent 部署，已在客服與門市見效（客服締約率提高 40%）。對數位轉型與組織再設計研究，這是系統性 AI 導入如何重塑運營架構的可量化本土案例。",
        en: "Taiwan Mobile CIO Tsai Chi-yen frames a 'reverse division of labor': as traditional specialization hits its ceiling, firms should hand repetitive work to AI agents and free employees for judgment- and creativity-intensive tasks. The 'Superman Project' scales from personal tools to organization-level AI-agent deployment, already lifting customer-service close rates by 40% in call centers and stores. A quantified local case for digital-transformation and org-redesign research on how systematic AI adoption reshapes operating structures.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91390/taiwan-mobile-cio-reverse-division-of-labor-ai-agent",
    },
    {
      id: "n-bnext-20260702-2", category: "media", date: "2026-07-02", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜電信業 AI 轉型第一步不是買 GPU！遠傳資訊長胡德民：先解高頻問題，1,000 人用就是董事會的成就",
        en: "Bnext｜AI transformation doesn't start with buying GPUs: FarEasTone's CIO on solving high-frequency problems first, with 1,000 users as the real KPI",
      },
      summary: {
        zh: "遠傳資訊長胡德民主張「AI 伺服器、GPU 可以買，但 AI 的成效與轉型不能買」，企業應從解決第一線高頻問題切入，而非盲目投資硬體。他把衡量成功的指標定為實際採用人數（如 1,000 名員工使用），而非技術投入規模。對數位轉型研究的啟示是：成功的 AI 導入需搭配組織流程改造與資料治理，技術實施與組織變革必須並行。",
        en: "FarEasTone CIO Hu De-min argues that 'you can buy AI servers and GPUs, but you can't buy AI's impact or transformation' — firms should start from frontline high-frequency problems rather than blindly investing in hardware. He redefines the success metric as actual adoption (e.g., 1,000 employees using a tool) instead of the scale of technical spend. For digital-transformation research, the lesson is that effective AI adoption must pair with process redesign and data governance, running technology and organizational change in parallel.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91389/fet-ai-transformation-high-frequency-problems",
    },
    {
      id: "n-bnext-20260701-1", category: "media", date: "2026-07-01", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜從客服到數位員工：宏華國際如何用 AI Agent 幫企業把握每一筆商機？",
        en: "Bnext｜From customer service to digital employee: how Honghwa International uses AI Agents to help firms capture every opportunity",
      },
      summary: {
        zh: "宏華國際以十餘年客服經驗，把服務場景與行業知識模組化，打造能理解情緒與情境、支援全通路與多語（國、台、英）24 小時服務的 AI 客服代理，降低企業導入門檻與試錯成本。文章點出 AI 客服成敗的關鍵不在技術本身，而在對真實服務情境的掌握——「真實世界的客服互動很少按既定腳本進行」。對電商、服務科學與顧客體驗研究，這是把領域知識轉為 AI 競爭優勢、並將客服代理延伸為內部員工支援基礎設施的具體本土案例。",
        en: "Drawing on over a decade of customer-service experience, Honghwa International modularizes service scenarios and industry know-how to build AI service agents that grasp emotion and context and deliver 24/7 omnichannel, multilingual (Mandarin, Taiwanese, English) support — lowering enterprises' adoption barriers and trial-and-error costs. The piece argues the decisive factor is not the technology itself but mastery of real service contexts — 'real-world customer interactions rarely follow a fixed script.' A concrete local case for e-commerce, service-science, and customer-experience research on turning domain knowledge into AI advantage and extending service agents into internal employee-support infrastructure.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91367/honghwa",
    },
    {
      id: "n-bnext-20260630-3", category: "media", date: "2026-06-30", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜PChome 傳遭駭！網家：與母公司系統無直接關聯，拍付國際證實收到勒索",
        en: "Bnext｜PChome allegedly hacked: NetFamily says no direct link to parent systems while Pi Pay confirms extortion demand",
      },
      summary: {
        zh: "勒索軟體組織 Settra 宣稱自 6 月 10 日起入侵 PChome，公開 12 頁滲透報告、聲稱取得 102GB 資料（含客戶紀錄、員工憑證、API 文件與稽核報告）與「350 萬名用戶」個資；網家淡化影響、稱與母公司系統無直接關聯，子公司拍付國際則證實收到勒索並報案啟動鑑識。值得注意的是不同威脅情報平台記錄的受害人數落差極大（350 萬 vs. 3.5 萬），凸顯攻擊者宣稱在官方調查前不應照單全收。對資訊安全與隱私研究，這是勒索勒贖手法、集團跨子公司資料匯聚風險與獨立鑑識驗證必要性的清楚本土案例。",
        en: "Ransomware group Settra claims to have breached PChome since June 10, publishing a 12-page infiltration report and asserting access to 102GB of data (customer records, employee credentials, API docs, audit reports) and personal data on '3.5 million users'; PChome downplays the impact as not directly linked to parent systems, while subsidiary Pi Pay confirms an extortion demand, has reported it, and launched forensics. Notably, threat-intel platforms logged wildly different victim counts (3.5M vs. 35K), underscoring that attacker claims should not be taken at face value before official investigation. A clear local case for information-security and privacy research on ransomware-extortion tactics, cross-subsidiary data-aggregation risk, and the necessity of independent forensic verification.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91383/pchome-settra-ransomware-data-breach",
    },
    {
      id: "n-bnext-20260710-1", category: "media", date: "2026-07-10", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜在公司推 AI，同事一週就打回原形？他用「3 層知識庫」把流程變成按鈕",
        en: "Bnext｜Pushing AI at work but colleagues revert within a week? A three-layer knowledge base turns workflows into buttons",
      },
      summary: {
        zh: "與其訓練全體員工寫提示詞（多半一週後就打回原形），不如把複雜度抽象化為「按鈕」。文章拆解一套三層知識庫：參考文件轉為 Markdown、把步驟流程寫成 AI 可執行的行動工作流、再封裝成員工可直接下載部署的技能庫，讓使用者只看到完成的流程而看不到技術。對知識管理與 AI 導入研究的意涵在於：導入成敗取決於前置的知識基礎建設與版本治理，而非使用者的提示工程技巧。",
        en: "Rather than training every employee to write prompts — an approach that usually collapses within a week — the piece argues for abstracting complexity into buttons. It unpacks a three-layer knowledge base: reference documents converted to Markdown, step-by-step action workflows that AI executes, and a skill library employees can download and deploy directly, so users see only a completed workflow rather than the underlying technology. For knowledge-management and AI-adoption research, the implication is that success rests on upfront knowledge infrastructure and version governance, not on users' prompt-engineering skill.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91473/ai-adoption-knowledge-base-skill-library",
    },
    {
      id: "n-bnext-20260708-1", category: "media", date: "2026-07-08", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜蘋果夥伴塔塔爆 20 萬份檔案外洩！不只 iPhone 提前見光，更致命的危機才剛開始",
        en: "Bnext｜Apple partner Tata leaks 200,000 files: the leaked iPhone specs are the least of it",
      },
      summary: {
        zh: "蘋果印度製造夥伴塔塔電子外洩 204,341 份機密檔案，包含未發表的 iPhone 18 Pro 規格與供應商資訊。文章直指供應鏈分散化的策略張力——「印度的組裝能力提升，並不等於具備成熟的供應鏈安全管理」：分散生產雖降低地緣政治風險，卻換來各法域資安標準不一的破口。對資訊安全與策略研究而言，這揭示第三方供應商漏洞是分散式製造生態的系統性風險，未來高科技代工的競爭關鍵將從成本與產能轉向資安體系與智財保護機制。",
        en: "Tata Electronics, Apple's Indian manufacturing partner, leaked 204,341 confidential files including unreleased iPhone 18 Pro specifications and supplier information. The article names the strategic tension in supply-chain diversification — 'growth in India's assembly capability does not equal mature supply-chain security management' — as decentralized production trades geopolitical resilience for exposure to fragmented security standards across jurisdictions. For information-security and strategy research, it shows third-party vendor vulnerability as a systemic risk in distributed manufacturing ecosystems, shifting the basis of contract-manufacturing competition from cost and volume toward security systems and IP protection.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91447/tata-hacker-iphone-18-supply-chain",
    },
    {
      id: "n-bnext-20260706-1", category: "media", date: "2026-07-06", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜帶人比寫程式更難！TPU 之父曝「黃仁勳管理學」：為何拋棄一對一會談，可有效降低組織內鬥？",
        en: "Bnext｜Leading people is harder than coding: the TPU inventor on why dropping one-on-ones curbs organizational infighting",
      },
      summary: {
        zh: "TPU 發明人、Groq 創辦人 Jonathan Ross 指出，取消一對一會談、改以群體同步溝通，能讓所有人聽到高度一致的訊息，避免詮釋分歧滋生派系鬥爭；他並主張領導者應從徵詢共識（「你覺得呢？」）轉為宣告意圖（「我打算……」），在保留正當回饋空間的同時建立團隊當責。文章結論是有效管理須順應領導者性格與團隊組成，而非套用公式——當 AI 讓寫程式商品化，判斷力與方向清晰度才是新的領導瓶頸。對團隊與專案管理、組織創新研究，這是資訊透明度如何影響組織政治的具體論點。",
        en: "TPU inventor and Groq founder Jonathan Ross argues that scrapping one-on-one meetings in favor of group-synchronous communication makes everyone hear remarkably consistent information, preventing divergent interpretations from fueling factionalism. He also urges leaders to shift from seeking consensus ('What do you think?') to declaring intent ('I intend to…'), preserving room for legitimate feedback while building team ownership. Effective management, he concludes, adapts to a leader's temperament and team composition rather than applying formulas — and as AI commoditizes coding, judgment and directional clarity become the new leadership bottleneck. A concrete argument for team/project-management and organizational-innovation research on how information transparency shapes organizational politics.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91431/jonathan-ross-groq-management-lessons",
    },
    {
      id: "n-bnext-20260714-1", category: "media", date: "2026-07-14", pinned: false, tags: ["ai", "neuro"],
      title: {
        zh: "數位時代｜AI 也有雙重人格？Anthropic 拆解 30 萬則對話揭 AI「回話風格」，為何說英文的 Claude 比中文更刻薄？",
        en: "Bnext｜Does AI have a split personality? Anthropic dissects 300,000 conversations to map Claude's 'response style'",
      },
      summary: {
        zh: "Anthropic 分析逾 30 萬則對話，把 3,000 多種價值觀壓縮成四條可量化軸線（順從 vs. 謹慎、溫暖 vs. 嚴謹、深度 vs. 簡潔、坦率 vs. 執行導向），發現不同模型代表不同「互動風格」而非單純能力差異，且英文回覆比中文更偏謹慎，推翻「中文比較溫和」的直覺；但四軸僅能解釋約 15% 的回覆變異。對人機互動與認知科學研究而言，這提供了把 AI 對話風格操作化、量化並跨語言比較的清楚方法論範例，也提醒模型選擇其實是在選「互動風格」。",
        en: "Anthropic analyzed over 300,000 conversations, compressing 3,000+ values into four measurable axes (deference vs. caution, warmth vs. rigor, depth vs. brevity, candor vs. execution-focus), finding that different models embody distinct 'interaction styles' rather than mere capability gaps — and that English replies skew more cautious than Chinese, overturning the intuition that Chinese is gentler; yet the four axes explain only ~15% of response variance. For human-AI interaction and cognitive-science research, it offers a clear methodological template for operationalizing, quantifying, and cross-linguistically comparing AI conversational style, and a reminder that choosing a model means choosing an interaction style.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91503/anthropic-claude-value-axes",
    },
    {
      id: "n-bnext-20260714-2", category: "media", date: "2026-07-14", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜消費者問 ChatGPT，你的品牌會出現嗎？7 個動作讓 AI 看得見你、有信心推薦你",
        en: "Bnext｜When consumers ask ChatGPT, does your brand show up? 7 moves to make AI see and confidently recommend you",
      },
      summary: {
        zh: "當 AI 成為新的消費搜尋入口，品牌能否被推薦取決於「生成式引擎優化（GEO）」而非傳統 SEO。文章引數據指出 ChatGPT 導流轉換率達 15.9%、遠高於自然搜尋的 1.76%，並預估自然搜尋流量至 2028 年恐減半；接著提出七個具體動作——結構化品牌與商品資料、經營評論、自建 AI 導購、整合 CDP、測試完整 AI 購買流程、每季監測 AI 如何描述品牌。對電商、行銷與消費者行為研究而言，這把競爭焦點從「搜尋排名」移到「AI 可發現性與推薦信任」，並凸顯成敗繫於組織是否能持續監測與優化。",
        en: "As AI becomes the new consumer search entry point, whether a brand gets recommended hinges on Generative Engine Optimization (GEO) rather than traditional SEO. The piece cites a 15.9% conversion rate from ChatGPT-referred traffic — far above natural search's 1.76% — and warns natural-search traffic could halve by 2028, then lays out seven concrete moves: structure brand and product data, manage reviews, deploy an owned AI shopping assistant, integrate a CDP, test full AI purchase workflows, and monitor quarterly how AI describes the brand. For e-commerce, marketing, and consumer-behavior research it shifts the competitive focus from search ranking to AI-discoverability and recommendation trust, underscoring that success rests on sustained organizational monitoring and optimization.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91505/geo-7-steps-ai-recommend-brand",
    },
    {
      id: "n-bnext-20260710-2", category: "media", date: "2026-07-10", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜OpenAI 發表 GPT-5.6、ChatGPT Work！新模型效率大升級，三大版本與辦公代理一次看",
        en: "Bnext｜OpenAI unveils GPT-5.6 and ChatGPT Work: an efficiency leap with three model tiers and an office agent",
      },
      summary: {
        zh: "OpenAI 讓 GPT-5.6 全面上市並推出辦公型 AI 代理「ChatGPT Work」，主軸是「效率」——旗艦 Sol 在代理式程式撰寫的 token 效率提升 54%，另有均衡版 Terra 與輕量版 Luna 供成本取捨。ChatGPT Work 定位為「多步驟執行介面」，使用者只需指定想要的成果，系統即整合 Slack、Teams、Google Drive、SharePoint 等平台自動彙整資料並產出交付物，並保留人工核可關卡。對企業 AI 代理與數位轉型研究而言，這是「從指定步驟到指定成果」的介面典範轉移，也提供分層模型選型與人機監督機制的具體觀察點。",
        en: "OpenAI brought GPT-5.6 to general availability and launched the office AI agent 'ChatGPT Work', with efficiency as the theme — flagship Sol improves token efficiency in agentic programming by 54%, alongside the balanced Terra and lightweight Luna for cost trade-offs. ChatGPT Work is positioned as a 'multi-step execution interface': users specify desired outcomes rather than steps, and the system integrates Slack, Teams, Google Drive, and SharePoint to synthesize data and produce deliverables while preserving human approval checkpoints. For enterprise-AI-agent and digital-transformation research, it marks an interface shift from specifying steps to specifying outcomes, and a concrete vantage point on tiered model selection and human-in-the-loop oversight.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91477/openai-gpt-5-6-chatgpt-work-launch",
    },
    {
      id: "n-bnext-20260715-1", category: "media", date: "2026-07-15", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜Figma 畫布退位！YC 設計主管揭 Claude 工作流：當 AI 包辦技術，設計師如何靠「策展力」勝出？",
        en: "Bnext｜Figma steps aside: YC's head of design on a Claude workflow — as AI handles the craft, designers win on 'curation'",
      },
      summary: {
        zh: "YC 設計主管 Eve Bouffard 展示以 Claude 等 AI 代理重塑設計流程：當技術執行被自動化，設計師的重心從工具熟練度轉向「策展力」——品味、判斷與清楚表達美學方向的能力。對 UX／設計與人機互動研究的意涵是，技能門檻消融後，脈絡豐富的協作與策略判斷比軟體操作更關鍵，設計團隊的人才標準與工作分工也隨之重構。",
        en: "YC head of design Eve Bouffard demonstrates reshaping design workflows with AI agents like Claude: once technical execution is automated, designers' focus shifts from tool mastery to 'curation' — taste, judgment, and the ability to articulate aesthetic direction. For UX/design and human-computer-interaction research, it implies that as skill barriers dissolve, context-rich collaboration and strategic judgment matter more than software proficiency, reshaping design-team talent criteria and division of labor.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91506/yc-designer-eve-bouffard-ai-workflow",
    },
    {
      id: "n-bnext-20260713-1", category: "media", date: "2026-07-13", pinned: false, tags: ["ai"],
      title: {
        zh: "數位時代｜Meta 出租 AI 算力，外界嗅出「AI 投資放緩」警訊？祖克柏揭背後原因",
        en: "Bnext｜Meta leases out AI compute — a sign of an 'AI investment slowdown'? Zuckerberg explains the real reason",
      },
      summary: {
        zh: "Meta 計畫透過雲端服務出租運算資源，引發科技巨頭 AI 算力過剩的疑慮；執行長祖克柏澄清此為策略性多角化而非過度投資，並以約為對手四分之一的價格推出 API 以擴大開發者採用，消息一出牽動半導體股大幅震盪。對商業策略與平台經濟研究而言，這標誌產業轉折點——巨頭須從無止境擴張投資轉為證明鉅額資本支出的實質回報，也揭示算力正從稀缺資產走向可租賃的平台商品。",
        en: "Meta plans to lease computing resources via a cloud service, sparking concerns of AI compute surplus among tech giants; CEO Zuckerberg clarified it is strategic diversification rather than over-investment, pricing its APIs at roughly a quarter of rivals' rates to expand developer adoption — news that triggered sharp semiconductor-stock volatility. For business-strategy and platform-economy research it marks an inflection point where giants must show tangible returns on staggering capex rather than endless expansion, and signals compute shifting from a scarce asset toward a leasable platform commodity.",
      },
      image: "",
      url: "https://www.bnext.com.tw/article/91484/meta-cloud-service-computing-power",
    },
  ],
};
