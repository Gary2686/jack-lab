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
          photo: "",
          interests: {
            zh: ["人工智慧與數位轉型", "神經科學與人機互動", "服務科學", "個案研究", "fsQCA"],
            en: ["AI & Digital Transformation", "Neuroscience & HCI", "Service Science", "Case Research", "fsQCA"],
          },
          bio: {
            zh: "徐士傑主任為 Jack Lab 指導教授，研究橫跨人工智慧與數位轉型、神經科學與人機互動、服務科學及模糊集質性比較分析。致力於將嚴謹的研究方法與企業管理實務結合，並長期投入個案教學與研究人才培育。（完整學術簡介待補充）",
            en: "Prof. Shih-Chieh Hsu, Chair of the department, leads Jack Lab with research spanning AI & digital transformation, neuroscience & HCI, service science, and fuzzy-set QCA. He combines rigorous methodology with management practice, and has long been dedicated to case-based teaching and mentoring researchers. (Full biography to be added.)",
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
          photo: "",
          interests: {
            zh: ["人工智慧應用", "數位轉型", "資訊系統"],
            en: ["AI applications", "Digital transformation", "Information systems"],
          },
          bio: {
            zh: "鄭鈞博士為 Jack Lab 博士後研究員，研究聚焦於人工智慧應用與數位轉型相關議題。（學術簡介待補充）",
            en: "Dr. Jacob Cheng is a postdoctoral researcher at Jack Lab, focusing on AI applications and digital transformation. (Biography to be added.)",
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
          photo: "",
          interests: {
            zh: ["神經科學與人機互動", "使用者行為", "fsQCA"],
            en: ["Neuroscience & HCI", "User behavior", "fsQCA"],
          },
          bio: {
            zh: "葉欲禾為 Jack Lab 博士候選人，研究興趣涵蓋神經科學與人機互動、使用者行為分析與質性比較分析方法。（學術簡介待補充）",
            en: "Gary Yu-Ho Yeh is a Ph.D. candidate at Jack Lab, with interests in neuroscience & HCI, user-behavior analysis, and qualitative comparative analysis. (Biography to be added.)",
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
        { id: "lin-jing-wei", name: { zh: "林京緯", en: "Lin Jing-Wei" }, photo: "", email: "" },
        { id: "lin-chen-wei", name: { zh: "林宸煒", en: "Lin Chen-Wei" }, photo: "", email: "linwilson671@gmail.com" },
        { id: "tseng-shu-huan", name: { zh: "曾書桓", en: "Zeng Shu-Huan" }, photo: "", email: "s392983978@gmail.com" },
        { id: "wu-cheng-chien", name: { zh: "吳呈堅", en: "Wu Cheng-Jian" }, photo: "", email: "chengjianwu678@gmail.com" },
        { id: "kung-sung-yu", name: { zh: "孔崧羽", en: "Kong Song-Yu" }, photo: "", email: "kongsongyu9012@gmail.com" },
        { id: "li-yu-chen", name: { zh: "李瑀蓁", en: "Lee Yu-Chen" }, photo: "", email: "lyzchry1771@gmail.com" },
        { id: "hsu-chih-hao", name: { zh: "徐稚皓", en: "Hsu Chih-Hao" }, photo: "", email: "howard120330@gmail.com" },
        { id: "su-wen-feng", name: { zh: "蘇彣丰", en: "Su Wen-Feng" }, photo: "", email: "wenfeng.taipei@gmail.com" },
      ],
    },
    {
      id: "alumni",
      layout: "alumni",
      label: { zh: "畢業成員", en: "Alumni" },
      members: [
        { id: "liu-kuan-hung", name: { zh: "劉冠宏", en: "Liu Guan-Hong" }, photo: "", email: "zxc1030123@gmail.com", currentPosition: { zh: "目前動向待補充", en: "Current position TBA" } },
        { id: "huang-shu-han", name: { zh: "黃舒韓", en: "Huang Shu-Han" }, photo: "", email: "", currentPosition: { zh: "目前動向待補充", en: "Current position TBA" } },
        { id: "chang-chan-chia", name: { zh: "張展嘉", en: "Chang Chan-Chia" }, photo: "", email: "alex20010122@gmail.com", currentPosition: { zh: "目前動向待補充", en: "Current position TBA" } },
        { id: "chien-yun-ting", name: { zh: "簡筠庭", en: "Chien Yun-Ting" }, photo: "", email: "", currentPosition: { zh: "目前動向待補充", en: "Current position TBA" } },
        { id: "yang-chu-chun", name: { zh: "楊筑鈞", en: "Yang Chu-Chun" }, photo: "", email: "", currentPosition: { zh: "目前動向待補充", en: "Current position TBA" } },
        { id: "hsu-te-yen", name: { zh: "徐德諺", en: "Hsu Te-Yen" }, photo: "", email: "", currentPosition: { zh: "目前動向待補充", en: "Current position TBA" } },
      ],
    },
  ],
};
