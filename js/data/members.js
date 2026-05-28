/* =============================================================================
 * members.js — 團隊成員 / Team members
 * 新增成員：在對應 group.members 陣列加入一筆物件即可。
 * Add a member by appending an object to the right group's `members` array.
 *
 * 欄位 / Fields:
 *   id, name{zh,en}, title{zh,en}, photo (留空顯示灰色頭像 / "" = gray avatar),
 *   interests{zh:[],en:[]}, bio{zh,en}, email, scholar, website,
 *   currentPosition{zh,en} (畢業成員 / alumni only)
 *
 * group.layout 決定卡片顯示哪些欄位 / controls which fields a card shows:
 *   "full"    指導教授・博後・博士候選人（完整學術資訊）
 *   "compact" 碩士成員（頭像、姓名、Email）
 *   "alumni"  畢業成員（頭像、姓名、Email、目前動向）
 *
 * ⚠ 英文姓名與 Email 多為暫定 placeholder，請依實際資料更新。
 * ⚠ English names / emails are placeholders — please verify and update.
 * ========================================================================== */
window.DATA = window.DATA || {};

window.DATA.members = {
  groups: [
    {
      id: "advisor",
      layout: "full",
      label: { zh: "指導教授", en: "Principal Investigator" },
      members: [
        {
          id: "hsu-shih-chieh",
          name: { zh: "徐士傑", en: "Shih-Chieh Hsu" },
          title: { zh: "教授 兼 系主任", en: "Professor & Department Chair" },
          photo: "assets/members/hsu-shih-chieh.jpg",
          interests: {
            zh: ["人工智慧與數位轉型", "神經科學與人機互動", "資訊安全", "電子商務與數位服務", "團隊與專案管理", "哈佛教學個案", "fsQCA"],
            en: ["AI & Digital Transformation", "Neuroscience & HCI", "Information Security", "E-Commerce & Digital Services", "Team & Project Management", "Harvard Teaching Cases", "fsQCA"],
          },
          bio: {
            zh: "徐士傑主任為 Jack Lab 指導教授，研究橫跨人工智慧與數位轉型、神經科學與人機互動、資訊安全、電子商務與數位服務、團隊與專案管理及模糊集質性比較分析，並長期投入哈佛教學個案與研究人才培育。",
            en: "Prof. Shih-Chieh Hsu, Chair of the department, leads Jack Lab with research spanning AI & digital transformation, neuroscience & HCI, information security, e-commerce & digital services, team & project management, and fuzzy-set QCA, with long-term dedication to Harvard teaching cases and mentoring researchers.",
          },
          email: "",
          scholar: "",
          website: "",
        },
      ],
    },
    {
      id: "postdoc",
      layout: "full",
      label: { zh: "博士後研究員", en: "Postdoctoral Researcher" },
      members: [
        {
          id: "jacob-cheng",
          name: { zh: "鄭鈞", en: "Jacob Cheng" },
          title: { zh: "博士後研究員", en: "Postdoctoral Researcher" },
          photo: "assets/members/jacob-cheng.jpg",
          interests: {
            zh: ["神經科學", "服務科學", "AI 人機互動", "電子商務與數位平台"],
            en: ["Neuroscience", "Service Science", "AI & HCI", "E-Commerce & Digital Platforms"],
          },
          bio: {
            zh: "鄭鈞博士為 Jack Lab 博士後研究員，研究聚焦於神經科學、服務科學、AI 人機互動以及電子商務與數位平台等議題，運用腦波、眼動等神經科學方法，探討使用者在數位服務情境中的認知反應與行為決策。",
            en: "Dr. Jacob Cheng is a postdoctoral researcher at Jack Lab, focusing on neuroscience, service science, AI-driven human–computer interaction, and e-commerce & digital platforms. He uses EEG and eye-tracking methods to study cognitive responses and behavioral decisions in digital-service contexts.",
          },
          email: "",
          scholar: "",
          website: "",
        },
      ],
    },
    {
      id: "phd",
      layout: "full",
      label: { zh: "博士候選人", en: "Ph.D. Candidate" },
      members: [
        {
          id: "gary-yeh",
          name: { zh: "葉欲禾", en: "Yeh Yu-Ho (Gary)" },
          title: { zh: "博士候選人", en: "Ph.D. Candidate" },
          photo: "assets/members/gary-yeh.jpg",
          interests: {
            zh: ["AI 與數位轉型", "永續行動", "AI 人機互動", "交通行為", "fsQCA"],
            en: ["AI & Digital Transformation", "Sustainable Action", "AI & HCI", "Transportation Behavior", "fsQCA"],
          },
          bio: {
            zh: "葉欲禾為 Jack Lab 博士候選人，研究興趣涵蓋 AI 與數位轉型、永續行動、AI 人機互動、交通行為以及模糊集質性比較分析（fsQCA）。研究關注新興科技如何重塑使用者的決策與行為，並運用 fsQCA 探討條件組態對行為結果的影響。",
            en: "Gary Yu-Ho Yeh is a Ph.D. candidate at Jack Lab, with interests in AI & digital transformation, sustainable action, AI-driven human–computer interaction, transportation behavior, and fuzzy-set Qualitative Comparative Analysis (fsQCA). His work examines how emerging technologies reshape users' decisions and behaviors, using fsQCA to identify configurations of conditions that lead to behavioral outcomes.",
          },
          email: "",
          scholar: "",
          website: "",
        },
      ],
    },
    {
      id: "masters",
      layout: "compact",
      label: { zh: "碩士成員", en: "Master's Students" },
      members: [
        { id: "lin-jing-wei", name: { zh: "林京緯", en: "Lin Ching-Wei" }, photo: "assets/members/lin-jing-wei.jpg", email: "Brian91100795@gmail.com" },
        { id: "lin-chen-wei", name: { zh: "林宸煒", en: "Lin Chen-Wei" }, photo: "assets/members/lin-chen-wei.jpg", email: "linwilson671@gmail.com" },
        { id: "tseng-shu-huan", name: { zh: "曾書桓", en: "Zeng Shu-Huan" }, photo: "assets/members/tseng-shu-huan.jpg", email: "s392983978@gmail.com" },
        { id: "wu-cheng-chien", name: { zh: "吳呈堅", en: "Wu Cheng-Jian" }, photo: "assets/members/wu-cheng-chien.jpg", email: "chengjianwu678@gmail.com" },
        { id: "kung-sung-yu", name: { zh: "孔崧羽", en: "Kong Song-Yu" }, photo: "assets/members/kung-sung-yu.jpg", email: "kongsongyu9012@gmail.com" },
        { id: "li-yu-chen", name: { zh: "李瑀蓁", en: "Lee Yu-Chen" }, photo: "assets/members/li-yu-chen.jpg", email: "lyzchry1771@gmail.com" },
        { id: "hsu-chih-hao", name: { zh: "徐稚皓", en: "Hsu Chih-Hao" }, photo: "assets/members/hsu-chih-hao.jpg", email: "howard120330@gmail.com" },
        { id: "su-wen-feng", name: { zh: "蘇彣丰", en: "Su Wen-Feng" }, photo: "assets/members/su-wen-feng.jpg", email: "wenfeng.taipei@gmail.com" },
      ],
    },
    {
      id: "alumni",
      layout: "alumni",
      label: { zh: "畢業成員", en: "Alumni" },
      members: [
        { id: "liu-kuan-hung", name: { zh: "劉冠宏", en: "Liu Guan-Hong" }, photo: "assets/members/liu-kuan-hung.jpg", email: "zxc1030123@gmail.com", currentPosition: { zh: "", en: "" } },
        { id: "huang-shu-han", name: { zh: "黃舒韓", en: "Huang Shu-Han" }, photo: "assets/members/huang-shu-han.jpg", email: "", currentPosition: { zh: "", en: "" } },
        { id: "chang-chan-chia", name: { zh: "張展嘉", en: "Chang Chan-Chia" }, photo: "assets/members/chang-chan-chia.jpg", email: "alex20010122@gmail.com", currentPosition: { zh: "", en: "" } },
        { id: "chien-yun-ting", name: { zh: "簡筠庭", en: "Chien Yun-Ting" }, photo: "", email: "", currentPosition: { zh: "", en: "" } },
        { id: "yang-chu-chun", name: { zh: "楊筑鈞", en: "Yang Chu-Chun" }, photo: "", email: "", currentPosition: { zh: "", en: "" } },
        { id: "hsu-te-yen", name: { zh: "徐德諺", en: "Hsu Te-Yen" }, photo: "", email: "", currentPosition: { zh: "", en: "" } },
      ],
    },
  ],
};
