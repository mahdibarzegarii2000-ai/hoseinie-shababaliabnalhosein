/**
 * پرتال جامع هیئت شباب علی ابن الحسین (ع)
 * توسعه داده شده با Vanilla JavaScript و آماده بارگذاری مستقیم در GitHub Pages
 */

// Initial Seed Data
const DEFAULT_AUDIOS = [
  {
    id: 1,
    title: "شور - ای علمدار رشیدم ای علی اکبرم",
    eulogist: "کربلایی محمدحسین پویانفر",
    occasion: "شب هشتم محرم الحرام ۱۴۴۶",
    category: "شور",
    duration: "۰۶:۴۵",
    plays: 1420,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    lyrics: "ای سرو خرامان حرم، شبه پیغمبر من / ای ماه منور شده در شام و سحر من\nرفتی و ز داغ تو زمین لرزه گرفته / ای قوت زانوی من و نور بصر من\nیا علی اکبر، یا علی اکبر..."
  },
  {
    id: 2,
    title: "واحد حماسی - وارث هیبت حیدر شباب الحسین",
    eulogist: "حاج میثم مطیعی",
    occasion: "میلاد حضرت علی اکبر (ع) و روز جوان",
    category: "واحد",
    duration: "۰۵:۱۲",
    plays: 980,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    lyrics: "شیر ژیان کربلا، زینت عرش کبریا / یا شباب علی ابن الحسین نور دل اهل ولا\nدر میدان چون ذوالفقار می‌درخشی بر سر اشرار\nیا علی ای جلوه روی رسول الله..."
  },
  {
    id: 3,
    title: "زمینه - دلتنگ حرمم ای آرام جان من",
    eulogist: "حاج مهدی رسولی",
    occasion: "مراسم هفتگی فاطمیه ۱۴۴۶",
    category: "زمینه",
    duration: "۰۸:۳۰",
    plays: 2310,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    lyrics: "دلتنگ حرمم، دلتنگ شب جمعه‌های کربلا / با چشمای ترم، صدات می‌زنم ای ساکن کربلا\nای جانم حسین، جانانم حسین..."
  },
  {
    id: 4,
    title: "روضه سوزناک - وداع با جوانان بنی‌هاشم",
    eulogist: "حاج محمود کریمی",
    occasion: "عاشورای حسینی ۱۴۴۶",
    category: "روضه",
    duration: "۱۱:۱۵",
    plays: 3100,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    lyrics: "دیدند اباعبدالله زانو زد در کنار پیکر جوان رشیدش... ولدی علی! علی الدنیا بعدک العفا..."
  },
  {
    id: 5,
    title: "مناجات با پروردگار - دعای ابوحمزه ثمالی",
    eulogist: "حاج منصور ارضی",
    occasion: "سحرهای ماه مبارک رمضان",
    category: "مناجات",
    duration: "۱۸:۲۰",
    plays: 870,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    lyrics: "الهی لا تؤدبنی بعقوبتک، ولا تمکر بی فی حیلتک... من أین لی الخیر یا رب ولا یوجد إلا من عندک..."
  }
];

const DEFAULT_CEREMONIES = [
  {
    id: 1,
    title: "مراسم هفتگی توسل به ساحت مقدس حضرت علی اکبر (ع)",
    tag: "مراسم پیش‌رو",
    date: "پنج‌شنبه ۱۰ آبان ۱۴۰۳ - ساعت ۱۹:۳۰",
    timeRemainingSeconds: 43200,
    speaker: "حجت‌الاسلام والمسلمین استاد حامد کاشانی",
    speakerTopic: "بررسی سیره تربیتی جوانان اهل‌بیت (ع) در جهاد تبیین",
    eulogist: "کربلایی علی‌اصغر رسولی و ذاکرین اهل‌بیت",
    location: "تهران، خیابان شریعتی، بالاتر از پل رومی، حسینیه شباب علی ابن الحسین (ع)",
    mapCoords: "35.789, 51.432",
    features: ["پخش زنده اینترنتی", "مهد کودک و حسینیه کودک", "پارکینگ اختصاصی", "پذیرایی شام تبرکی"]
  },
  {
    id: 2,
    title: "سوگواره ایام فاطمیه اول ۱۴۴۶ - یادبود شهدای مقاومت",
    tag: "ویژه برنامه",
    date: "جمعه ۱۸ آبان لغایت یکشنبه ۲۰ آبان - ساعت ۲۰:۰۰",
    speaker: "آیت‌الله سید محمدمهدی میرباقری",
    speakerTopic: "خطبه فدکیه و الگوی پایداری در تاریخ تشیع",
    eulogist: "حاج مهدی سلحشور و حاج حیدر خمسه",
    location: "تهران، حسینیه مرکزی شباب علی ابن الحسین (ع)",
    features: ["پخش زنده صوتی و تصویری", "سفره اطعام فاطمی"]
  },
  {
    id: 3,
    title: "جشن میلاد با سعادت حضرت زین‌العابدین امام سجاد (ع)",
    tag: "جشن و سرور",
    date: "یکشنبه ۵ شعبان المعظم - ساعت ۱۹:۰۰",
    speaker: "حجت‌الاسلام سید حسین مؤمنی",
    speakerTopic: "صحیفه سجادیه؛ منشور عرفان و اخلاق حسینی",
    eulogist: "کربلایی سید رضا نریمانی",
    location: "تهران، خیمه‌گاه جوانان شباب علی ابن الحسین (ع)",
    features: ["قرعه‌کشی کمک‌هزینه سفر کربلا", "شربت و شیرینی"]
  }
];

const DEFAULT_VIDEOS = [
  {
    id: 1,
    title: "نماهنگ ویژه - جوانان بنی‌هاشم بیایید",
    speaker: "کربلایی محمدحسین پویانفر",
    occasion: "محرم الحرام ۱۴۴۶",
    category: "نماهنگ ویژه",
    duration: "۰۸:۲۴",
    quality: "کیفیت 4K",
    views: "۴,۸۲۰",
    videoUrl: "",
    thumbnailText: "یا علی اکبر",
    description: "تدوین اختصاصی کارگروه رسانه هیئت شباب علی ابن الحسین (ع) • محرم ۱۴۴۶"
  },
  {
    id: 2,
    title: "مستند خدمت خادمین در موکب اربعین",
    speaker: "کارگروه جهادی و موکب شباب الحسین",
    occasion: "اربعین حسینی ۱۴۴۶",
    category: "مستند و گزارش",
    duration: "۱۲:۱۵",
    quality: "1080p Full HD",
    views: "۶,۱۴۰",
    videoUrl: "",
    thumbnailText: "طریق الحسین",
    description: "گزارش تصویری از فعالیت شبانه‌روزی جوانان خادم در عمود ۸۲۸ مسیر نجف به کربلا"
  },
  {
    id: 3,
    title: "شور حماسی - شاه علی اکبر یا علی اکبر",
    speaker: "کربلایی علی‌اصغر رسولی",
    occasion: "شب هشتم محرم الحرام",
    category: "شور و عزاداری",
    duration: "۰۶:۱۰",
    quality: "1080p Full HD",
    views: "۳,۲۵۰",
    videoUrl: "",
    thumbnailText: "شور حسینی",
    description: "سینه‌زنی پرشور جوانان هیئت شباب علی ابن الحسین در خیمه‌گاه مرکزی"
  }
];

const DEFAULT_PHOTOS = [
  {
    id: 1,
    title: "شور سینه‌زنی شب عاشورا",
    occasion: "دهه اول محرم الحرام ۱۴۴۶",
    category: "محرم و صفر",
    photographer: "کارگروه رسانه هیئت",
    photoCount: "۴۲ عکس باکیفیت",
    badge: "یا حسین",
    gradient: "from-red-950 via-slate-900 to-black",
    imageUrl: "",
    description: "حسینیه شباب علی ابن الحسین (ع) • ۴۲ عکس باکیفیت"
  },
  {
    id: 2,
    title: "خدمت خادمان در چایخانه حضرت",
    occasion: "ایام اربعین حسینی",
    category: "ایستگاه صلواتی و چایخانه",
    photographer: "واحد تصویربرداری موکب",
    photoCount: "۳۵ تصویر",
    badge: "چایخانه",
    gradient: "from-amber-950 via-slate-900 to-black",
    imageUrl: "",
    description: "ایام اربعین حسینی • ۳۵ تصویر"
  },
  {
    id: 3,
    title: "پویش اهدای بسته‌های ارزاق معیشتی",
    occasion: "اردوی جهادی جوانان هیئت",
    category: "اردوی جهادی",
    photographer: "روابط عمومی هیئت",
    photoCount: "۲۸ عکس",
    badge: "جهاد",
    gradient: "from-emerald-950 via-slate-900 to-black",
    imageUrl: "",
    description: "مناطق کم‌برخوردار • ۲۸ عکس"
  }
];

// Screen Navigation Mapping
const SCREEN_CONFIG = {
  'screen-home': {
    title: 'صفحه اصلی | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-add-audio': {
    title: 'افزودن صوت جدید | پنل مدیریت هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-audio-archive': {
    title: 'آرشیو جامع صوت | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-about-us': {
    title: 'درباره ما | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-ceremonies': {
    title: 'مراسمهای هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-photo-gallery': {
    title: 'گالری تصاویر | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-video-archive': {
    title: 'آرشیو ویدئوها و کلیپها | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-volunteer-registration': {
    title: 'ثبتنام خادم افتخاری | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-contact-us': {
    title: 'نذورات آنلاین و پرداخت اینترنتی | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-sms-preview': {
    title: 'پیشنمایش قالب پیامکهای رسمی | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-admin-dashboard': {
    title: 'داشبورد مدیریت | هیئت شباب علی ابن الحسین (ع)'
  },
  'screen-map': {
    title: 'نقشه و راهنمای حسینیه | هیئت شباب علی ابن الحسین (ع)'
  }
};

const PATH_MAP = {
  'home': 'screen-home',
  'ceremonies': 'screen-ceremonies',
  'events': 'screen-ceremonies',
  'admin-events': 'screen-ceremonies',
  'audio': 'screen-audio-archive',
  'audio-archive': 'screen-audio-archive',
  'gallery': 'screen-photo-gallery',
  'photo-gallery': 'screen-photo-gallery',
  'videos': 'screen-video-archive',
  'video-archive': 'screen-video-archive',
  'about': 'screen-about-us',
  'about-us': 'screen-about-us',
  'contact': 'screen-contact-us',
  'contact-us': 'screen-contact-us',
  'volunteer-registration': 'screen-volunteer-registration',
  'admin': 'screen-admin-dashboard',
  'admin-dashboard': 'screen-admin-dashboard',
  'admin-portal': 'screen-admin-dashboard',
  'admin-media': 'screen-add-audio',
  'add-audio': 'screen-add-audio',
  'admin-subscribers': 'screen-sms-preview',
  'sms-preview': 'screen-sms-preview',
  'map': 'screen-map',
  'location': 'screen-map',
  'husseiniyah-map': 'screen-map'
};

const DEFAULT_MAP_DATA = {
  name: "حسینیه مرکزی هیئت شباب علی ابن الحسین (ع)",
  address: "تهران، خیابان دکتر شریعتی، بالاتر از پل رومی، کوچه شهید برادران واعظی، حسینیه شباب علی ابن الحسین (ع)",
  metro: "ایستگاه متروی قیطریه (خط ۱ تجریش-کهریزک) - حدود ۶۰۰ متر پیاده‌روی به سمت پل رومی",
  bus: "خطوط اتوبوس‌های تندرو (BRT) خیابان شریعتی - ایستگاه پل رومی",
  parking: "پارکینگ عمومی جنب پل رومی + کوچه اختصاصی حسینیه جهت پارک خودروهای مستمعین",
  lat: "35.7892",
  lng: "51.4328",
  notes: "درب ورود برادران از حیاط شمالی و درب ورود خواهران مجهز به آسانسور از ورودی شرقی می‌باشد.",
  imageUrl: ""
};

// Global App State
window.AppState = {
  currentScreen: 'screen-home',
  audios: JSON.parse(localStorage.getItem('shabab_audios')) || DEFAULT_AUDIOS,
  videos: JSON.parse(localStorage.getItem('shabab_videos')) || DEFAULT_VIDEOS,
  photos: JSON.parse(localStorage.getItem('shabab_photos')) || DEFAULT_PHOTOS,
  ceremonies: JSON.parse(localStorage.getItem('shabab_ceremonies')) || DEFAULT_CEREMONIES,
  volunteers: JSON.parse(localStorage.getItem('shabab_volunteers')) || [],
  donations: JSON.parse(localStorage.getItem('shabab_donations')) || [
    { name: "حاج ابراهیم متقی", amount: 500000, intention: "اطعام عزاداران", code: "NZR-89241" },
    { name: "بانی ناشناس", amount: 200000, intention: "چایخانه حضرت علی اکبر", code: "NZR-89242" }
  ],
  husseiniyahMap: JSON.parse(localStorage.getItem('shabab_map_data')) || DEFAULT_MAP_DATA,
  currentPlayingAudio: null,
  isPlaying: false
};

function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (!drawer) return;
  drawer.classList.toggle('hidden');
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) drawer.classList.add('hidden');
}

// Router function
function navigateTo(targetScreenId, transitionType = 'push') {
  if (!SCREEN_CONFIG[targetScreenId]) {
    console.warn('Unknown screen target:', targetScreenId);
    return;
  }

  // Close mobile drawer on navigation
  closeMobileMenu();

  const prevScreenId = window.AppState.currentScreen;
  window.AppState.currentScreen = targetScreenId;

  // Update document title strictly to required title
  document.title = SCREEN_CONFIG[targetScreenId].title;

  // Toggle visible screen views
  document.querySelectorAll('.screen-view').forEach(view => {
    view.classList.remove('active-screen', 'slide-up');
    if (view.id === targetScreenId) {
      view.classList.add('active-screen');
      if (transitionType === 'slide_up') {
        view.classList.add('slide-up');
      }
    }
  });

  // Update hash without page jump
  const pathKey = Object.keys(PATH_MAP).find(k => PATH_MAP[k] === targetScreenId) || targetScreenId.replace('screen-', '');
  window.history.pushState({ screen: targetScreenId }, SCREEN_CONFIG[targetScreenId].title, '#' + pathKey);

  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update list if navigating to audio, video, photo archive or admin dashboard
  if (targetScreenId === 'screen-audio-archive') {
    renderAudioArchive();
  }
  if (targetScreenId === 'screen-video-archive') {
    renderVideoArchive();
  }
  if (targetScreenId === 'screen-photo-gallery') {
    renderPhotoGallery();
  }
  if (targetScreenId === 'screen-admin-dashboard') {
    renderAdminStats();
  }
  if (targetScreenId === 'screen-map') {
    renderMapScreen();
  }
}

// Global click delegation for all navigation links & elements
document.addEventListener('click', function(e) {
  // Check direct map link
  const mapLink = e.target.closest('a[href="#map"], a[href="#screen-map"]');
  if (mapLink) {
    e.preventDefault();
    navigateTo('screen-map');
    return;
  }

  // Check closest anchor or button with data-path
  const pathElement = e.target.closest('[data-path]');
  if (pathElement) {
    const dataPath = pathElement.getAttribute('data-path');
    const targetScreen = PATH_MAP[dataPath];
    if (targetScreen) {
      e.preventDefault();
      navigateTo(targetScreen);
      return;
    }
  }

  // Check specific text buttons and anchors from Prototype Navigation Spec
  const buttonOrLink = e.target.closest('a, button');
  if (buttonOrLink) {
    const text = buttonOrLink.textContent.trim();

    if (text.includes('مشاهده تمام مراسمها') || text.includes('مشاهده مراسمها') || text.includes('برنامه مراسمها') || text.includes('ثبت مراسم تازه')) {
      e.preventDefault();
      navigateTo('screen-ceremonies');
      return;
    }

    if (text.includes('مشاهده تمام صوتها') || text.includes('آرشیو صوت و نوا') || text.includes('انتشار قطعی صوت در آرشیو')) {
      e.preventDefault();
      navigateTo('screen-audio-archive');
      return;
    }

    if (text.includes('مشاهده نگارخانه تصاویر') || text.includes('نگارخانه تصاویر') || text.includes('نگارخانه و بنرها')) {
      e.preventDefault();
      navigateTo('screen-photo-gallery');
      return;
    }

    if (text.includes('مشاهده آرشیو ویدئوها')) {
      e.preventDefault();
      navigateTo('screen-video-archive');
      return;
    }

    if (text.includes('درباره ما و منشور هیئت') || text.includes('درباره خیمهگاه') || text === 'هیئت شباب علی ابن الحسین (ع)') {
      e.preventDefault();
      navigateTo('screen-about-us');
      return;
    }

    if (text.includes('پیوستن به خادمین افتخاری / ثبتنام') || text.includes('ثبتنام خادم افتخاری')) {
      e.preventDefault();
      navigateTo('screen-volunteer-registration');
      return;
    }

    if (text.includes('افزودن صوت جدید') || text.includes('مدیریت صوتها')) {
      e.preventDefault();
      navigateTo('screen-add-audio', 'slide_up');
      return;
    }

    if (text.includes('انصراف و بازگشت') || text.includes('پیشخوان')) {
      e.preventDefault();
      navigateTo('screen-admin-dashboard');
      return;
    }

    if (text.includes('نقشه حسینیه') || text.includes('نقشه و راهنما') || text.includes('مسیریابی روی نقشه') || text.includes('کروکی حسینیه')) {
      e.preventDefault();
      navigateTo('screen-map');
      return;
    }

    if (text.includes('سامانه پیامک')) {
      e.preventDefault();
      navigateTo('screen-sms-preview');
      return;
    }

    if (text.includes('صفحه پرداخت نذورات')) {
      e.preventDefault();
      navigateTo('screen-contact-us');
      return;
    }

    if (text.includes('بازگشت به پرتال اصلی') || text.includes('مشاهده تارنما')) {
      e.preventDefault();
      navigateTo('screen-home');
      return;
    }

    // Breadcrumb 'صفحه اصلی' inside nav
    const breadcrumbNav = buttonOrLink.closest("nav[aria-label='راهنمای مسیر'], nav[aria-label='مسیر راهنما']");
    if (breadcrumbNav && text.includes('صفحه اصلی')) {
      e.preventDefault();
      navigateTo('screen-home');
      return;
    }
  }
});

// Browser back/forward navigation support
window.addEventListener('popstate', function(e) {
  if (e.state && e.state.screen) {
    navigateTo(e.state.screen);
  } else {
    parseCurrentHash();
  }
});

window.addEventListener('hashchange', parseCurrentHash);

function parseCurrentHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash && PATH_MAP[hash]) {
    navigateTo(PATH_MAP[hash]);
  } else if (hash && SCREEN_CONFIG[hash]) {
    navigateTo(hash);
  } else {
    navigateTo('screen-home');
  }
}

// Audio Player Simulation
function playAudio(audioId) {
  const item = window.AppState.audios.find(a => a.id === audioId);
  if (!item) return;

  window.AppState.currentPlayingAudio = item;
  window.AppState.isPlaying = true;
  item.plays = (item.plays || 0) + 1;

  const bar = document.getElementById('global-audio-bar');
  if (bar) {
    bar.style.display = 'flex';
    document.getElementById('current-track-title').textContent = item.title;
    document.getElementById('current-track-artist').textContent = item.eulogist + ' • ' + item.occasion;
    document.getElementById('current-track-duration').textContent = item.duration;
    document.getElementById('play-pause-icon').innerHTML = `
      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </svg>
    `;
  }
}

function toggleGlobalAudio() {
  const icon = document.getElementById('play-pause-icon');
  if (!icon) return;

  window.AppState.isPlaying = !window.AppState.isPlaying;
  if (window.AppState.isPlaying) {
    icon.innerHTML = `
      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </svg>
    `;
  } else {
    icon.innerHTML = `
      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    `;
  }
}

// Render Audio Archive with filtering
function renderAudioArchive(category = 'all', query = '') {
  const container = document.getElementById('audio-archive-list');
  if (!container) return;

  let filtered = window.AppState.audios;
  if (category !== 'all') {
    filtered = filtered.filter(a => a.category === category);
  }
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(a => a.title.toLowerCase().includes(q) || a.eulogist.toLowerCase().includes(q) || a.occasion.toLowerCase().includes(q));
  }

  container.innerHTML = filtered.map(a => `
    <div class="glass-panel p-5 transition-all hover:border-amber-500/40 hover:bg-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-4 w-full md:w-auto">
        <button onclick="playAudio(${a.id})" class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-900/30 hover:scale-105 transition cursor-pointer">
          <svg class="w-6 h-6 fill-current mr-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div>
          <h4 class="font-bold text-white text-base md:text-lg hover:text-amber-400 transition cursor-pointer" onclick="playAudio(${a.id})">${a.title}</h4>
          <div class="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1">
            <span class="text-amber-400 font-medium">${a.eulogist}</span>
            <span>•</span>
            <span>${a.occasion}</span>
            <span>•</span>
            <span class="px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/50">${a.category}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4 self-end md:self-center shrink-0">
        <span class="text-xs text-slate-400 dir-ltr font-mono">${a.duration}</span>
        <button onclick="showLyricsModal(${a.id})" class="text-xs text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-lg transition cursor-pointer">
          متن شعر
        </button>
        <button onclick="alert('دانلود صوت با کیفیت ۳۲۰ آغاز شد')" class="text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-lg transition flex items-center gap-1 cursor-pointer">
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          دانلود
        </button>
      </div>
    </div>
  `).join('');
}

// Lyrics Modal
function showLyricsModal(id) {
  const item = window.AppState.audios.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById('lyrics-modal');
  if (modal) {
    document.getElementById('lyrics-modal-title').textContent = item.title;
    document.getElementById('lyrics-modal-meta').textContent = item.eulogist + ' | ' + item.occasion;
    document.getElementById('lyrics-modal-content').innerText = item.lyrics || 'متن اشعار این قطعه به زودی ثبت خواهد شد.';
    modal.classList.remove('hidden');
  }
}

function closeLyricsModal() {
  const modal = document.getElementById('lyrics-modal');
  if (modal) modal.classList.add('hidden');
}

// Add New Audio Submit
function handleAddAudioSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const title = form.title.value.trim();
  const eulogist = form.eulogist.value.trim();
  const category = form.category.value;
  const occasion = form.occasion.value.trim();
  const duration = form.duration.value.trim() || '۰۴:۳۰';
  const lyrics = form.lyrics.value.trim();

  if (!title || !eulogist) {
    alert('لطفاً عنوان و نام ذاکر را وارد نمایید.');
    return;
  }

  const newAudio = {
    id: Date.now(),
    title,
    eulogist,
    category,
    occasion: occasion || 'مراسم هفتگی',
    duration,
    lyrics,
    plays: 0,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  };

  window.AppState.audios.unshift(newAudio);
  localStorage.setItem('shabab_audios', JSON.stringify(window.AppState.audios));

  form.reset();
  alert('قطعه صوتی با موفقیت در آرشیو جامع بارگذاری و منتشر گردید.');
  navigateTo('screen-audio-archive');
}

// Volunteer Registration Submit
function handleVolunteerSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.fullname.value.trim();
  const nationalCode = form.national_code.value.trim();
  const phone = form.phone.value.trim();
  const role = form.workgroup.value;
  const experience = form.experience.value.trim();

  if (!name || !phone) {
    alert('لطفاً نام و شماره همراه را وارد کنید.');
    return;
  }

  const khademCardCode = 'KHD-' + Math.floor(100000 + Math.random() * 900000);
  const newVol = {
    id: Date.now(),
    name,
    nationalCode,
    phone,
    role,
    cardCode: khademCardCode,
    date: new Date().toLocaleDateString('fa-IR')
  };

  window.AppState.volunteers.push(newVol);
  localStorage.setItem('shabab_volunteers', JSON.stringify(window.AppState.volunteers));

  // Show digital badge card modal
  document.getElementById('khadem-card-name').textContent = name;
  document.getElementById('khadem-card-role').textContent = 'کارگروه: ' + role;
  document.getElementById('khadem-card-code').textContent = 'کد خادمی: ' + khademCardCode;
  document.getElementById('volunteer-success-modal').classList.remove('hidden');

  form.reset();
}

function closeVolunteerModal() {
  document.getElementById('volunteer-success-modal').classList.add('hidden');
}

// Donation Payment Process
function handleDonationSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.donor_name.value.trim() || 'بانی خیر ناشناس';
  const phone = form.donor_phone.value.trim();
  const intention = form.intention.value;
  let amount = parseInt(form.amount.value, 10);

  if (isNaN(amount) || amount < 10000) {
    alert('حداقل مبلغ اهدای نذر ۱۰,۰۰۰ تومان می‌باشد.');
    return;
  }

  // Generate tracking code
  const traceCode = 'SHB-' + Math.floor(10000000 + Math.random() * 90000000);
  const newDonation = {
    name,
    phone,
    intention,
    amount,
    code: traceCode,
    date: new Date().toLocaleDateString('fa-IR')
  };

  window.AppState.donations.unshift(newDonation);
  localStorage.setItem('shabab_donations', JSON.stringify(window.AppState.donations));

  // Render receipt
  document.getElementById('receipt-code').textContent = traceCode;
  document.getElementById('receipt-amount').textContent = amount.toLocaleString('fa-IR') + ' تومان';
  document.getElementById('receipt-intention').textContent = intention;
  document.getElementById('receipt-donor').textContent = name;
  document.getElementById('donation-receipt-modal').classList.remove('hidden');

  form.reset();
}

function closeReceiptModal() {
  document.getElementById('donation-receipt-modal').classList.add('hidden');
}

// Admin Stats Update
function renderAdminStats() {
  const totalAudios = window.AppState.audios.length;
  const totalVideos = window.AppState.videos.length;
  const totalPhotos = window.AppState.photos.length;
  const totalVolunteers = window.AppState.volunteers.length;
  const totalDonations = window.AppState.donations.reduce((acc, curr) => acc + (curr.amount || 0), 0);

  const elAudios = document.getElementById('stat-audio-count');
  if (elAudios) elAudios.textContent = totalAudios;

  const elVideos = document.getElementById('stat-video-count');
  if (elVideos) elVideos.textContent = totalVideos;

  const elPhotos = document.getElementById('stat-photo-count');
  if (elPhotos) elPhotos.textContent = totalPhotos;

  const elVol = document.getElementById('stat-volunteer-count');
  if (elVol) elVol.textContent = totalVolunteers;

  const elNazr = document.getElementById('stat-donation-sum');
  if (elNazr) elNazr.textContent = totalDonations.toLocaleString('fa-IR') + ' تومان';
}

// SMS Template preview update
function updateSmsPreview() {
  const templateType = document.getElementById('sms-template-select')?.value || 'ceremony';
  const customSpeaker = document.getElementById('sms-speaker-input')?.value || 'استاد حامد کاشانی';
  const customEulogist = document.getElementById('sms-eulogist-input')?.value || 'کربلایی محمدحسین پویانفر';
  const customTime = document.getElementById('sms-time-input')?.value || 'پنج‌شنبه ساعت ۱۹:۳۰';

  let text = '';
  if (templateType === 'ceremony') {
    text = `السلام علیک یا علی ابن الحسین (ع)
مراسم هفتگی هیئت شباب علی ابن الحسین (ع)
سخنران: ${customSpeaker}
مداح: ${customEulogist}
زمان: ${customTime}
مکان: حسینیه شباب علی ابن الحسین
اطلاعات بیشتر و پخش زنده:
shabab-ali.ir
لغو۱۱`;
  } else if (templateType === 'donation') {
    text = `خیر محترم و بانی گرامی؛
نذر و هدیه متبرک شما به هیئت شباب علی ابن الحسین (ع) با موفقیت دریافت گردید.
ان‌شاءالله در ثواب مجالس اهل‌بیت (ع) شریک و مأجور باشید.
کد پیگیری: SHB-98412
هیئت شباب علی ابن الحسین (ع)`;
  } else if (templateType === 'volunteer') {
    text = `خادم افتخاری ارجمند؛
ثبت‌نام شما در خادمین هیئت شباب علی ابن الحسین (ع) با موفقیت تأیید گردید.
جلسه توجیهی خادمان چهارشنبه ساعت ۱۸ در حسینیه برگزار می‌گردد.
هیئت شباب علی ابن الحسین (ع)`;
  }

  const previewBox = document.getElementById('sms-screen-text');
  const countBox = document.getElementById('sms-char-counter');
  if (previewBox) previewBox.innerText = text;
  if (countBox) {
    const chars = text.length;
    const parts = Math.ceil(chars / 70) || 1;
    countBox.textContent = `${chars} کاراکتر (${parts} پیامک)`;
  }
}

// Map Screen Management & Routing Functions
function renderMapScreen() {
  const mapData = window.AppState.husseiniyahMap || DEFAULT_MAP_DATA;

  // View elements
  const elName = document.getElementById('map-view-name');
  const elAddress = document.getElementById('map-view-address');
  const elMetro = document.getElementById('map-view-metro');
  const elBus = document.getElementById('map-view-bus');
  const elParking = document.getElementById('map-view-parking');
  const elNotes = document.getElementById('map-view-notes');
  const elCoords = document.getElementById('map-view-coords');
  const elIframe = document.getElementById('map-iframe');

  if (elName) elName.textContent = mapData.name;
  if (elAddress) elAddress.textContent = mapData.address;
  if (elMetro) elMetro.textContent = mapData.metro;
  if (elBus) elBus.textContent = mapData.bus;
  if (elParking) elParking.textContent = mapData.parking;
  if (elNotes) elNotes.textContent = mapData.notes || 'درب ورودی برادران از حیاط شمالی و درب خواهران از ورودی شرقی می‌باشد.';
  if (elCoords) elCoords.textContent = `${mapData.lat}, ${mapData.lng}`;

  // Update routing links
  const lat = mapData.lat || '35.7892';
  const lng = mapData.lng || '51.4328';

  const linkNeshan = document.getElementById('link-routing-neshan');
  const linkBalad = document.getElementById('link-routing-balad');
  const linkGoogle = document.getElementById('link-routing-google');
  const linkWaze = document.getElementById('link-routing-waze');

  if (linkNeshan) linkNeshan.href = `https://neshan.org/maps/@${lat},${lng},17z`;
  if (linkBalad) linkBalad.href = `https://balad.ir/location?latitude=${lat}&longitude=${lng}`;
  if (linkGoogle) linkGoogle.href = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  if (linkWaze) linkWaze.href = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;

  // Update iframe for OpenStreetMap
  if (elIframe) {
    const minLat = (parseFloat(lat) - 0.003).toFixed(4);
    const maxLat = (parseFloat(lat) + 0.003).toFixed(4);
    const minLng = (parseFloat(lng) - 0.004).toFixed(4);
    const maxLng = (parseFloat(lng) + 0.004).toFixed(4);
    elIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${minLng}%2C${minLat}%2C${maxLng}%2C${maxLat}&layer=mapnik&marker=${lat}%2C${lng}`;
  }

  // Populate Edit Form Fields
  const form = document.getElementById('map-edit-form');
  if (form) {
    if (form.map_name) form.map_name.value = mapData.name;
    if (form.map_address) form.map_address.value = mapData.address;
    if (form.map_lat) form.map_lat.value = mapData.lat;
    if (form.map_lng) form.map_lng.value = mapData.lng;
    if (form.map_metro) form.map_metro.value = mapData.metro;
    if (form.map_bus) form.map_bus.value = mapData.bus;
    if (form.map_parking) form.map_parking.value = mapData.parking;
    if (form.map_notes) form.map_notes.value = mapData.notes || '';
  }

  // Floor plan preview image if exists
  const imgBox = document.getElementById('map-floorplan-preview');
  if (imgBox) {
    if (mapData.imageUrl) {
      imgBox.innerHTML = `<img src="${mapData.imageUrl}" class="w-full h-auto rounded-xl border border-slate-700 shadow-md max-h-80 object-cover" alt="کروکی حسینیه">`;
    }
  }
}

function switchMapTab(tab) {
  const viewTab = document.getElementById('map-tab-view');
  const editTab = document.getElementById('map-tab-edit');
  const btnView = document.getElementById('btn-map-tab-view');
  const btnEdit = document.getElementById('btn-map-tab-edit');

  if (tab === 'view') {
    if (viewTab) viewTab.classList.remove('hidden');
    if (editTab) editTab.classList.add('hidden');
    if (btnView) {
      btnView.className = 'btn-primary text-xs px-4 py-2 cursor-pointer';
    }
    if (btnEdit) {
      btnEdit.className = 'btn-secondary text-xs px-4 py-2 cursor-pointer';
    }
  } else {
    if (viewTab) viewTab.classList.add('hidden');
    if (editTab) editTab.classList.remove('hidden');
    if (btnView) {
      btnView.className = 'btn-secondary text-xs px-4 py-2 cursor-pointer';
    }
    if (btnEdit) {
      btnEdit.className = 'btn-primary text-xs px-4 py-2 cursor-pointer';
    }
  }
}

function handleSaveMapForm(e) {
  e.preventDefault();
  const form = e.target;
  
  const updatedMap = {
    name: form.map_name.value.trim() || DEFAULT_MAP_DATA.name,
    address: form.map_address.value.trim() || DEFAULT_MAP_DATA.address,
    lat: form.map_lat.value.trim() || DEFAULT_MAP_DATA.lat,
    lng: form.map_lng.value.trim() || DEFAULT_MAP_DATA.lng,
    metro: form.map_metro.value.trim() || DEFAULT_MAP_DATA.metro,
    bus: form.map_bus.value.trim() || DEFAULT_MAP_DATA.bus,
    parking: form.map_parking.value.trim() || DEFAULT_MAP_DATA.parking,
    notes: form.map_notes.value.trim(),
    imageUrl: window.AppState.husseiniyahMap.imageUrl || ''
  };

  window.AppState.husseiniyahMap = updatedMap;
  localStorage.setItem('shabab_map_data', JSON.stringify(updatedMap));

  renderMapScreen();
  switchMapTab('view');
  alert('موقعیت، مشخصات و نقشه حسینیه با موفقیت به‌روزرسانی شد.');
}

function handleMapImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    window.AppState.husseiniyahMap.imageUrl = dataUrl;
    localStorage.setItem('shabab_map_data', JSON.stringify(window.AppState.husseiniyahMap));
    
    const imgBox = document.getElementById('map-floorplan-preview');
    if (imgBox) {
      imgBox.innerHTML = `<img src="${dataUrl}" class="w-full h-auto rounded-xl border border-slate-700 shadow-md max-h-80 object-cover" alt="کروکی حسینیه">`;
    }
    alert('تصویر کروکی نقشه با موفقیت بارگذاری گردید.');
  };
  reader.readAsDataURL(file);
}

function resetMapToDefault() {
  if (confirm('آیا مایل به بازگردانی تنظیمات نقشه به مقادیر پیش‌فرض هستید؟')) {
    window.AppState.husseiniyahMap = { ...DEFAULT_MAP_DATA };
    localStorage.setItem('shabab_map_data', JSON.stringify(DEFAULT_MAP_DATA));
    renderMapScreen();
    alert('نقشه با موفقیت به مختصات پیش‌فرض بازگردانده شد.');
  }
}

// ==========================================
// Video Archive & Upload Modal Management
// ==========================================
let tempVideoDataUrl = '';

function openAddVideoModal() {
  const modal = document.getElementById('add-video-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddVideoModal() {
  const modal = document.getElementById('add-video-modal');
  if (modal) modal.classList.add('hidden');
  const preview = document.getElementById('video-preview-player');
  if (preview) {
    preview.pause();
    preview.classList.add('hidden');
    preview.src = '';
  }
  const fileInfo = document.getElementById('video-file-info');
  if (fileInfo) fileInfo.textContent = '';
  const form = document.getElementById('add-video-form');
  if (form) form.reset();
  tempVideoDataUrl = '';
}

function handleVideoFileSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById('video-preview-player');
  const fileInfo = document.getElementById('video-file-info');
  
  const objectUrl = URL.createObjectURL(file);
  tempVideoDataUrl = objectUrl;

  if (preview) {
    preview.src = objectUrl;
    preview.classList.remove('hidden');
  }
  if (fileInfo) {
    fileInfo.textContent = `فایل انتخاب شد: ${file.name} (${(file.size / (1024 * 1024)).toFixed(1)} مگابایت)`;
  }
}

function handleAddVideoSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const title = form.video_title.value.trim();
  const speaker = form.video_speaker.value.trim() || 'ذاکرین و خطبای هیئت شباب علی ابن الحسین (ع)';
  const category = form.video_category.value;
  const quality = form.video_quality.value;
  const duration = form.video_duration.value.trim() || '۰۶:۳۰';
  const externalUrl = form.video_url.value.trim();
  const desc = form.video_desc.value.trim() || 'کلیپ اختصاصی کارگروه رسانه هیئت شباب علی ابن الحسین (ع)';

  if (!title) {
    alert('لطفاً عنوان ویدیو را وارد فرمایید.');
    return;
  }

  const finalVideoUrl = tempVideoDataUrl || externalUrl || '';

  const newVideo = {
    id: Date.now(),
    title,
    speaker,
    occasion: category,
    category,
    duration,
    quality,
    views: '۱',
    videoUrl: finalVideoUrl,
    thumbnailText: category,
    description: desc
  };

  window.AppState.videos.unshift(newVideo);
  localStorage.setItem('shabab_videos', JSON.stringify(window.AppState.videos));

  renderVideoArchive();
  renderAdminStats();
  closeAddVideoModal();

  alert('ویدیو با موفقیت بارگذاری و در آرشیو کلیپ‌های هیئت منتشر شد!');
}

function renderVideoArchive() {
  const container = document.getElementById('video-archive-grid');
  if (!container) return;

  const countBadge = document.getElementById('video-count-badge');
  if (countBadge) {
    countBadge.textContent = `${window.AppState.videos.length} ویدیو و کلیپ فعال`;
  }

  container.innerHTML = window.AppState.videos.map(item => `
    <div class="glass-panel p-5 border-slate-700/60 hover:border-red-600/40 transition">
      <div class="relative h-60 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
        ${item.videoUrl ? `
          <video class="w-full h-full object-cover" controls poster="">
            <source src="${item.videoUrl}">
            مرورگر شما از پخش مستقیم ویدیو پشتیبانی نمی‌کند.
          </video>
        ` : `
          <div class="text-center p-4">
            <div class="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition mx-auto mb-2" onclick="playVideoModal(${item.id})">
              <svg class="w-8 h-8 fill-current mr-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span class="text-xs text-amber-300 font-bold block">${item.thumbnailText || 'هیئت شباب'}</span>
          </div>
        `}
        <span class="absolute bottom-3 left-3 bg-black/80 text-white font-mono text-[11px] px-2 py-0.5 rounded">${item.duration}</span>
        <span class="absolute top-3 right-3 bg-red-700 text-white font-bold text-[10px] px-2 py-0.5 rounded">${item.quality || 'Full HD'}</span>
      </div>
      <h3 class="font-bold text-white text-base mb-1">${item.title}</h3>
      <p class="text-xs text-amber-400 mb-2 font-medium">${item.speaker}</p>
      <p class="text-xs text-slate-400 mb-4 line-clamp-2">${item.description}</p>
      <div class="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
        <span>${item.views} بازدید</span>
        <div class="flex items-center gap-3">
          <button onclick="playVideoModal(${item.id})" class="text-red-400 hover:text-red-300 font-semibold cursor-pointer">تماشا</button>
          <span>•</span>
          <button onclick="alert('لینک اشتراک‌گذاری کپی گردید.')" class="text-amber-400 hover:text-amber-300 cursor-pointer">اشتراک‌گذاری ویدئو</button>
        </div>
      </div>
    </div>
  `).join('');
}

function playVideoModal(videoId) {
  const item = window.AppState.videos.find(v => v.id === videoId);
  if (!item) return;

  const modal = document.getElementById('video-player-modal');
  const titleEl = document.getElementById('video-player-title');
  const descEl = document.getElementById('video-player-desc');
  const videoElem = document.getElementById('video-player-element');

  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = `${item.speaker} • ${item.occasion} • ${item.duration}`;

  if (videoElem) {
    if (item.videoUrl) {
      videoElem.src = item.videoUrl;
      videoElem.classList.remove('hidden');
      videoElem.play().catch(() => {});
    } else {
      videoElem.classList.add('hidden');
    }
  }

  if (modal) modal.classList.remove('hidden');
}

function closeVideoPlayerModal() {
  const modal = document.getElementById('video-player-modal');
  const videoElem = document.getElementById('video-player-element');
  if (videoElem) {
    videoElem.pause();
    videoElem.src = '';
  }
  if (modal) modal.classList.add('hidden');
}

// ==========================================
// Photo Gallery & Upload Modal Management
// ==========================================
let tempPhotoDataUrl = '';

function openAddPhotoModal() {
  const modal = document.getElementById('add-photo-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddPhotoModal() {
  const modal = document.getElementById('add-photo-modal');
  if (modal) modal.classList.add('hidden');
  const previewBox = document.getElementById('photo-preview-box');
  if (previewBox) previewBox.classList.add('hidden');
  const previewImg = document.getElementById('photo-preview-img');
  if (previewImg) previewImg.src = '';
  const form = document.getElementById('add-photo-form');
  if (form) form.reset();
  tempPhotoDataUrl = '';
}

function handlePhotoFileSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    tempPhotoDataUrl = e.target.result;
    const previewBox = document.getElementById('photo-preview-box');
    const previewImg = document.getElementById('photo-preview-img');
    if (previewImg) previewImg.src = tempPhotoDataUrl;
    if (previewBox) previewBox.classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}

function handleAddPhotoSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const title = form.photo_title.value.trim();
  const occasion = form.photo_occasion.value.trim() || 'مراسم هفتگی و مناسبتی هیئت';
  const category = form.photo_category.value;
  const photographer = form.photo_photographer.value.trim() || 'کارگروه رسانه هیئت شباب علی ابن الحسین (ع)';
  const desc = form.photo_desc.value.trim() || title;

  if (!title) {
    alert('لطفاً عنوان تصویر را وارد فرمایید.');
    return;
  }

  const newPhoto = {
    id: Date.now(),
    title,
    occasion,
    category,
    photographer,
    photoCount: 'گزارش تک‌عکس باکیفیت',
    badge: category,
    gradient: 'from-amber-950 via-slate-900 to-black',
    imageUrl: tempPhotoDataUrl || '',
    description: desc
  };

  window.AppState.photos.unshift(newPhoto);
  localStorage.setItem('shabab_photos', JSON.stringify(window.AppState.photos));

  renderPhotoGallery();
  renderAdminStats();
  closeAddPhotoModal();

  alert('تصویر با موفقیت بارگذاری و در نگارخانه تصاویر هیئت ثبت شد!');
}

function renderPhotoGallery() {
  const container = document.getElementById('photo-gallery-grid');
  if (!container) return;

  const countBadge = document.getElementById('photo-count-badge');
  if (countBadge) {
    countBadge.textContent = `${window.AppState.photos.length} گزارش تصویری فعال`;
  }

  container.innerHTML = window.AppState.photos.map(item => `
    <div class="glass-panel overflow-hidden group cursor-pointer border-slate-700/60 hover:border-amber-500/50 transition" onclick="viewPhotoModal(${item.id})">
      <div class="h-56 bg-gradient-to-tr ${item.gradient || 'from-red-950 via-slate-900 to-black'} relative flex items-center justify-center p-4 text-center overflow-hidden">
        ${item.imageUrl ? `
          <img src="${item.imageUrl}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="${item.title}">
        ` : `
          <div class="text-center">
            <div class="text-4xl text-amber-500/40 mb-2 font-serif">${item.badge || 'یا حسین'}</div>
            <span class="text-xs text-slate-300">${item.occasion}</span>
          </div>
        `}
        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
        <span class="absolute top-3 right-3 bg-slate-950/80 text-amber-400 text-[10px] px-2.5 py-1 rounded-full border border-amber-500/30 font-semibold">${item.category || 'نگارخانه'}</span>
      </div>
      <div class="p-4">
        <h4 class="font-bold text-white text-sm mb-1">${item.title}</h4>
        <p class="text-xs text-slate-400 mb-1">${item.occasion} • ${item.photoCount || 'تصاویر برگزیده'}</p>
        <p class="text-[11px] text-amber-400/80">عکاس: ${item.photographer || 'کارگروه رسانه'}</p>
      </div>
    </div>
  `).join('');
}

function viewPhotoModal(photoId) {
  const item = window.AppState.photos.find(p => p.id === photoId);
  if (!item) return;

  const modal = document.getElementById('photo-viewer-modal');
  const titleEl = document.getElementById('photo-viewer-title');
  const metaEl = document.getElementById('photo-viewer-meta');
  const descEl = document.getElementById('photo-viewer-desc');
  const imgEl = document.getElementById('photo-viewer-image');
  const fallbackEl = document.getElementById('photo-viewer-fallback');

  if (titleEl) titleEl.textContent = item.title;
  if (metaEl) metaEl.textContent = `${item.occasion} • عکاس: ${item.photographer || 'کارگروه رسانه'}`;
  if (descEl) descEl.textContent = item.description || '';

  if (item.imageUrl) {
    if (imgEl) {
      imgEl.src = item.imageUrl;
      imgEl.classList.remove('hidden');
    }
    if (fallbackEl) fallbackEl.classList.add('hidden');
  } else {
    if (imgEl) imgEl.classList.add('hidden');
    if (fallbackEl) {
      fallbackEl.classList.remove('hidden');
      fallbackEl.textContent = item.badge || 'هیئت شباب علی ابن الحسین (ع)';
    }
  }

  if (modal) modal.classList.remove('hidden');
}

function closePhotoViewerModal() {
  const modal = document.getElementById('photo-viewer-modal');
  if (modal) modal.classList.add('hidden');
}

// Global window registrations
window.openAddVideoModal = openAddVideoModal;
window.closeAddVideoModal = closeAddVideoModal;
window.handleVideoFileSelected = handleVideoFileSelected;
window.handleAddVideoSubmit = handleAddVideoSubmit;
window.playVideoModal = playVideoModal;
window.closeVideoPlayerModal = closeVideoPlayerModal;

window.openAddPhotoModal = openAddPhotoModal;
window.closeAddPhotoModal = closeAddPhotoModal;
window.handlePhotoFileSelected = handlePhotoFileSelected;
window.handleAddPhotoSubmit = handleAddPhotoSubmit;
window.viewPhotoModal = viewPhotoModal;
window.closePhotoViewerModal = closePhotoViewerModal;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  parseCurrentHash();
  renderAudioArchive();
  renderVideoArchive();
  renderPhotoGallery();
  renderAdminStats();
  updateSmsPreview();
  renderMapScreen();

  // Countdown timer simulation for ceremonies
  let seconds = 3600 * 14 + 1800 + 45;
  setInterval(() => {
    seconds--;
    if (seconds < 0) seconds = 86400 * 3;
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');
    if (hEl) hEl.textContent = String(hrs).padStart(2, '۰');
    if (mEl) mEl.textContent = String(mins).padStart(2, '۰');
    if (sEl) sEl.textContent = String(secs).padStart(2, '۰');
  }, 1000);
});

