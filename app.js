const TEXTS = {
  ar: {
    brand: "أبطال في الظل",
    tagline: "سير الجنود المجهولين من صحابة رسول الله",
    eyebrow: "مشروع قصصي تفاعلي",
    headline: "أبطال في الظل",
    heroText: "رحلة مرئية وصوتية إلى سير صحابة كرام عملوا في صمت، وصنعوا في لحظات خفية أثراً باقياً.",
    browseTitle: "اختر قصة",
    browseText: "ابدأ بالمقدمة أو افتح كارت أي شخصية لقراءة التعريف والسيناريو.",
    listen: "استمع إلى القصة",
    pause: "إيقاف مؤقت",
    stop: "إيقاف",
    reading: "جاري الاستماع",
    ready: "جاهز للاستماع",
    previous: "السابق",
    next: "التالي",
    chapter: "شاشة",
    profileCard: "بطاقة تعريفية",
    narrator: "قال الراوي",
    lesson: "فائدة المشهد",
    scene: "المشهد",
    source: "المصدر",
    translation: "الترجمة الإنجليزية",
    sourceError: "تعذر تحميل ملف القصة. تأكد من تشغيل التطبيق عبر خادم محلي.",
  },
  en: {
    brand: "Heroes in the Shadows",
    tagline: "Stories of lesser-known companions of the Messenger of Allah",
    eyebrow: "Interactive Story Project",
    headline: "Heroes in the Shadows",
    heroText: "A visual and narrated journey into the lives of noble companions whose quiet actions left lasting marks.",
    browseTitle: "Choose a Story",
    browseText: "Start with the introduction or open any character card to read the profile and scenario.",
    listen: "Listen to the story",
    pause: "Pause",
    stop: "Stop",
    reading: "Now reading",
    ready: "Ready to listen",
    previous: "Previous",
    next: "Next",
    chapter: "Screen",
    profileCard: "Profile Card",
    narrator: "Narrator",
    lesson: "Scene Takeaway",
    scene: "Scene",
    source: "Source",
    translation: "English Translation",
    sourceError: "Could not load the story file. Run the app through a local server.",
  },
};

const TASHKEEL_PAIRS = [
  ["أبطال في الظل", "أَبْطَالٌ فِي الظِّلِّ"],
  ["سير الجنود المجهولين من صحابة رسول الله", "سِيَرُ الجُنُودِ المَجْهُولِينَ مِنْ صَحَابَةِ رَسُولِ اللهِ"],
  ["مشروع قصصي تفاعلي", "مَشْرُوعٌ قَصَصِيٌّ تَفَاعُلِيٌّ"],
  ["رحلة مرئية وصوتية", "رِحْلَةٌ مَرْئِيَّةٌ وَصَوْتِيَّةٌ"],
  ["صحابة كرام", "صَحَابَةٍ كِرَامٍ"],
  ["عملوا في صمت", "عَمِلُوا فِي صَمْتٍ"],
  ["أثراً باقياً", "أَثَرًا بَاقِيًا"],
  ["اختر قصة", "اِخْتَرْ قِصَّةً"],
  ["ابدأ بالمقدمة", "اِبْدَأْ بِالمُقَدِّمَةِ"],
  ["تعريف الشخصية", "تَعْرِيفِ الشَّخْصِيَّةِ"],
  ["استمع إلى القصة", "اِسْتَمِعْ إِلَى القِصَّةِ"],
  ["جاري الاستماع", "جَارِي الاسْتِمَاعِ"],
  ["جاهز للاستماع", "جَاهِزٌ لِلاسْتِمَاعِ"],
  ["إيقاف مؤقت", "إِيقَافٌ مُؤَقَّتٌ"],
  ["إيقاف", "إِيقَافٌ"],
  ["السابق", "السَّابِقُ"],
  ["التالي", "التَّالِي"],
  ["شاشة", "شَاشَةٌ"],
  ["مقدمة عامة للمشروع", "مُقَدِّمَةٌ عَامَّةٌ لِلمَشْرُوعِ"],
  ["مقدمة المشروع", "مُقَدِّمَةُ المَشْرُوعِ"],
  ["مدخل يشرح فكرة إحياء سير الجنود المجهولين من الصحابة", "مَدْخَلٌ يَشْرَحُ فِكْرَةَ إِحْيَاءِ سِيَرِ الجُنُودِ المَجْهُولِينَ مِنَ الصَّحَابَةِ"],
  ["الحباب بن المنذر", "الحُبَابُ بْنُ المُنْذِرِ"],
  ["الحباب ابن المنذر", "الحُبَابُ ابْنُ المُنْذِرِ"],
  ["مهندس النصر", "مُهَنْدِسُ النَّصْرِ"],
  ["صاحب الرأي في بدر", "صَاحِبُ الرَّأْيِ فِي بَدْرٍ"],
  ["الفطنة والشجاعة", "الفِطْنَةِ وَالشَّجَاعَةِ"],
  ["لحظة فاصلة", "لَحْظَةٍ فَاصِلَةٍ"],
  ["ذو النجادين", "ذُو النِّجَادَيْنِ"],
  ["زاهد الطريق", "زَاهِدُ الطَّرِيقِ"],
  ["قصة شاب", "قِصَّةُ شَابٍّ"],
  ["صدق في طلب الطريق", "صَدَقَ فِي طَلَبِ الطَّرِيقِ"],
  ["ربيعة بن كعب الأسلمي", "رَبِيعَةُ بْنُ كَعْبٍ الأَسْلَمِيُّ"],
  ["ربيعة ابن كعب الاسلمى", "رَبِيعَةُ ابْنُ كَعْبٍ الأَسْلَمِيُّ"],
  ["خادم صادق", "خَادِمٌ صَادِقٌ"],
  ["الشاب الذي جعل الخدمة", "الشَّابُّ الَّذِي جَعَلَ الخِدْمَةَ"],
  ["عمرو بن الجموح", "عَمْرُو بْنُ الجَمُوحِ"],
  ["عمر ابن الجموح", "عَمْرُو ابْنُ الجَمُوحِ"],
  ["عزيمة لا تنكسر", "عَزِيمَةٌ لا تَنْكَسِرُ"],
  ["رجل لم يمنعه العذر", "رَجُلٌ لَمْ يَمْنَعْهُ العُذْرُ"],
  ["نعيم بن مسعود", "نُعَيْمُ بْنُ مَسْعُودٍ"],
  ["نعيم ابن مسعود", "نُعَيْمُ ابْنُ مَسْعُودٍ"],
  ["دهاء بلا سيف", "دَهَاءٌ بِلا سَيْفٍ"],
  ["الرجل الذي عمل بعقله", "الرَّجُلُ الَّذِي عَمِلَ بِعَقْلِهِ"],
  ["ساعة حصار", "سَاعَةَ حِصَارٍ"],
  ["أبطال ثلاثة آخرون", "أَبْطَالٌ ثَلاثَةٌ آخَرُونَ"],
  ["إضافة ثلاث شخصيات", "إِضَافَةُ ثَلاثِ شَخْصِيَّاتٍ"],
  ["ثلاث شخصيات مغمورة", "ثَلاثِ شَخْصِيَّاتٍ مَغْمُورَةٍ"],
  ["جليبيب", "جُلَيْبِيبٌ"],
  ["صلة بن الحارث", "صِلَةُ بْنُ الحَارِثِ"],
  ["ثابت بن الدحداح", "ثَابِتُ بْنُ الدَّحْدَاحِ"],
  ["أبو الدحداح", "أَبُو الدَّحْدَاحِ"],
  ["الجنود المجهولين", "الجُنُودِ المَجْهُولِينَ"],
  ["صحابة رسول الله", "صَحَابَةِ رَسُولِ اللهِ"],
  ["رسول الله", "رَسُولِ اللهِ"],
  ["النبي ﷺ", "النَّبِيِّ ﷺ"],
  ["النبي", "النَّبِيِّ"],
  ["رسول", "رَسُول"],
  ["الله", "اللهِ"],
  ["رضي الله عنه", "رَضِيَ اللهُ عَنْهُ"],
  ["رضي الله عنهم", "رَضِيَ اللهُ عَنْهُمْ"],
  ["صحيح البخاري", "صَحِيحِ البُخَارِيِّ"],
  ["صحيح مسلم", "صَحِيحِ مُسْلِمٍ"],
  ["سير أعلام النبلاء", "سِيَرِ أَعْلامِ النُّبَلاءِ"],
  ["غزوة بدر", "غَزْوَةِ بَدْرٍ"],
  ["بدر", "بَدْرٍ"],
  ["أحد", "أُحُدٍ"],
  ["الأحزاب", "الأَحْزَابِ"],
  ["السيرة النبوية", "السِّيرَةِ النَّبَوِيَّةِ"],
  ["الصحابة", "الصَّحَابَةِ"],
  ["الشورى", "الشُّورَى"],
  ["الفصل الأول", "الفَصْلُ الأَوَّلُ"],
  ["الفصل الثاني", "الفَصْلُ الثَّانِي"],
  ["الفصل الثالث", "الفَصْلُ الثَّالِثُ"],
  ["الفصل الرابع", "الفَصْلُ الرَّابِعُ"],
  ["الفصل الخامس", "الفَصْلُ الخَامِسُ"],
  ["بطاقة تعريفية", "بِطَاقَةٌ تَعْرِيفِيَّةٌ"],
  ["العنوان المقترح", "العُنْوَانُ المُقْتَرَحُ"],
  ["الفوائد التربوية", "الفَوَائِدُ التَّرْبَوِيَّةُ"],
  ["الموقف الحاسم", "المَوْقِفُ الحَاسِمُ"],
  ["الدروس المستفادة", "الدُّرُوسُ المُسْتَفَادَةُ"],
  ["الاسم", "الاسْمُ"],
  ["مكانته", "مَكَانَتُهُ"],
  ["القصة", "القِصَّةُ"],
  ["المشروع", "المَشْرُوعُ"],
  ["التاريخ", "التَّارِيخُ"],
  ["الإسلام", "الإِسْلَامُ"],
  ["المسلمون", "المُسْلِمُونَ"],
  ["المشركين", "المُشْرِكِينَ"],
  ["المؤمن", "المُؤْمِنُ"],
  ["العبرة", "العِبْرَةُ"],
  ["العطاء", "العَطَاءُ"],
  ["الإخلاص", "الإِخْلَاصُ"],
  ["الخدمة", "الخِدْمَةُ"],
  ["الشجاعة", "الشَّجَاعَةُ"],
  ["الحكمة", "الحِكْمَةُ"],
  ["المشورة", "المَشُورَةُ"],
  ["الرأي", "الرَّأْيُ"],
  ["الحرب", "الحَرْبُ"],
  ["المكيدة", "المَكِيدَةُ"],
  ["الماء", "المَاءِ"],
  ["الآبار", "الآبَارِ"],
  ["الجنة", "الجَنَّةُ"],
  ["الفردوس", "الفِرْدَوْسُ"],
  ["الشهادة", "الشَّهَادَةُ"],
  ["المدينة", "المَدِينَةُ"],
  ["مكة", "مَكَّةَ"],
  ["قريش", "قُرَيْشٍ"],
];

const STORIES = [
  {
    id: "intro",
    category: { ar: "مقدمة المشروع", en: "Project Introduction" },
    title: { ar: "مقدمة عامة للمشروع", en: "Project Introduction" },
    summary: {
      ar: "مدخل يشرح فكرة إحياء سير الجنود المجهولين من الصحابة.",
      en: "An opening chapter explaining the purpose of reviving lesser-known companion stories.",
    },
    file: "مقدمة عامة للمشروع (صحابة فى الظل).txt",
    image: "assets/intro.png",
    english: [
      "This project opens a window onto companions whose names are less common in public memory, yet whose sincerity and courage shaped decisive moments.",
      "Through these stories, the app invites readers to see service, wisdom, sacrifice, and quiet devotion as forms of heroism.",
    ],
  },
  {
    id: "hubab",
    category: { ar: "مهندس النصر", en: "Strategist of Victory" },
    title: { ar: "الحباب بن المنذر", en: "Al-Hubab ibn Al-Mundhir" },
    summary: {
      ar: "صاحب الرأي في بدر، الذي جمع بين الفطنة والشجاعة في لحظة فاصلة.",
      en: "The thoughtful adviser at Badr whose insight helped shape a decisive moment.",
    },
    file: "الحباب ابن المنذر.txt",
    image: "assets/hubab.png",
    english: [
      "Al-Hubab ibn Al-Mundhir stands as a model of constructive counsel. His story highlights courage that appears through clear thinking and sincere advice.",
      "The scenes focus on wells, strategy, and the responsibility of speaking when wisdom can serve the community.",
    ],
  },
  {
    id: "dhu",
    category: { ar: "زاهد الطريق", en: "The Devoted Traveller" },
    title: { ar: "ذو النجادين", en: "Dhu al-Nijadayn" },
    summary: {
      ar: "قصة شاب صدق في طلب الطريق، وخرج من ضيق الدنيا إلى سعة المعنى.",
      en: "A story of devotion, simplicity, and a young heart seeking a higher path.",
    },
    file: "ذو النجادين.txt",
    image: "assets/dhu-al-nijadayn.png",
    english: [
      "Dhu al-Nijadayn represents humble perseverance. His visual world is open desert, patched garments, and a quiet road of faith.",
      "The story emphasizes sincerity over possessions and movement toward meaning despite hardship.",
    ],
  },
  {
    id: "rabia",
    category: { ar: "خادم صادق", en: "Devoted Servant" },
    title: { ar: "ربيعة بن كعب الأسلمي", en: "Rabi'a ibn Ka'b al-Aslami" },
    summary: {
      ar: "الشاب الذي جعل الخدمة باباً لطموح روحي عظيم.",
      en: "The young companion whose service became a path toward a noble spiritual hope.",
    },
    file: "ربيعة ابن كعب الاسلمى.txt",
    image: "assets/rabia.png",
    english: [
      "Rabi'a ibn Ka'b al-Aslami is remembered through service, closeness, and a profound aspiration.",
      "The app frames his scenes with water, night light, and the dignity of small acts done with a large intention.",
    ],
  },
  {
    id: "amr",
    category: { ar: "عزيمة لا تنكسر", en: "Unbroken Resolve" },
    title: { ar: "عمرو بن الجموح", en: "Amr ibn al-Jamuh" },
    summary: {
      ar: "رجل لم يمنعه العذر من طلب الموقف الذي يرضي الله.",
      en: "A dignified elder whose determination rose above physical limitation.",
    },
    file: "عمر ابن الجموح.txt",
    image: "assets/amr.png",
    english: [
      "Amr ibn al-Jamuh's story is about resolve, dignity, and the refusal to let limitation define the soul.",
      "His scenes should feel noble and human: family, camp, palm shade, and a determined step forward.",
    ],
  },
  {
    id: "nuaym",
    category: { ar: "دهاء بلا سيف", en: "Wisdom Without a Sword" },
    title: { ar: "نعيم بن مسعود", en: "Nu'aym ibn Mas'ud" },
    summary: {
      ar: "الرجل الذي عمل بعقله في ساعة حصار، فغيّر ميزان الأحزاب.",
      en: "The man whose intelligence and diplomacy shifted a dangerous balance.",
    },
    file: "نعيم ابن مسعود.txt",
    image: "assets/nuaym.png",
    english: [
      "Nu'aym ibn Mas'ud's story centers on intelligence, secrecy, and careful words during a tense crisis.",
      "The visual language should suggest separated tents, negotiation, and a mind working calmly under pressure.",
    ],
  },
  {
    id: "julaybib",
    category: { ar: "رجل الدارين", en: "Man of Two Homes" },
    title: { ar: "جليبيب", en: "Julaybib" },
    summary: {
      ar: "صحابي مغمور رفعه صدقه حتى قال فيه النبي ﷺ: هذا مني وأنا منه.",
      en: "A humble companion whose sincerity earned a remarkable prophetic tribute.",
    },
    file: "ابطال ثلاثة اخرين.txt",
    sectionStart: "جليبيب",
    sectionEnd: "صلة بن الحارث",
    image: "assets/three-heroes.png",
    english: [
      "Julaybib was overlooked by many people, yet his sincerity and sacrifice gave him a place of honor.",
      "His story teaches that true worth is measured by faith, not appearance or status.",
    ],
  },
  {
    id: "silah",
    category: { ar: "إخلاص الصحراء", en: "Hidden Sincerity" },
    title: { ar: "صلة بن الحارث الغفاري", en: "Silah ibn Al-Harith Al-Ghifari" },
    summary: {
      ar: "رجل كتم عمله، فكان دعاؤه سبب نجاة في الصحراء.",
      en: "A quiet worshipper whose hidden prayer became a means of rescue.",
    },
    file: "ابطال ثلاثة اخرين.txt",
    sectionStart: "صلة بن الحارث",
    sectionEnd: "ثابت بن الدحداح",
    image: "assets/three-heroes.png",
    english: [
      "Silah ibn Al-Harith served with sincerity and avoided fame, even when his prayer brought relief.",
      "His story highlights hidden devotion, humility, and trust in Allah during hardship.",
    ],
  },
  {
    id: "abu-dahdah",
    category: { ar: "تاجر النخيل", en: "The Palm Grove Gift" },
    title: { ar: "ثابت بن الدحداح", en: "Thabit ibn Al-Dahdah" },
    summary: {
      ar: "صحابي قدّم بستانه لله، فصار موقفه درساً في البذل واليقين.",
      en: "A companion who gave his beloved garden for Allah with certainty and joy.",
    },
    file: "ابطال ثلاثة اخرين.txt",
    sectionStart: "ثابت بن الدحداح",
    image: "assets/three-heroes.png",
    english: [
      "Thabit ibn Al-Dahdah gave what he loved most, showing that charity begins with certainty.",
      "His family’s response turns the scene into a complete lesson in faith and generosity.",
    ],
  },
];

const SCENE_TRANSLATIONS = {
  intro: [
    "Project title and purpose: Heroes in the Shadows introduces lesser-known companions whose quiet sincerity shaped history.",
    "The introduction explains why the project revives stories that are often absent from public memory.",
    "The project aims to connect readers with reliable prophetic and historical sources.",
    "Its educational goal is to build sincerity, service, courage, and humility through real examples.",
    "The opening prepares the reader to meet companions whose hidden deeds carried lasting meaning.",
  ],
  hubab: [
    "Al-Hubab ibn Al-Mundhir is introduced as the strategist of Badr and a companion known for wise counsel.",
    "This profile presents his name, status, and reputation for judgment, generosity, and sound advice.",
    "The first scene places the army at Badr and explains the military importance of the wells.",
    "Al-Hubab respectfully asks whether the position is revelation or strategic judgment, then offers his plan.",
    "His advice is accepted, showing the living practice of consultation and the value of useful expertise.",
    "The lesson highlights adab, consultation, and the courage to speak when advice benefits the community.",
    "The closing presents Al-Hubab as a quiet hero whose thoughtful opinion helped protect the army.",
  ],
  dhu: [
    "Dhu al-Nijadayn is introduced as a young man whose poverty did not weaken his longing for Allah.",
    "The profile identifies him and shows the simplicity of his life and the sincerity of his path.",
    "The early scene follows his break from comfort toward faith, even when the road becomes difficult.",
    "His journey reflects sacrifice, patched clothing, and a heart moving toward the Messenger of Allah.",
    "The most moving scene shows the care given to him at his death and burial.",
    "The final lesson is that sincere devotion may raise a hidden person above famous names.",
  ],
  rabia: [
    "Rabi'a ibn Ka'b al-Aslami is introduced as a young servant whose ambition was Paradise.",
    "The profile explains his poverty, service, and closeness to the household of the Prophet.",
    "The first scene shows him serving through the night with water for the Prophet's needs.",
    "When offered a wish, he asks not for wealth but for companionship in Paradise.",
    "The lesson centers on high aspiration, sincere service, and choosing the eternal over the temporary.",
    "The closing presents Rabi'a as an example of a young heart that turned humble service into a noble goal.",
  ],
  amr: [
    "Amr ibn al-Jamuh is introduced as a determined companion who refused to let disability define his faith.",
    "The profile presents his identity, age, family, and the physical limitation that did not break him.",
    "The early scene shows his longing to join the believers despite being excused.",
    "He asks to walk toward Paradise with his limp, revealing courage and spiritual resolve.",
    "The lesson highlights dignity, sacrifice, and the power of intention when the body is limited.",
    "The closing remembers him as a man whose determination made weakness look noble.",
  ],
  nuaym: [
    "Nu'aym ibn Mas'ud is introduced as a man whose intelligence changed the crisis of the Confederates.",
    "The profile shows his background and the moment his new faith became active responsibility.",
    "The first scene places him in a time of siege, fear, and pressure around Madinah.",
    "His decisive action uses wisdom, diplomacy, and strategy rather than open battle.",
    "The lesson is that words, timing, and insight can become a form of service.",
    "The closing presents Nu'aym as one man whose quiet plan helped dismantle a dangerous alliance.",
  ],
  julaybib: [
    "Julaybib is introduced as a humble companion whom many people overlooked.",
    "The profile explains his social weakness and the special love and care he received from the Prophet.",
    "The first scene recalls the Prophet asking after him when others did not notice his absence.",
    "The decisive scene shows Julaybib found after battle, honored by the Prophet's words.",
    "The lesson teaches that divine worth is not measured by appearance, wealth, or social rank.",
    "The closing leaves Julaybib as a model of hidden honor and sincere sacrifice.",
  ],
  silah: [
    "Silah ibn Al-Harith is introduced as a quiet worshipper from Ghifar.",
    "The profile presents his hidden devotion, worship, and service among the Muslim armies.",
    "The first scene places the army in a harsh journey where thirst and darkness increase the danger.",
    "Silah prays secretly, and relief comes through water in the desert.",
    "The lesson highlights sincerity, concealment of good deeds, and trust in Allah during hardship.",
    "The closing presents Silah as a hidden servant whose prayer helped others while he avoided fame.",
  ],
  "abu-dahdah": [
    "Thabit ibn Al-Dahdah, Abu Al-Dahdah, is introduced through his famous palm grove and generous faith.",
    "The profile explains his wealth, family, and the garden he loved.",
    "The first scene connects his story to the prophetic praise of what awaited him in Paradise.",
    "When he hears the call to lend to Allah, he gives his garden without hesitation.",
    "His wife accepts the sacrifice with joy, turning the home into a complete scene of faith.",
    "The lesson is immediate obedience, generosity, and family support in acts of righteousness.",
  ],
};

let language = "ar";
let currentStory = null;
let chapters = [];
let currentChapterIndex = 0;
let isSpeaking = false;

const $ = (selector) => document.querySelector(selector);

function t(key) {
  return vocalize(TEXTS[language][key]);
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function vocalize(text) {
  if (language !== "ar" || !text) return text;
  let shaped = text;
  TASHKEEL_PAIRS.forEach(([plain, marked]) => {
    shaped = shaped.replace(new RegExp(escapeRegExp(plain), "g"), marked);
  });
  return shaped;
}

function localText(value) {
  return vocalize(value?.[language] || "");
}

async function applyLanguage() {
  stopReading();
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("en", language === "en");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $("#arabicButton").classList.toggle("active", language === "ar");
  $("#englishButton").classList.toggle("active", language === "en");
  renderCards();
  if (currentStory) {
    chapters = await loadChapters(currentStory);
    renderStory(currentStory, 0);
  }
}

function renderCards() {
  const grid = $("#cardGrid");
  grid.innerHTML = "";
  STORIES.forEach((story) => {
    const card = document.createElement("button");
    card.className = "hero-card";
    card.type = "button";
    card.style.setProperty("--scene", sceneFor(story));
    card.innerHTML = `
      <span class="eyebrow">${localText(story.category)}</span>
      <h3>${localText(story.title)}</h3>
      <p>${localText(story.summary)}</p>
    `;
    card.addEventListener("click", () => openStory(story.id));
    grid.appendChild(card);
  });
}

async function openStory(id) {
  stopReading();
  currentStory = STORIES.find((story) => story.id === id);
  currentChapterIndex = 0;
  chapters = await loadChapters(currentStory);
  $("#homeView").hidden = true;
  $("#cardsSection").hidden = true;
  $("#storyView").hidden = false;
  $("#backButton").style.display = "grid";
  renderStory(currentStory, 0);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function loadChapters(story) {
  if (language === "en") {
    return story.english.map((body, index) => ({
      title: index === 0 ? "Profile" : "Narrative",
      body,
      kind: index === 0 ? "profile" : "narrative",
      lesson: index === 0 ? story.summary.en : "Quiet service can change history when it is joined with sincerity and wisdom.",
    }));
  }

  try {
    const response = await fetch(encodeURI(story.file));
    if (!response.ok) throw new Error("Failed to load file");
    const sourceText = await response.text();
    const text = extractStorySection(sourceText, story);
    return splitArabicText(text);
  } catch (error) {
    return [{ title: story.title.ar, body: TEXTS.ar.sourceError }];
  }
}

function extractStorySection(text, story) {
  if (!story.sectionStart) return text;
  const start = text.indexOf(story.sectionStart);
  if (start === -1) return text;
  const sectionStart = text.lastIndexOf("##", start) >= 0 ? text.lastIndexOf("##", start) : start;
  const end = story.sectionEnd ? text.indexOf(story.sectionEnd, start + story.sectionStart.length) : -1;
  const sectionEnd = end > -1 ? Math.max(text.lastIndexOf("##", end), end) : text.length;
  return text.slice(sectionStart, sectionEnd);
}

function splitArabicText(text) {
  const clean = cleanRawStoryText(text.replace(/\r/g, "")).trim();
  const headingPattern = /^(#{1,3}\s+|[ 	]*\*\*)/gm;
  const matches = [...clean.matchAll(headingPattern)].map((match) => match.index);
  if (matches.length < 2) {
    return chunkText(clean, 1200).map((body, index) => makeStoryScene(`${TEXTS.ar.chapter} ${index + 1}`, body, index));
  }

  const sections = [];
  const starts = [...matches, clean.length];
  for (let i = 0; i < starts.length - 1; i += 1) {
    const part = clean.slice(starts[i], starts[i + 1]).trim();
    if (!part) continue;
    const lines = part.split("\n");
    const title = lines[0].replace(/^#{1,3}\s*/, "").replace(/\*/g, "").trim();
    const body = lines.slice(1).join("\n").trim() || title;
    sections.push(makeStoryScene(title, body, sections.length));
  }
  return sections.length ? sections : [makeStoryScene(TEXTS.ar.chapter, clean, 0)];
}

function cleanRawStoryText(text) {
  return removeMetaLines(text)
    .replace(/^لنبِعث[\s\S]*?مباشرة:\s*/u, "")
    .replace(/^نعم،[\s\S]*?لمشروعك بنفس القوة والتوثيق:\s*/u, "")
    .replace(/هل\s+ننتقل[\s\S]*$/u, "")
    .replace(/هل\s+تحتاج[\s\S]*$/u, "")
    .replace(/هل\s+تجدها[\s\S]*$/u, "")
    .replace(/هل\s+هذه[\s\S]*$/u, "")
    .replace(/هل\s+تعتمد[\s\S]*$/u, "")
    .replace(/بهذا نكون[\s\S]*$/u, "")
    .replace(/هذه الأسماء الثلاثة[\s\S]*$/u, "")
    .replace(/العنوان المقترح/g, "العنوان")
    .replace(/الخاتمة المقترحة/g, "الخاتمة")
    .replace(/نص المقدمة/g, "المقدمة")
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\uFE0F]/gu, "")
    .replace(/[•◆◇★☆✦]+/g, "")
    .trim();
}

function makeStoryScene(title, body, index) {
  const cleanedTitle = cleanStoryText(title);
  const cleanedBody = cleanStoryText(body);
  return {
    title: cleanedTitle,
    body: cleanedBody,
    kind: detectSceneKind(cleanedTitle),
    lesson: extractLesson(cleanedTitle, cleanedBody, index),
  };
}

function cleanStoryText(text) {
  return cleanRawStoryText(text)
    .replace(/#{1,3}\s*/g, "")
    .replace(/\*\*/g, "")
    .trim();
}

function removeMetaLines(text) {
  const metaLinePatterns = [
    /^إليك\s+(?:الهيكل|صياغة|قصة|ثلاثة|أسماء|تفصيلاً|المادة|النص|هذا)/u,
    /^معذرة\s+دعنا/u,
    /^لنبِعث/u,
    /^لكي\s+يكتمل/u,
    /^نعم،\s+هناك/u,
    /^تمت إضافة/u,
    /^بين يديك الآن/u,
    /^بهذا نكون/u,
    /^هذه الأسماء الثلاثة/u,
    /^هذه المقدمة تفتح/u,
    /^هل\s+(?:ننتقل|تحتاج|تجدها|هذه|ترغب|أكمل|أبدأ|تعتمد)/u,
  ];

  return text
    .split("\n")
    .filter((line) => !metaLinePatterns.some((pattern) => pattern.test(line.trim())))
    .join("\n");
}

function cleanNarrationText(text) {
  if (language !== "ar") {
    return cleanStoryText(text).replace(/\s+/g, " ").trim();
  }
  return vocalize(cleanStoryText(text))
    .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u064B-\u0652\s]/g, " ")
    .replace(/[،؛؟ـ«»"'.:()[\]{}0-9٠-٩]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function detectSceneKind(title) {
  if (/بطاقة|تعريف|الاسم|مكانته/.test(title)) return "profile";
  if (/الفوائد|الدروس|العبرة|الخلاصة|تربوية|دعوية/.test(title)) return "lesson";
  if (/الموقف|الحاسم|المشهد|الفصل|قصة|صحيح|بطن/.test(title)) return "scene";
  return "scene";
}

function extractLesson(title, body, index) {
  const lessonLine = body
    .split("\n")
    .map((line) => line.replace(/^[\s>*\-0-9.]+/, "").trim())
    .find((line) => /درس|فائدة|عبرة|الإخلاص|الشورى|الشجاعة|الخدمة|الحكمة|العطاء|الصدق/.test(line));
  if (lessonLine) return lessonLine.slice(0, 180);
  if (detectSceneKind(title) === "profile") return "نتعرف هنا إلى الشخصية قبل أن ندخل إلى الموقف الذي صنع أثرها.";
  if (index === 0) return "البداية تهيئ القلب لمعرفة بطل عمل في هدوء وترك أثراً عظيماً.";
  return "كل مشهد يذكّرنا أن البطولة قد تكون رأياً صادقاً، أو خدمة خفية، أو عزيمة ثابتة.";
}

function chunkText(text, maxLength) {
  const paragraphs = text.split(/\n{2,}/);
  const chunks = [];
  let current = "";
  paragraphs.forEach((paragraph) => {
    if ((current + "\n\n" + paragraph).length > maxLength && current) {
      chunks.push(current.trim());
      current = paragraph;
    } else {
      current = `${current}\n\n${paragraph}`.trim();
    }
  });
  if (current) chunks.push(current.trim());
  return chunks;
}

function renderStory(story, index) {
  currentChapterIndex = Math.max(0, Math.min(index, chapters.length - 1));
  const chapter = chapters[currentChapterIndex] || { title: story.title[language], body: "" };
  $("#storyCategory").textContent = localText(story.category);
  $("#storyTitle").textContent = localText(story.title);
  $("#storySummary").textContent = localText(story.summary);
  $("#storyPortrait").style.setProperty("--scene", sceneFor(story));
  $("#chapterImage").style.setProperty("--scene", sceneFor(story));
  $("#sceneLabel").textContent = `${t("scene")} ${currentChapterIndex + 1}`;
  $("#sceneKind").textContent = sceneKindLabel(chapter.kind);
  $("#profilePanel").innerHTML = renderProfilePanel(story, chapter);
  $("#chapterTitle").textContent = vocalize(chapter.title);
  $("#narratorLabel").textContent = t("narrator");
  $("#storyContent").innerHTML = formatBody(vocalize(chapter.body));
  $("#translationBox").innerHTML = renderTranslationBox(story, chapter, currentChapterIndex);
  $("#lessonBox").innerHTML = `<strong>${t("lesson")}</strong><p>${vocalize(chapter.lesson || story.summary[language])}</p>`;
  $("#listenTitle").textContent = t("listen");
  $("#listenStatus").textContent = t("ready");
  $("#listenButton").textContent = isSpeaking ? "⏸" : "▶";
  $("#prevChapter").disabled = currentChapterIndex === 0;
  $("#nextChapter").disabled = currentChapterIndex === chapters.length - 1;
  $("#chapterCounter").textContent = `${currentChapterIndex + 1} / ${chapters.length}`;
  renderChapterList();
  renderProgressDots();
}

function renderChapterList() {
  const list = $("#chapterList");
  list.innerHTML = "";
  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chapter-tab${index === currentChapterIndex ? " active" : ""}`;
    button.innerHTML = `<span>${t("scene")} ${index + 1}</span><strong>${vocalize(shortTitle(chapter.title)) || `${t("chapter")} ${index + 1}`}</strong>`;
    button.addEventListener("click", () => {
      stopReading();
      renderStory(currentStory, index);
    });
    list.appendChild(button);
  });
}

function renderProgressDots() {
  const bar = $("#progressBar");
  bar.innerHTML = "";
  chapters.forEach((chapter, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", `${t("scene")} ${index + 1}`);
    if (index < currentChapterIndex) dot.classList.add("done");
    if (index === currentChapterIndex) dot.classList.add("active");
    dot.addEventListener("click", () => {
      stopReading();
      renderStory(currentStory, index);
    });
    bar.appendChild(dot);
  });
}

function sceneFor(story) {
  return `linear-gradient(145deg, rgba(31,37,40,.2), rgba(154,81,52,.18)), url('${story.image}') center/cover`;
}

function sceneKindLabel(kind) {
  if (kind === "profile") return t("profileCard");
  if (kind === "lesson") return t("lesson");
  return language === "ar" ? "قصة مصورة" : "Illustrated Story";
}

function shortTitle(title) {
  return title
    .replace(/^[^\u0621-\u064A A-Za-z]*/u, "")
    .replace(/^[٠-٩0-9. ]+/, "")
    .slice(0, 62);
}

function renderProfilePanel(story, chapter) {
  const body = chapter.body || "";
  const nameMatch = body.match(/(?:الاسم|الاسم:)\s*[:：]?\s*([^\n.]+)/);
  const statusMatch = body.match(/(?:مكانته في السير|مكانته|اللقب)\s*[:：]?\s*([^\n.]+)/);
  const profileItems = [
    [language === "ar" ? "الشخصية" : "Character", localText(story.title)],
    [language === "ar" ? "الصفة" : "Theme", localText(story.category)],
    [t("source"), sourceHint(chapter.title, body)],
  ];
  if (nameMatch && language === "ar") profileItems.unshift(["الاسم", nameMatch[1].replace(/\*/g, "").trim()]);
  if (statusMatch && language === "ar") profileItems.push(["المكانة", statusMatch[1].replace(/\*/g, "").trim()]);
  return `
    <div class="profile-title">${t("profileCard")}</div>
    <div class="profile-grid">
      ${profileItems
        .map(([label, value]) => `<div><span>${vocalize(label)}</span><strong>${vocalize(value)}</strong></div>`)
        .join("")}
    </div>
  `;
}

function sourceHint(title, body) {
  const text = `${title}\n${body}`;
  if (/البخاري|مسلم|الصحيحين/.test(text)) return "الصحيحان وكتب السيرة";
  if (/سير أعلام النبلاء/.test(text)) return "سير أعلام النبلاء";
  if (/إسلام ويب|الدرر/.test(text)) return "مصادر دعوية وحديثية";
  return language === "ar" ? "ملف القصة الأصلي" : "Original story file";
}

function getSceneTranslation(story, chapter, index) {
  const translations = SCENE_TRANSLATIONS[story.id] || [];
  if (translations[index]) return translations[index];
  if (story.english?.[index]) return story.english[index];
  if (chapter.kind === "profile") return story.summary.en;
  return story.english?.[story.english.length - 1] || story.summary.en || "";
}

function renderTranslationBox(story, chapter, index) {
  const translation = getSceneTranslation(story, chapter, index);
  if (!translation) return "";
  return `
    <strong>${TEXTS[language].translation}</strong>
    <p dir="ltr" lang="en">${translation}</p>
  `;
}

function formatBody(body) {
  return body
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${cleanStoryText(paragraph).replace(/\*\*/g, "").trim()}</p>`)
    .join("");
}

function readCurrentStory() {
  if (!("speechSynthesis" in window)) return;
  if (isSpeaking) {
    window.speechSynthesis.pause();
    isSpeaking = false;
    $("#listenButton").textContent = "▶";
    $("#listenStatus").textContent = t("ready");
    return;
  }

  window.speechSynthesis.cancel();
  const text = chapters
    .slice(currentChapterIndex)
    .map((chapter) => {
      const title = cleanNarrationText(chapter.title);
      const body = cleanNarrationText(chapter.body);
      return body && body !== title ? `${title} ${body}` : title;
    })
    .filter(Boolean)
    .join("\n\n");
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language === "ar" ? "ar-SA" : "en-US";
  utterance.rate = language === "ar" ? 0.88 : 0.95;
  utterance.onend = () => {
    isSpeaking = false;
    $("#listenButton").textContent = "▶";
    $("#listenStatus").textContent = t("ready");
  };
  isSpeaking = true;
  $("#listenButton").textContent = "⏸";
  $("#listenStatus").textContent = t("reading");
  window.speechSynthesis.speak(utterance);
}

function stopReading() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  isSpeaking = false;
}

function closeStory() {
  stopReading();
  currentStory = null;
  chapters = [];
  $("#storyView").hidden = true;
  $("#homeView").hidden = false;
  $("#cardsSection").hidden = false;
  $("#backButton").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#arabicButton").addEventListener("click", () => {
  language = "ar";
  applyLanguage();
});

$("#englishButton").addEventListener("click", () => {
  language = "en";
  applyLanguage();
});

$("#backButton").addEventListener("click", closeStory);
$("#listenButton").addEventListener("click", readCurrentStory);
$("#stopButton").addEventListener("click", () => {
  stopReading();
  renderStory(currentStory, currentChapterIndex);
});
$("#prevChapter").addEventListener("click", () => {
  stopReading();
  renderStory(currentStory, currentChapterIndex - 1);
});
$("#nextChapter").addEventListener("click", () => {
  stopReading();
  renderStory(currentStory, currentChapterIndex + 1);
});

applyLanguage();
