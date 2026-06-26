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
    id: "three",
    category: { ar: "إضافة ثلاث شخصيات", en: "Three Additional Heroes" },
    title: { ar: "أبطال ثلاثة آخرون", en: "Three More Hidden Heroes" },
    summary: {
      ar: "ملف يجمع ثلاث شخصيات مغمورة تصلح لتوسيع المشروع إلى ثمانية أبطال.",
      en: "A combined file introducing three more lesser-known figures to expand the collection.",
    },
    file: "ابطال ثلاثة اخرين.txt",
    image: "assets/three-heroes.png",
    english: [
      "This combined section adds three further figures whose stories can become individual chapters in a larger edition.",
      "It works as an expansion card and a bridge toward a complete eight-hero collection.",
    ],
  },
];

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
    }));
  }

  try {
    const response = await fetch(encodeURI(story.file));
    if (!response.ok) throw new Error("Failed to load file");
    const text = await response.text();
    return splitArabicText(text);
  } catch (error) {
    return [{ title: story.title.ar, body: TEXTS.ar.sourceError }];
  }
}

function splitArabicText(text) {
  const clean = text.replace(/\r/g, "").trim();
  const headingPattern = /^(#{1,3}\s+|[ 	]*\*\*)/gm;
  const matches = [...clean.matchAll(headingPattern)].map((match) => match.index);
  if (matches.length < 2) {
    return chunkText(clean, 1200).map((body, index) => ({
      title: `${TEXTS.ar.chapter} ${index + 1}`,
      body,
    }));
  }

  const sections = [];
  const starts = [...matches, clean.length];
  for (let i = 0; i < starts.length - 1; i += 1) {
    const part = clean.slice(starts[i], starts[i + 1]).trim();
    if (!part) continue;
    const lines = part.split("\n");
    const title = lines[0].replace(/^#{1,3}\s*/, "").replace(/\*/g, "").trim();
    const body = lines.slice(1).join("\n").trim() || title;
    sections.push({ title, body });
  }
  return sections.length ? sections : [{ title: TEXTS.ar.chapter, body: clean }];
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
  $("#chapterTitle").textContent = vocalize(chapter.title);
  $("#storyContent").innerHTML = formatBody(vocalize(chapter.body));
  $("#listenTitle").textContent = t("listen");
  $("#listenStatus").textContent = t("ready");
  $("#listenButton").textContent = isSpeaking ? "⏸" : "▶";
  $("#prevChapter").disabled = currentChapterIndex === 0;
  $("#nextChapter").disabled = currentChapterIndex === chapters.length - 1;
  $("#chapterCounter").textContent = `${currentChapterIndex + 1} / ${chapters.length}`;
  renderChapterList();
}

function renderChapterList() {
  const list = $("#chapterList");
  list.innerHTML = "";
  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chapter-tab${index === currentChapterIndex ? " active" : ""}`;
    button.textContent = vocalize(chapter.title) || `${t("chapter")} ${index + 1}`;
    button.addEventListener("click", () => {
      stopReading();
      renderStory(currentStory, index);
    });
    list.appendChild(button);
  });
}

function sceneFor(story) {
  return `linear-gradient(145deg, rgba(31,37,40,.2), rgba(154,81,52,.18)), url('${story.image}') center/cover`;
}

function formatBody(body) {
  return body
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replace(/\*\*/g, "").trim()}</p>`)
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
    .map((chapter) => `${vocalize(chapter.title)}. ${vocalize(chapter.body)}`)
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
