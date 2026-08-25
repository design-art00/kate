
/* ============================================================
   ✏️ DATA — здесь меняешь весь контент под себя
   ============================================================ */
const ME = {
  name:    "Екатерина",
  nameEn:  "Ekaterina",
  fullName:"Екатерина Бабышкина",
  fullNameEn:"Ekaterina Babyshkina",
  initial: "Е",
  role:    "UX/UI дизайнер",
  roleEn:  "UX/UI designer",
  tagline: "Интерфейсы, дизайн-системы, продуктовый дизайн",
  taglineEn:"Interfaces, design systems, product design",
  photo:   "images/photo.jpg",   // ✏️ фото на рабочий стол
  intro: {       // ✏️ текст-знакомство на рабочем столе
    title:"Добро пожаловать в моё рабочее пространство",
    titleEn:"Welcome to my workspace",
    text:"Здесь я думаю, исследую, проектирую, собираю интерфейсы и раскладываю всё по полочкам. А ещё здесь можно посмотреть, что у меня получается. Я UX/UI дизайнер и люблю превращать сложные вещи в понятные системы.",
    textEn:"This is where I think, research, design, build interfaces, and put everything in its place. You can also see what I have been working on here. I am a UX/UI designer, and I love turning complicated things into clear systems.",
    caption:"Заходи. Рабочий стол открыт.",
    captionEn:"Come on in. The desktop is open."
  },
  email:   "hello@example.com",           // ✏️
  telegram:"https://t.me/username",       // ✏️
  behance: "https://behance.net/username",// ✏️
  city:    "Москва",
  cityEn:  "Moscow"
};

const PROJECTS = [
  { id:"p1", name:"Корпоративный сайт для строительной компании", nameEn:"Corporate website for a construction company", kind:"Веб-сайты", year:"2025",
    grad:"linear-gradient(140deg,#ff9ec0,#ff5f8f)", mark:"К", image:"images/p1-image.jpg",
    role:"UX/UI-дизайнер (студия ArtGorka)", roleEn:"UX/UI designer (ArtGorka studio)",
    client:"Строительная компания, Петрозаводск", clientEn:"Construction company, Petrozavodsk",
    tags:["UX/UI","Веб-дизайн","Редизайн"],
    tagsEn:["UX/UI","Web design","Redesign"],
    text:["Полный редизайн корпоративного сайта. Анализ существующей версии выявил нарушения юзабилити-стандартов, неудачное размещение кнопок призыва к действию и проблемы в композиции контента.",
          "На основе анализа конкурентов и целевой аудитории спроектировала новую архитектуру сайта. Главная страница сделана с акцентом на фотоконтент, отдельное внимание — интерактивному конструктору отделки квартир: вручную перекрасила больше 30 вариантов цветовых решений.",
          "Итог — 13 страниц и больше 100 отдельных блоков с единым UI-китом. Все макеты адаптированы под разные разрешения экранов и переданы разработчику с подробными комментариями."],
    textEn:["A full redesign of the corporate website. Auditing the existing version revealed usability issues, poorly placed call-to-action buttons, and problems with content composition.",
          "Based on competitor and target-audience research, I designed a new site architecture. The homepage leans on photo content, with special attention to an interactive apartment-finishing configurator: I manually recolored more than 30 palette options.",
          "The result: 13 pages and over 100 individual blocks built on a single UI kit. Every layout was adapted for different screen resolutions and handed off to the developer with detailed comments."],
    link:"https://ekaterina-design.tilda.ws/ksm",
    gallery:["images/p1-gallery-1.jpg","images/p1-gallery-2.jpg","images/p1-gallery-3.jpg"], },
  { id:"p2", name:"Персональный сайт Николая Соловьёва", nameEn:"Personal website for Nikolai Solovyov", kind:"Веб-сайты", year:"2025",
    grad:"linear-gradient(140deg,#a8d8ff,#5b8dff)", mark:"Н",
    image:"images/p2-image.jpg",
    role:"UX/UI-дизайнер (концепция, вайрфреймы, визуальная система)",
    roleEn:"UX/UI designer (concept, wireframes, visual system)",
    client:"Николай Соловьёв — предприниматель, независимый директор, CEO AnyRoads",
    clientEn:"Nikolai Solovyov — entrepreneur, independent director, CEO of AnyRoads",
    tags:["Личный бренд","Wireframe","UI-кит"],
    tagsEn:["Personal brand","Wireframes","UI kit"],
    text:["Персональный сайт независимого директора и автора телеграм-канала «Директор по цифрам». Задача — показать экспертность и премиальность без лишнего пафоса: сайт с разделами «Обо мне», «Опыт», «Диагностика бизнеса», «Услуги», «Блог» и формой записи на консультацию.",
          "Начала с исследования: собрала доску настроения из референсов агентских и персональных сайтов, вывела общий язык — крупная гротескная типографика, швейцарская сетка, композиция в «журнальном стиле», чередование чёрного, белого/серого и акцентного красного, чёрно-белая фотография. Зафиксировала это в концепции: сайт должен передавать профессионализм и премиальность через минимализм.",
          "Дальше — структура: карта сайта по всем разделам и их содержимому, затем чёрно-белые вайрфреймы для каждой страницы (главная, о себе, статьи блога, диагностика бизнеса, календарь мероприятий), чтобы согласовать логику и контент до перехода к визуалу. Отдельно подобрала палитру (40% чёрный, 40% белый, 15% серый, 5% красный) и типографику — Inter Tight."],
    textEn:["A personal website for an independent director and author of the Telegram channel «Director by the Numbers». The brief was to convey expertise and a premium feel without unnecessary pomp: a site with «About», «Experience», «Business Diagnostics», «Services», and «Blog» sections, plus a consultation booking form.",
          "I started with research: put together a moodboard from agency and personal-site references, and distilled a shared visual language — bold grotesque typography, a Swiss grid, a magazine-style composition, an alternation of black, white/grey and accent red, and black-and-white photography. I locked this into a concept: the site should communicate professionalism and a premium feel through minimalism.",
          "Next came structure: a sitemap covering every section and its content, then black-and-white wireframes for each page (home, about, blog articles, business diagnostics, event calendar) to align logic and content before moving to visuals. I separately picked the palette (40% black, 40% white, 15% grey, 5% red) and the typeface — Inter Tight."],
    gallery:["images/p2-gallery-1.jpg","images/p2-gallery-2.jpg","images/p2-gallery-3.jpg","images/p2-gallery-4.jpg"],
    link:"https://www.figma.com/design/eNpYTiWLX0AfjMhrgjYNm1/",
    protoLink:"https://www.figma.com/proto/eNpYTiWLX0AfjMhrgjYNm1/%D0%A1%D0%B0%D0%B9%D1%82_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9-%D0%A1%D0%BE%D0%BB%D0%BE%D0%B2%D1%8C%D0%B5%D0%B2?node-id=301-7202&viewport=3542%2C2498%2C0.35&t=j1KduWU0T54gZnIp-1&scaling=contain&content-scaling=fixed&page-id=301%3A7172",
    liveLink:"https://nikolaisolovyev.ru/" },
  { id:"p3", name:"Личный кабинет", nameEn:"Personal account", kind:"Личные кабинеты", year:"2025",
    grad:"linear-gradient(140deg,#d6b4fc,#8b5cf6)", mark:"М",
    image:"images/p3-image.jpg",
    role:"UX/UI-дизайнер — проектирование интерфейса личного кабинета",
    roleEn:"UX/UI designer — personal account interface design",
    client:"B2B-платформа для оформления и отслеживания заказов",
    clientEn:"A B2B platform for placing and tracking orders",
    tags:["Личный кабинет","UX/UI","Дизайн-система"],
    tagsEn:["Personal account","UX/UI","Design system"],
    text:["Личный кабинет для заказчиков B2B-платформы: авторизация, запросы, оформление и отслеживание заказов, корзина, архив, проекты, поддержка и профиль. Ключевая задача — сделать понятным весь путь заказа от заявки до доставки, не перегружая интерфейс.",
          "Спроектировала полный жизненный цикл заказа — 7 статусов (в обработке, согласование сроков, отказ, производство, готов к отгрузке, отгружен, доставлен), у каждого своя карточка с чек-листом этапов и историей переписки по заказу. Отдельно проработала микро-флоу профиля: подтверждение смены телефона и почты кодом, индикатор заполненности анкеты, модалки подтверждения перед сохранением изменений.",
          "Итог — полноценный UI-кит и десятки экранов личного кабинета с согласованной системой компонентов, готовые к передаче в разработку."],
    textEn:["A personal account for a B2B platform's customers: authorization, requests, placing and tracking orders, cart, archive, projects, support, and profile. The key task was to make the entire order journey — from request to delivery — clear without overloading the interface.",
          "I designed the full order lifecycle — 7 statuses (processing, timeline agreement, declined, in production, ready to ship, shipped, delivered), each with its own card, a checklist of stages, and the order's message history. I separately worked out profile micro-flows: confirming a phone or email change with a code, a profile-completeness indicator, and confirmation modals before saving changes.",
          "The result: a complete UI kit and dozens of personal-account screens built on a consistent component system, ready to hand off to development."],
    gallery:["images/p3-gallery-1.jpg","images/p3-gallery-2.jpg","images/p3-gallery-3.jpg"],
    link:"https://www.figma.com/design/mdJFpFbQbtuIpo1OkfGTEK/" },
  { id:"p4", name:"Название проекта", nameEn:"Project name", kind:"Веб-сайты", year:"2024",
    grad:"linear-gradient(140deg,#9beecd,#2fb99a)", mark:"D",
    role:"Дизайн и вёрстка", roleEn:"Design and layout", client:"Личный проект", clientEn:"Personal project",
    tags:["Landing","Адаптив","Анимация"],
    tagsEn:["Landing page","Responsive","Animation"],
    text:["Одностраничный сайт: структура, визуал, адаптив под мобильные и лёгкая анимация появления блоков."],
    textEn:["A one-page site: structure, visuals, mobile-responsive layout, and light entrance animations for the blocks."],
    link:"#" },
  { id:"p5", name:"Название проекта", nameEn:"Project name", kind:"Сборник по граф. дизайну", year:"2026",
    grad:"linear-gradient(140deg,#ffd89b,#f79a3e)", mark:"E",
    role:"Иллюстратор", roleEn:"Illustrator", client:"Издание", clientEn:"Publication",
    tags:["Digital","Серия"],
    tagsEn:["Digital","Series"],
    text:["Серия иллюстраций для материала: скетчи, финальная отрисовка, адаптация под форматы."],
    textEn:["A series of illustrations for an article: sketches, final artwork, and adaptation across formats."],
    link:"#" },
  { id:"p6", name:"Название проекта", nameEn:"Project name", kind:"Интернет-магазины", year:"2026",
    grad:"linear-gradient(140deg,#ffc2e2,#c084fc)", mark:"F",
    role:"Дизайнер", roleEn:"Designer", client:"Бренд", clientEn:"Brand",
    tags:["Packaging","Печать"],
    tagsEn:["Packaging","Print"],
    text:["Дизайн упаковки линейки продуктов: концепция, макеты, подготовка к печати."],
    textEn:["Packaging design for a product line: concept, layouts, and print preparation."],
    link:"#" }
];

const NOTES = [
  { id:"n1", title:"О чём этот сайт", titleEn:"What this site is about", date:"21 августа", dateEn:"August 21", body:`
    <h2>О чём этот сайт</h2>
    <p>Это моё портфолио, собранное как рабочий стол. Папка «Проекты» — кейсы, «Заметки» — мысли о процессе, «Обо мне» — короткое резюме.</p>
    <p>Открывай иконки двойным кликом (на телефоне — одним касанием), окна можно двигать и складывать в док. Слева — плашка с цветными кружками: меняет тему сайта.</p>`,
    bodyEn:`
    <h2>What this site is about</h2>
    <p>This is my portfolio, built as a desktop. The «Projects» folder holds case studies, «Notes» are thoughts on process, «About» is a short bio.</p>
    <p>Open icons with a double click (a single tap on mobile) — windows can be dragged around and minimized to the dock. On the left, the row of colored dots switches the site theme.</p>` },
  { id:"n2", title:"Как я работаю", titleEn:"How I work", date:"14 августа", dateEn:"August 14", body:`
    <h2>Как я работаю</h2>
    <ul>
      <li><b>Бриф и вопросы.</b> Сначала выясняю задачу, а не сразу рисую.</li>
      <li><b>Референсы и концепция.</b> 2–3 направления, выбираем вместе.</li>
      <li><b>Дизайн.</b> Итерации с правками, всё в одном файле.</li>
      <li><b>Передача.</b> Исходники, гайд, поддержка после сдачи.</li>
    </ul>`,
    bodyEn:`
    <h2>How I work</h2>
    <ul>
      <li><b>Brief and questions.</b> I figure out the actual problem first, rather than jumping straight into visuals.</li>
      <li><b>References and concept.</b> 2–3 directions, we choose together.</li>
      <li><b>Design.</b> Iterations with feedback, all in one file.</li>
      <li><b>Handoff.</b> Source files, a style guide, support after delivery.</li>
    </ul>` },
  { id:"n3", title:"Что мне интересно", titleEn:"What I am into", date:"2 августа", dateEn:"August 2", body:`
    <h2>Что мне интересно</h2>
    <p>Бренды с характером, типографика, интерфейсы, где видно заботу о человеке, и моушн, который объясняет, а не украшает.</p>
    <p>Открыта к сотрудничеству — пиши в контакты.</p>`,
    bodyEn:`
    <h2>What I am into</h2>
    <p>Brands with character, typography, interfaces that show real care for the person using them, and motion that explains rather than just decorates.</p>
    <p>Open to collaborations — reach out via contacts.</p>` },
  { id:"n4", title:"Список дел", titleEn:"To-do list", date:"29 июля", dateEn:"July 29", body:`
    <h2>Список дел</h2>
    <ul><li>Заменить тексты в проектах ✏️</li><li>Добавить обложки кейсов</li><li>Вписать настоящие ссылки</li><li>Купить домен</li></ul>`,
    bodyEn:`
    <h2>To-do list</h2>
    <ul><li>Replace placeholder project text ✏️</li><li>Add case-study covers</li><li>Fill in real links</li><li>Buy a domain</li></ul>` }
];

/* ✏️ МОЯ ПОЛКА — книги и фильмы. Поменяй title/author/year, при желании — обложку
   (image: "data:..." или ссылка на картинку) вместо цветного плейсхолдера. */
const SHELF = [
  { id:"b1", type:"book",  title:"Бедные люди", titleEn:"Poor Folk", author:"Фёдор Достоевский", authorEn:"Fyodor Dostoevsky", year:"1846", mark:"К", grad:"linear-gradient(150deg,#ffb199,#ff6a6a)", image:"images/b1-image.jpg" },
  { id:"b2", type:"book", title:"Кто мы такие? Гены, наше тело, общество", titleEn:"Who Are We? Genes, Body, Society", author:"Роберт Сапольски", authorEn:"Robert Sapolsky", year:"2021", mark:"К", grad:"linear-gradient(150deg,#a8e6cf,#3bb98b)", image:"images/b2-image.jpg" },
  { id:"b3", type:"book", title:"Обыкновенная история", titleEn:"An Ordinary Story", author:"Иван Гончаров", authorEn:"Ivan Goncharov", year:"1847", mark:"О", grad:"linear-gradient(150deg,#cdb7ff,#7c5cd6)", image:"images/b3-image.jpg" },
  { id:"b4", type:"book", title:"Куст сирени", titleEn:"The Lilac Bush", author:"Александр Куприн", authorEn:"Alexander Kuprin", year:"1894", mark:"К", grad:"linear-gradient(150deg,#ffd6a5,#f4a261)", image:"images/b4-image.jpg" },
  { id:"b5", type:"book", title:"И вспыхнет пламя", titleEn:"Catching Fire", author:"Сьюзен Коллинз", authorEn:"Suzanne Collins", year:"2009", mark:"И", grad:"linear-gradient(150deg,#ffb4d3,#ee6ba4)", image:"images/b5-image.jpg" },
  { id:"b6", type:"book", title:"Рассвет Жатвы", titleEn:"Sunrise on the Reaping", author:"Сьюзен Коллинз", authorEn:"Suzanne Collins", year:"2025", mark:"Р", grad:"linear-gradient(150deg,#a0c4ff,#3b6ff5)", image:"images/b6-image.jpg" },
  { id:"b7", type:"book", title:"Эгоистичный ген", titleEn:"The Selfish Gene", author:"Ричард Докинз", authorEn:"Richard Dawkins", year:"1976", mark:"Э", grad:"linear-gradient(150deg,#9beecd,#2fb99a)", image:"images/b7-image.jpg" },
  { id:"b8", type:"book", title:"Человек, который смеется", titleEn:"The Man Who Laughs", author:"Виктор Гюго", authorEn:"Victor Hugo", year:"1869", mark:"Ч", grad:"linear-gradient(150deg,#ffcf9e,#f79a3e)", image:"images/b8-image.jpg" },
  { id:"b9", type:"book", title:"Цветы для Элджернона", titleEn:"Flowers for Algernon", author:"Дэниел Киз", authorEn:"Daniel Keyes", year:"1966", mark:"Ц", grad:"linear-gradient(150deg,#d7c4ff,#8b5cf6)", image:"images/b9-image.jpg" },
  { id:"b10", type:"book", title:"Мартин Иден", titleEn:"Martin Eden", author:"Джек Лондон", authorEn:"Jack London", year:"1909", mark:"М", grad:"linear-gradient(150deg,#ffb199,#ff6a6a)", image:"images/b10-image.jpg" },
  { id:"b11", type:"book", title:"Евгений Онегин", titleEn:"Eugene Onegin", author:"Александр Пушкин", authorEn:"Alexander Pushkin", year:"1833", mark:"Е", grad:"linear-gradient(150deg,#b8e8e0,#3bb98b)", image:"images/b11-image.jpg" },
  { id:"b12", type:"book", title:"Рассказы", titleEn:"Stories", author:"Антон Чехов", authorEn:"Anton Chekhov", year:"1890-е", mark:"Р", grad:"linear-gradient(150deg,#ffc2e2,#c084fc)", image:"images/b12-image.jpg" },
  { id:"m1", type:"movie", title:"Название фильма", titleEn:"Movie title", author:"Режиссёр", authorEn:"Director",  year:"2024", mark:"Ф", grad:"linear-gradient(150deg,#a0c4ff,#3b6ff5)" },
  { id:"m2", type:"movie", title:"Название фильма", titleEn:"Movie title", author:"Режиссёр", authorEn:"Director",  year:"2023", mark:"Ф", grad:"linear-gradient(150deg,#ffd6a5,#f4a261)" },
  { id:"m3", type:"movie", title:"Название фильма", titleEn:"Movie title", author:"Режиссёр", authorEn:"Director",  year:"2022", mark:"Ф", grad:"linear-gradient(150deg,#ffb4d3,#ee6ba4)" }
];

/* ✏️ ПОГОДА — два города в правом верхнем углу.
   Координаты нужны потому, что бесплатный API (Open-Meteo, без ключей) ищет по lat/lon.
   Найти координаты своего города: https://www.google.com/maps -> ПКМ по точке -> первые числа в подсказке. */
const WEATHER_CITIES = [
  { name:"Санкт-Петербург", nameEn:"Saint Petersburg",      lat:59.9311, lon:30.3609 },
  { name:"Комсомольск-на-Амуре", nameEn:"Komsomolsk-on-Amur", lat:50.5500, lon:137.0069 }
];

const APPS = {
  projects:{ title:"Проекты", titleEn:"Projects",  icon:"ic-folder", img:"images/projects.png", w:880, h:580 },
  notes:   { title:"Заметки", titleEn:"Notes",  icon:"ic-notes",  img:"images/notes.png", w:800, h:540 },
  about:   { title:"Обо мне", titleEn:"About me",  icon:"ic-user",   img:"images/about.png", w:660, h:560 },
  contacts:{ title:"Контакты", titleEn:"Contacts", icon:"ic-mail",   w:560, h:480 },
  resume:  { title:"Резюме.pdf", titleEn:"Resume.pdf", icon:"ic-doc", img:"images/resume.png", w:600, h:560 },
  shelf:   { title:"Моя полка", titleEn:"My shelf", icon:"ic-shelf", img:"images/shelf.png", w:800, h:540 },
  stickers:{ title:"Стикеры", titleEn:"Stickers",  icon:"ic-sticky", img:"images/stickers.png", w:760, h:560 },
  terminal:{ title:"Терминал", titleEn:"Terminal", icon:"ic-term",   w:620, h:400 },
  trash:   { title:"Корзина", titleEn:"Trash",  icon:"ic-trash",  w:520, h:340 }
};

const MUSIC_EMBED_URL = "https://music.yandex.ru/iframe/playlist/mntnai/3"; // ✏️ ссылка на плейлист-виджет

const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const ic = (n,cls="ic")=>`<svg class="${cls}"><use href="#${n}"/></svg>`;
const plural = n => LANG==="en"
  ? n+" "+(n===1?"item":"items")
  : n+" "+(n%10===1&&n%100!==11 ? "объект" : (n%10>=2&&n%10<=4&&(n%100<10||n%100>=20) ? "объекта" : "объектов"));
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const isTouch = matchMedia("(pointer:coarse)").matches;
const vw = ()=> innerWidth || document.documentElement.clientWidth || 1280;
const vh = ()=> innerHeight || document.documentElement.clientHeight || 800;
const isNarrow = ()=> vw() < 760;

/* ---------------- ТЕМА (цветные кружочки слева) ---------------- */
/* ✏️ цвета тем: id должен совпадать с html[data-theme="..."] в CSS */
const THEMES = [
  { id:"blue",   name:"Голубая",    nameEn:"Blue",   dot:"linear-gradient(150deg,#9ed8ff,#4a9df0)" },
  { id:"green",  name:"Зелёная",    nameEn:"Green",  dot:"linear-gradient(150deg,#a8eec7,#3bb98b)" },
  { id:"pink",   name:"Розовая",    nameEn:"Pink",   dot:"linear-gradient(150deg,#ffb4d3,#ee6ba4)" },
  { id:"purple", name:"Фиолетовая", nameEn:"Purple", dot:"linear-gradient(150deg,#cdb7ff,#7c5cd6)" }
];
const DEFAULT_THEME = "pink";     // ✏️ тема по умолчанию
const THEME_KEY = "portfolio-theme";

function renderThemeDots(){
  $("#themeDots").innerHTML = THEMES.map(th=>`
    <button class="tp-dot" role="radio" aria-checked="${document.documentElement.dataset.theme===th.id}" aria-label="${esc(loc(th,"name"))}"
            title="${esc(loc(th,"name"))}" data-theme-set="${th.id}" style="--dot:${th.dot}"></button>`).join("");
}

function setTheme(id){
  if(!THEMES.some(t=>t.id===id)) id = DEFAULT_THEME;
  document.documentElement.dataset.theme = id;
  $$("#themeDots .tp-dot").forEach(d=>d.setAttribute("aria-checked", String(d.dataset.themeSet===id)));
  try{ localStorage.setItem(THEME_KEY,id); }catch(e){}
  return id;
}
function cycleTheme(){
  const i = THEMES.findIndex(t=>t.id===document.documentElement.dataset.theme);
  return setTheme(THEMES[(i+1) % THEMES.length].id);
}
(function initTheme(){
  let saved=null;
  try{ saved=localStorage.getItem(THEME_KEY); }catch(e){}
  setTheme(saved || DEFAULT_THEME);
})();
$("#themeDots").addEventListener("click",e=>{
  const b=e.target.closest("[data-theme-set]");
  if(b) setTheme(b.dataset.themeSet);
});

/* ---------------- ЯЗЫК (RU / EN) ---------------- */
/* ✏️ читает *En-поля у данных (ME/PROJECTS/NOTES/SHELF/WEATHER_CITIES/APPS)
   и словарь UI ниже. loc(obj,"key") -> obj.keyEn на английском, иначе obj.key. */
function loc(obj, key){
  if(!obj) return "";
  if(LANG==="en"){
    const v = obj[key+"En"];
    if(v!==undefined) return v;
  }
  return obj[key];
}
const KIND_LABELS_EN = {
  "Веб-сайты":"Websites",
  "Личные кабинеты":"Personal accounts",
  "Сборник по граф. дизайну":"Graphic design collection",
  "Интернет-магазины":"Online stores"
};
function kindLabel(k){ return LANG==="en" ? (KIND_LABELS_EN[k]||k) : k; }

const UI = {
  menuHelp:      { ru:"Помощь", en:"Help" },
  menuAbout:     { ru:"Об этом дизайнере", en:"About the designer" },
  menuProjects:  { ru:"Проекты", en:"Projects" },
  menuContacts:  { ru:"Контакты", en:"Contacts" },
  menuLock:      { ru:"Заблокировать экран", en:"Lock screen" },
  lockSlide:     { ru:"сдвиньте, чтобы разблокировать", en:"slide to unlock" },
  lockSlideAria: { ru:"Сдвиньте, чтобы разблокировать", en:"Slide to unlock" },
  lockHint:      { ru:"потяните кружок вправо", en:"drag the circle to the right" },
  themeTitle:    { ru:"Тема", en:"Theme" },
  themeAria:     { ru:"Цветовая тема", en:"Color theme" },
  playlistLabel: { ru:"Плейлист", en:"Playlist" },
  weatherNoData: { ru:"нет данных", en:"no data" },
  scNote:        { ru:"Добавьте что-то свое на мой сайт", en:"Add something of your own to my site" },

  finderAll:     { ru:"Все проекты", en:"All projects" },
  finderTags:    { ru:"Теги", en:"Tags" },
  finderYears:   { ru:"Годы", en:"Years" },
  finderEmpty:   { ru:"Ничего не найдено", en:"Nothing found" },

  projYear:      { ru:"Год", en:"Year" },
  projRole:      { ru:"Роль", en:"Role" },
  projClient:    { ru:"Клиент", en:"Client" },
  projTags:      { ru:"Теги", en:"Tags" },
  projNav:       { ru:"Навигация", en:"Navigation" },
  projScreens:   { ru:"Скриншоты", en:"Screenshots" },
  projLink:      { ru:"Ссылка на проект", en:"Project link" },
  projProtoLink: { ru:"Ссылка на прототип", en:"Prototype link" },
  projOpen:      { ru:"Открыть проект", en:"Open project" },
  projViewProto: { ru:"Смотреть прототип", en:"View prototype" },
  projProtoNote: { ru:"Функциональный рабочий прототип можно посмотреть по ссылке выше.", en:"You can try the fully working prototype via the link above." },
  projFootnotePrefix: { ru:"Показываю проект в том виде, в котором сдавала в разработку — после вёрстки клиент внёс собственные правки, и сейчас сайт выглядит иначе. Актуальная версия: ", en:"I am showing the project as I handed it off for development — after the build, the client made their own edits, so the live site looks a little different now. Current version: " },

  secDescription:{ ru:"Описание", en:"Description" },
  secTask:       { ru:"Задача", en:"Task" },
  secSolution:   { ru:"Решение", en:"Solution" },
  secResult:     { ru:"Результат", en:"Result" },
  secProcess:    { ru:"Процесс", en:"Process" },

  shelfAll:      { ru:"Всё", en:"All" },
  shelfBooks:    { ru:"Книги", en:"Books" },
  shelfMovies:   { ru:"Фильмы", en:"Movies" },
  shelfEmpty:    { ru:"Список пуст", en:"List is empty" },
  shelfBook:     { ru:"Книга", en:"Book" },
  shelfMovie:    { ru:"Фильм", en:"Movie" },

  stTitle:       { ru:"Стикеры", en:"Stickers" },
  stPencil:      { ru:"Карандаш", en:"Pencil" },
  stEraser:      { ru:"Ластик", en:"Eraser" },
  stEmoji:       { ru:"Смайлик", en:"Emoji" },
  stBg:          { ru:"Фон", en:"Background" },
  stBgTitle:     { ru:"Фон стикера", en:"Sticker background" },
  stPlaceholder: { ru:"Пиши здесь…", en:"Write here…" },
  stPlace:       { ru:"Разместить стикер", en:"Post sticker" },
  stPlacing:     { ru:"Размещаю…", en:"Posting…" },
  stClear:       { ru:"Стереть всё", en:"Clear all" },
  stError:       { ru:"Не получилось сохранить, попробуй ещё раз", en:"Could not save, please try again" },
  stEmptyBoard:  { ru:"Пока здесь пусто — размести первый стикер выше.", en:"Nothing here yet — post your first sticker above." },
  stDelete:      { ru:"Удалить стикер", en:"Delete sticker" },
  stTakeBg:      { ru:"Взять фон", en:"Pick a background" },
  stTakePenColor:{ ru:"Взять цвет карандаша", en:"Pick a pencil color" },

  aboutHello:    { ru:"Привет! Я UX/UI дизайнер. Люблю задачи, где нужно разобраться в сути, а потом собрать из этого понятную систему — от исследования до готового интерфейса.", en:"Hi! I am a UX/UI designer. I love tasks where you first need to understand what is really going on, then turn that into a clear system — from research to a finished interface." },
  aboutDoing:    { ru:"Чем занимаюсь", en:"What I do" },
  aboutDoingText:{ ru:"Интерфейсы (UX/UI) · Дизайн-системы · Веб-дизайн · Прототипы и исследования", en:"Interfaces (UX/UI) · Design systems · Web design · Prototypes & research" },
  aboutTools:    { ru:"Инструменты", en:"Tools" },
  aboutExp:      { ru:"Опыт", en:"Experience" },
  aboutExpText:  { ru:"<b>2023 — сейчас</b> · Фриланс, дизайн для брендов и продуктов.<br>\n       <b>2021 — 2023</b> · Дизайнер в студии: айдентика, соцсети, презентации.", en:"<b>2023 — present</b> · Freelance, design for brands and products.<br>\n       <b>2021 — 2023</b> · In-house designer: identity, social media, presentations." },
  aboutNext:     { ru:"Дальше", en:"What is next" },
  aboutNextText: { ru:"Открыта к проектам и коллаборациям. Загляни в «Проекты» или напиши в «Контакты».", en:"Open to projects and collaborations. Take a look at «Projects» or reach out via «Contacts»." },
  aboutProjectsRow: { ru:"Кейсы и работы", en:"Case studies and work" },
  aboutContactsRow: { ru:"Написать мне", en:"Get in touch" },

  contactsTitle: { ru:"Контакты", en:"Contacts" },
  contactsLede:  { ru:"Отвечаю быстро, брифы люблю подробные.", en:"I reply quickly, and I love a detailed brief." },
  contactsMail:  { ru:"Почта", en:"Email" },
  contactsResume:{ ru:"Резюме", en:"Resume" },
  contactsResumeSub: { ru:"Опыт, образование, навыки", en:"Experience, education, skills" },

  resumeExp:     { ru:"Опыт работы", en:"Work experience" },
  resumeEdu:     { ru:"Образование", en:"Education" },
  resumeEduText: { ru:"<b>Название вуза или курса</b> ✏️ · Специальность (год)", en:"<b>University or course name</b> ✏️ · Field of study (year)" },
  resumeSkills:  { ru:"Навыки", en:"Skills" },
  resumeLang:    { ru:"Языки", en:"Languages" },
  resumeLangText:{ ru:"Русский — родной ✏️", en:"Russian — native ✏️" },

  termIntro:     { ru:"Портфолио OS 1.0 — введите ", en:"Portfolio OS 1.0 — type " },
  termIntroEnd:  { ru:" и нажмите Enter.", en:" and press Enter." },

  cmdHelp:       { ru:"Доступно: about, projects, contacts, notes, theme, theme <цвет>, open <app>, clear", en:"Available: about, projects, contacts, notes, theme, theme <color>, open <app>, clear" },
  cmdThemesLabel:{ ru:"Темы: ", en:"Themes: " },
  cmdThemesHint: { ru:"\nНапиши, например: theme голубая", en:"\nType, for example: theme blue" },
  cmdMail:       { ru:"почта: ", en:"email: " },
  cmdNotFound:   { ru:"команда не найдена: ", en:"command not found: " },
  cmdTryHelp:    { ru:" (попробуй help)", en:" (try help)" },
  cmdOpening:    { ru:"Открываю «", en:"Opening «" },
  cmdNoApp:      { ru:"Не знаю такого приложения: ", en:"I do not know an app called: " },
  cmdThemeSet:   { ru:"тема: ", en:"theme: " },
  cmdNoTheme:    { ru:"нет такой темы: ", en:"no such theme: " },
  cmdAvailable:  { ru:" (есть ", en:" (available: " },

  trashEmpty:    { ru:"Корзина пуста.<br>Как и мой список отговорок.", en:"Trash is empty.<br>Just like my list of excuses." },

  winClose:      { ru:"Закрыть", en:"Close" },
  winMinimize:   { ru:"Свернуть", en:"Minimize" },
  winMaximize:   { ru:"Развернуть", en:"Maximize" },
  closeLabel:    { ru:"Закрыть", en:"Close" },
  onboardNext:   { ru:"Далее", en:"Next" },
  onboardDone:   { ru:"Понятно, начнём", en:"Got it, let's go" },

  chatMsg:       { ru:"Привет! Есть вопрос или хочешь поработать вместе — напиши мне 👋", en:"Hi! Got a question or want to work together — write to me 👋" },
  chatPlaceholder:{ ru:"Ваше сообщение…", en:"Your message…" },
  chatSend:      { ru:"Отправить", en:"Send" },
  chatSubject:   { ru:"Сообщение с сайта", en:"Message from the site" }
};
function t(key){
  const e = UI[key];
  return e ? (e[LANG] || e.ru) : key;
}

const LANG_KEY = "portfolio-lang";
let LANG = "ru";
function applyStaticStrings(){
  document.documentElement.dataset.lang = LANG;
  $("#langBtn").textContent = LANG==="en" ? "RU" : "EN";
  $("#helpBtn").textContent = t("menuHelp");
  $('[data-open="about"]').textContent = t("menuAbout");
  $('[data-open="projects"]').textContent = t("menuProjects");
  $('[data-open="contacts"]').textContent = t("menuContacts");
  $("#lockAgain").textContent = t("menuLock");
  $("#slideLabel").textContent = t("lockSlide");
  $("#slider").setAttribute("aria-label", t("lockSlideAria"));
  $("#lockHint").textContent = t("lockHint");
  $("#themeTitle").textContent = t("themeTitle");
  $("#themeDots").setAttribute("aria-label", t("themeAria"));
  $("#mwLabel").textContent = t("playlistLabel");
  $$(".lightbox-close,.bg-picker-close,.onboard-close").forEach(b=>b.setAttribute("aria-label", t("closeLabel")));
  $("#bgPickerTitle").textContent = t("stBgTitle");
  $$("[data-ru][data-en]").forEach(el=>{ el.textContent = LANG==="en" ? el.dataset.en : el.dataset.ru; });
  renderThemeDots();
}
function applyLanguage(){
  applyStaticStrings();
  renderMeStrings();
  renderIntro();
  renderDesktopIcons();
  renderStickerCallout();
  renderResumeCallout();
  renderChatWidget();
  wireDicons();
  alignIconsToPhoto();
  renderDock();
  wireDock();
  syncDock();
  renderWeatherCards();
  loadWeather();
  $$(".win").forEach(el=>{
    const id = el.dataset.app;
    closeWin(id, true);
  });
}
function setLang(l){
  LANG = (l==="en") ? "en" : "ru";
  try{ localStorage.setItem(LANG_KEY,LANG); }catch(e){}
  return LANG;
}
(function initLang(){
  let fromUrl=null;
  try{
    const q = new URLSearchParams(location.search).get("lang");
    if(q==="en" || q==="ru") fromUrl=q;
  }catch(e){}
  if(fromUrl){ setLang(fromUrl); return; }
  let saved=null;
  try{ saved=localStorage.getItem(LANG_KEY); }catch(e){}
  setLang(saved || "ru");
})();
applyStaticStrings();
$("#langBtn").addEventListener("click",()=>{
  setLang(LANG==="en" ? "ru" : "en");
  applyLanguage();
});

/* ---------------- часы ---------------- */
function tick(){
  const locale = LANG==="en" ? "en-US" : "ru-RU";
  const d = new Date();
  const timeStr = d.toLocaleTimeString(locale,{hour:"2-digit",minute:"2-digit"});
  const long = d.toLocaleDateString(locale,{weekday:"long",day:"numeric",month:"long"});
  const short= d.toLocaleDateString(locale,{weekday:"short",day:"numeric",month:"short"});
  $("#lockTime").textContent = timeStr;
  $("#lockDate").textContent = long.charAt(0).toUpperCase()+long.slice(1);
  $("#barTime").textContent = timeStr;
  $("#barDate").textContent = short;
}
tick(); setInterval(tick,10000);

/* ---------------- погода ---------------- */
function renderWeatherCards(){
  $("#weather").innerHTML = WEATHER_CITIES.map((c,i)=>`
    <div class="wcard">
      <div class="wcity">${esc(loc(c,"name"))}</div>
      <div class="wtemp" id="wtemp${i}">···</div>
      <div class="wcond" id="wcond${i}"></div>
    </div>`).join("");
}
renderWeatherCards();

/* коды погоды Open-Meteo (WMO) -> подпись */
function weatherText(code){
  const m = {
    0:{ru:"Ясно",en:"Clear"}, 1:{ru:"Преимущественно ясно",en:"Mostly clear"}, 2:{ru:"Переменная облачность",en:"Partly cloudy"}, 3:{ru:"Пасмурно",en:"Overcast"},
    45:{ru:"Туман",en:"Fog"}, 48:{ru:"Изморозь",en:"Rime fog"},
    51:{ru:"Лёгкая морось",en:"Light drizzle"}, 53:{ru:"Морось",en:"Drizzle"}, 55:{ru:"Сильная морось",en:"Heavy drizzle"},
    56:{ru:"Ледяная морось",en:"Freezing drizzle"}, 57:{ru:"Ледяная морось",en:"Freezing drizzle"},
    61:{ru:"Небольшой дождь",en:"Light rain"}, 63:{ru:"Дождь",en:"Rain"}, 65:{ru:"Сильный дождь",en:"Heavy rain"},
    66:{ru:"Ледяной дождь",en:"Freezing rain"}, 67:{ru:"Ледяной дождь",en:"Freezing rain"},
    71:{ru:"Небольшой снег",en:"Light snow"}, 73:{ru:"Снег",en:"Snow"}, 75:{ru:"Сильный снегопад",en:"Heavy snow"}, 77:{ru:"Снежная крупа",en:"Snow grains"},
    80:{ru:"Кратковременный дождь",en:"Rain showers"}, 81:{ru:"Ливень",en:"Showers"}, 82:{ru:"Сильный ливень",en:"Heavy showers"},
    85:{ru:"Снегопад",en:"Snow showers"}, 86:{ru:"Сильный снегопад",en:"Heavy snow showers"},
    95:{ru:"Гроза",en:"Thunderstorm"}, 96:{ru:"Гроза с градом",en:"Thunderstorm with hail"}, 99:{ru:"Сильная гроза с градом",en:"Severe thunderstorm with hail"}
  };
  const e = m[code];
  return e ? (e[LANG]||e.ru) : "";
}

async function loadWeather(){
  WEATHER_CITIES.forEach(async (c,i)=>{
    const el = $("#wtemp"+i);
    if(!el) return;
    try{
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lon}&current_weather=true`);
      if(!res.ok) throw new Error("bad response");
      const data = await res.json();
      const temp = Math.round(data.current_weather.temperature);
      el.textContent = (temp>0?"+":"")+temp+"°";
      el.classList.remove("err");
      $("#wcond"+i).textContent = weatherText(data.current_weather.weathercode);
    }catch(e){
      el.textContent = t("weatherNoData");
      el.classList.add("err");
      $("#wcond"+i).textContent = "";
    }
  });
}
loadWeather();
setInterval(loadWeather, 20*60*1000);

/* ---------------- виджет плейлиста ---------------- */
$(".mw-frame").src = MUSIC_EMBED_URL;

/* ---------------- СТИКЕРЫ (гостевая книга) ----------------
   Пока стикеры хранятся только локально, в этом браузере
   (localStorage) — то есть их видит только владелец компьютера,
   не все посетители сайта.
   ✏️ Когда подключишь свой сервер для общих стикеров — впиши его
   вызовы в loadStickies() (загрузка списка) и publishStickies()
   (сохранение нового списка) вместо localStorage ниже. */
const STICKY_COLORS = ["#ffe58f","#ffc2d6","#bfe3ff","#c9f2c0","#ffcf9e","#d7c4ff","#ffb3b3","#b8e8e0"]; // ✏️ цвета фона стикера
const PEN_COLORS = ["#2b2118","#902424","#1f5fae","#1f7a4d","#7c3aed","#c2410c"]; // ✏️ цвета карандаша
const STICKY_CAP = 40;          // максимум хранимых стикеров
const STICKY_TEXT_MAX = 220;
const STICKY_LOCAL_KEY = "portfolio-sticky-notes";
const STICKY_EMOJI = ["😀","😂","😍","🥳","👍","🔥","❤️","✨","🎉","😢","🤔","👀"]; // ✏️ смайлики в пикере

let STICKIES = [];              // прикреплённые стикеры
let stickyDraft = null;         // текущий черновик (ещё не прикреплён)
let stickersEl = null;          // корневой элемент открытого окна «Стикеры»
let emojiDragActive = false;    // идёт ли сейчас перетаскивание смайлика
let cancelEmojiDrag = null;     // функция отмены текущего перетаскивания (для Esc)

function canPlaceDraft(d){
  return !!(d.text||"").trim() || !!d.drawing || !!(d.stickers && d.stickers.length);
}

const bgPicker = $("#bgPicker");
function openBgPicker(){
  const grid = $("#bgPickerSwatches");
  grid.innerHTML = STICKY_COLORS.map(c=>
    `<button class="st-swatch${stickyDraft.color===c?" on":""}" style="background:${c}" data-bgcolor="${c}" aria-label="${t('stTakeBg')}"></button>`).join("");
  bgPicker.classList.add("on");
}
function closeBgPicker(){ bgPicker.classList.remove("on"); }
$("#bgPickerSwatches").addEventListener("click",e=>{
  const b=e.target.closest("[data-bgcolor]"); if(!b) return;
  stickyDraft.color = b.dataset.bgcolor;
  $$(".st-swatch",$("#bgPickerSwatches")).forEach(x=>x.classList.toggle("on", x===b));
  const surface = stickersEl && $("#stSurface",stickersEl);
  if(surface) surface.style.background = stickyDraft.color;
  const bgSwatch = stickersEl && $("#stBgSwatch",stickersEl);
  if(bgSwatch) bgSwatch.style.background = stickyDraft.color;
  closeBgPicker();
});
bgPicker.addEventListener("click",e=>{ if(e.target===bgPicker) closeBgPicker(); });
$("#bgPickerClose").addEventListener("click",closeBgPicker);

const emojiCarry = $("#emojiCarry");
function startEmojiDrag(emoji, downEvent){
  emojiDragActive = true;
  emojiCarry.textContent = emoji;
  emojiCarry.hidden = false;
  emojiCarry.style.left = downEvent.clientX+"px";
  emojiCarry.style.top = downEvent.clientY+"px";
  const board = stickersEl && $("#stickies",stickersEl);
  if(board) board.classList.add("emoji-carrying");

  function onMove(e){
    emojiCarry.style.left = e.clientX+"px";
    emojiCarry.style.top = e.clientY+"px";
  }
  function finish(){
    document.removeEventListener("pointermove",onMove);
    document.removeEventListener("pointerup",onUp);
    document.removeEventListener("pointercancel",onCancel);
    emojiDragActive = false;
    cancelEmojiDrag = null;
    emojiCarry.hidden = true;
    if(board) board.classList.remove("emoji-carrying");
  }
  function onUp(e){
    const surface = stickersEl && $("#stSurface",stickersEl);
    let hit = false;
    if(surface){
      const r = surface.getBoundingClientRect();
      hit = e.clientX>=r.left && e.clientX<=r.right && e.clientY>=r.top && e.clientY<=r.bottom;
    }
    finish();
    if(hit) placeSticker(emoji, e.clientX, e.clientY);
  }
  function onCancel(){ finish(); }
  document.addEventListener("pointermove",onMove);
  document.addEventListener("pointerup",onUp);
  document.addEventListener("pointercancel",onCancel);
  cancelEmojiDrag = finish;
}
function placeSticker(emoji, clientX, clientY){
  const surface = stickersEl && $("#stSurface",stickersEl); if(!surface) return;
  const r = surface.getBoundingClientRect();
  let fx=(clientX-r.left)/r.width, fy=(clientY-r.top)/r.height;
  fx=Math.min(0.96,Math.max(0.04,fx)); fy=Math.min(0.96,Math.max(0.04,fy));
  if(!stickyDraft.stickers) stickyDraft.stickers=[];
  stickyDraft.stickers.push({id:stickyId(), emoji, x:fx, y:fy});
  renderStickerLayer();
  const pinBtn = stickersEl && $("#stPinBtn",stickersEl);
  if(pinBtn) pinBtn.disabled = !canPlaceDraft(stickyDraft);
}
function renderStickerLayer(){
  const layer = stickersEl && $("#stStickersLayer",stickersEl); if(!layer) return;
  layer.innerHTML = (stickyDraft.stickers||[]).map(s=>
    `<span class="st-sticker-obj" data-sid="${esc(s.id)}" style="left:${(s.x*100).toFixed(2)}%;top:${(s.y*100).toFixed(2)}%">${s.emoji}</span>`).join("");
  wireStickerObjects();
}
function wireStickerObjects(){
  const layer = stickersEl && $("#stStickersLayer",stickersEl); if(!layer) return;
  const surface = $("#stSurface",stickersEl);
  $$(".st-sticker-obj",layer).forEach(el=>{
    let on=false;
    el.addEventListener("pointerdown",e=>{
      e.stopPropagation(); on=true; el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove",e=>{
      if(!on) return;
      const r=surface.getBoundingClientRect();
      let fx=(e.clientX-r.left)/r.width, fy=(e.clientY-r.top)/r.height;
      fx=Math.min(0.96,Math.max(0.04,fx)); fy=Math.min(0.96,Math.max(0.04,fy));
      el.style.left=(fx*100)+"%"; el.style.top=(fy*100)+"%";
      const s=stickyDraft.stickers.find(x=>x.id===el.dataset.sid);
      if(s){ s.x=fx; s.y=fy; }
    });
    const stop=()=>on=false;
    el.addEventListener("pointerup",stop);
    el.addEventListener("pointercancel",stop);
    el.addEventListener("dblclick",e=>{
      e.stopPropagation();
      stickyDraft.stickers = stickyDraft.stickers.filter(x=>x.id!==el.dataset.sid);
      renderStickerLayer();
      const pinBtn=$("#stPinBtn",stickersEl);
      if(pinBtn) pinBtn.disabled = !canPlaceDraft(stickyDraft);
    });
  });
}

function stickyId(){ return (crypto.randomUUID ? crypto.randomUUID() : Date.now()+"-"+Math.random().toString(36).slice(2)); }
function stickyDate(ts){
  try{ return new Date(ts).toLocaleDateString(LANG==="en"?"en-US":"ru-RU",{day:"numeric",month:"short"}); }
  catch(e){ return ""; }
}

function loadStickies(){
  try{
    const raw = localStorage.getItem(STICKY_LOCAL_KEY);
    if(raw) STICKIES = JSON.parse(raw);
  }catch(e){}
  STICKIES.forEach(n=>{
    if(typeof n.x !== "number") n.x = 0.15+Math.random()*0.7;
    if(typeof n.y !== "number") n.y = 0.2+Math.random()*0.6;
  });
  renderStickies();
}

async function publishStickies(list){
  try{ localStorage.setItem(STICKY_LOCAL_KEY, JSON.stringify(list)); }catch(e){}
  return { ok:true };
}

function renderSiteStickies(){
  const board = $("#siteBoard"); if(!board) return;
  board.innerHTML = STICKIES.map(n=>`
    <div class="site-sticky" data-id="${esc(n.id)}" style="left:${(n.x*100).toFixed(2)}%;top:${(n.y*100).toFixed(2)}%;--rot:${n.rot}deg;background:${esc(n.color)}" title="${esc(n.text)}">
      <div class="site-sticky-surface">
        ${n.drawing ? `<img class="site-sticky-img" src="${esc(n.drawing)}" alt="">` : `<span class="site-sticky-text">${esc(n.text)}</span>`}
        ${(n.stickers||[]).map(s=>`<span class="site-sticky-obj" style="left:${(s.x*100).toFixed(2)}%;top:${(s.y*100).toFixed(2)}%">${s.emoji}</span>`).join("")}
      </div>
    </div>`).join("");
  wireSiteStickies();
}
function wireSiteStickies(){
  const board = $("#siteBoard"); if(!board) return;
  $$(".site-sticky",board).forEach(el=>{
    let on=false, moved=false;
    el.addEventListener("pointerdown",e=>{
      on=true; moved=false; el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove",e=>{
      if(!on) return;
      moved=true;
      let fx=e.clientX/vw(), fy=e.clientY/vh();
      fx=Math.min(0.97,Math.max(0.03,fx)); fy=Math.min(0.9,Math.max(0.08,fy));
      el.style.left=(fx*100)+"%"; el.style.top=(fy*100)+"%";
      const n=STICKIES.find(x=>x.id===el.dataset.id);
      if(n){ n.x=fx; n.y=fy; }
    });
    const stop=()=>{
      if(!on) return;
      on=false;
      if(moved) publishStickies(STICKIES);
    };
    el.addEventListener("pointerup",stop);
    el.addEventListener("pointercancel",stop);
  });
}
function renderStickies(){
  renderSiteStickies();
  if(!stickersEl) return;
  const compose = $("#stCompose",stickersEl);
  const placed = $("#stPlaced",stickersEl);
  if(!compose || !placed) return;
  compose.innerHTML = stickyComposeHTML(stickyDraft);
  placed.innerHTML = STICKIES.length ? STICKIES.map(n=>`
    <div class="sticky" style="--rot:${n.rot}deg;background:${esc(n.color)}">
      <span class="sticky-pin"></span>
      <button class="sticky-del" data-del="${esc(n.id)}" aria-label="${t('stDelete')}">✕</button>
      <div class="sticky-surface">
        ${n.drawing ? `<img class="sticky-drawing" src="${esc(n.drawing)}" alt="">` : ""}
        ${(n.stickers||[]).map(s=>`<span class="sticky-obj" style="left:${(s.x*100).toFixed(2)}%;top:${(s.y*100).toFixed(2)}%">${s.emoji}</span>`).join("")}
        <div class="sticky-text">${esc(n.text)}</div>
      </div>
      <div class="sticky-meta">${esc(stickyDate(n.ts))}</div>
    </div>`).join("") : `<div class="st-placed-empty">${t("stEmptyBoard")}</div>`;
  const count=$("#stCount",stickersEl);
  if(count) count.textContent = STICKIES.length ? (STICKIES.length+" "+stickyWord(STICKIES.length)) : "";
  syncStickyTools();
  wireStickyCompose();
}
function syncStickyTools(){
  if(!stickersEl) return;
  const active = stickyDraft.tool||null;
  $$(".st-tool-btn",stickersEl).forEach(b=>b.classList.toggle("on", b.dataset.tool===active));
}
async function deleteSticky(id){
  const merged = STICKIES.filter(n=>n.id!==id);
  const r = await publishStickies(merged);
  if(r.ok){ STICKIES = merged; renderStickies(); }
}
function stickyWord(n){
  if(LANG==="en") return n===1 ? "sticker" : "stickers";
  return n%10===1&&n%100!==11 ? "стикер" : (n%10>=2&&n%10<=4&&(n%100<10||n%100>=20) ? "стикера" : "стикеров");
}
function stickyComposeHTML(d){
  const tool = d.tool || null;
  const drawable = tool==="pencil" || tool==="eraser";
  return `
    <div class="st-surface" id="stSurface" style="background:${esc(d.color)}">
      <canvas class="st-canvas" id="stDraw" style="pointer-events:${drawable?"auto":"none"}"></canvas>
      <textarea class="st-surface-text" id="stText" maxlength="${STICKY_TEXT_MAX}" placeholder="${t('stPlaceholder')}" style="pointer-events:${drawable?"none":"auto"}">${esc(d.text||"")}</textarea>
      <div class="st-stickers-layer" id="stStickersLayer">${(d.stickers||[]).map(s=>`<span class="st-sticker-obj" data-sid="${esc(s.id)}" style="left:${(s.x*100).toFixed(2)}%;top:${(s.y*100).toFixed(2)}%">${s.emoji}</span>`).join("")}</div>
      ${tool==="emoji" ? `<div class="st-emoji-row" id="stEmojiRow">${STICKY_EMOJI.map(e=>`<button class="st-emoji-btn" type="button" data-emoji="${e}">${e}</button>`).join("")}</div>` : ""}
    </div>
    <div class="st-err" id="stErr" hidden></div>
    <div class="st-actions">
      <button class="st-pin-btn" id="stPinBtn"${canPlaceDraft(d)?"":" disabled"}>${t("stPlace")}</button>
      <button class="st-clear-btn" id="stClearBtn" type="button" title="${t('stClear')}">${t("stClear")}</button>
    </div>`;
}
function wireStickyCompose(){
  const el = $("#stCompose",stickersEl); if(!el) return;
  const textArea = $("#stText",el), pinBtn = $("#stPinBtn",el);
  textArea.addEventListener("input",()=>{
    stickyDraft.text = textArea.value;
    pinBtn.disabled = !canPlaceDraft(stickyDraft);
  });
  if(!stickyDraft.tool) textArea.focus();

  pinBtn.addEventListener("click",pinStickyDraft);
  $("#stClearBtn",el).addEventListener("click",()=>{
    if(cancelEmojiDrag) cancelEmojiDrag();
    stickyDraft = { text:"", color:stickyDraft.color, penColor:stickyDraft.penColor, tool:null, drawing:null, stickers:[] };
    renderStickies();
  });

  wireStickerObjects();

  const emojiRow = $("#stEmojiRow",el);
  if(emojiRow) $$(".st-emoji-btn",emojiRow).forEach(btn=>{
    btn.addEventListener("pointerdown",e=>{
      e.preventDefault();
      startEmojiDrag(btn.dataset.emoji, e);
    });
  });

  const canvas = $("#stDraw",el);
  const dpr = window.devicePixelRatio || 1;
  const cRect = canvas.getBoundingClientRect();
  const cssW = cRect.width, cssH = cRect.height;
  canvas.width = Math.round(cssW*dpr);
  canvas.height = Math.round(cssH*dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr,dpr);
  ctx.lineCap="round"; ctx.lineJoin="round";
  if(stickyDraft.drawing){
    const img=new Image();
    img.onload=()=>ctx.drawImage(img,0,0,cssW,cssH);
    img.src=stickyDraft.drawing;
  }
  const pos=e=>{
    const r=canvas.getBoundingClientRect();
    return [e.clientX-r.left, e.clientY-r.top];
  };
  let drawing=false, lx=0, ly=0;
  canvas.addEventListener("pointerdown",e=>{
    if(stickyDraft.tool!=="pencil" && stickyDraft.tool!=="eraser") return;
    drawing=true; [lx,ly]=pos(e); canvas.setPointerCapture(e.pointerId);
    ctx.globalCompositeOperation = stickyDraft.tool==="eraser" ? "destination-out" : "source-over";
    ctx.lineWidth = stickyDraft.tool==="eraser" ? 16 : 3;
    ctx.strokeStyle = stickyDraft.penColor || PEN_COLORS[0];
  });
  canvas.addEventListener("pointermove",e=>{
    if(!drawing) return;
    const [x,y]=pos(e);
    ctx.beginPath(); ctx.moveTo(lx,ly); ctx.lineTo(x,y); ctx.stroke();
    lx=x; ly=y;
  });
  const finishDraw=()=>{
    if(!drawing) return;
    drawing=false;
    stickyDraft.drawing = canvas.toDataURL("image/png");
    pinBtn.disabled = !canPlaceDraft(stickyDraft);
  };
  canvas.addEventListener("pointerup",finishDraw);
  canvas.addEventListener("pointercancel",finishDraw);
}
async function pinStickyDraft(){
  if(!canPlaceDraft(stickyDraft)) return;
  const text = (stickyDraft.text||"").trim();
  const btn = $("#stPinBtn",stickersEl); btn.disabled = true; btn.textContent = t("stPlacing");
  const note = {
    id: stickyId(), text: text.slice(0,STICKY_TEXT_MAX),
    color: stickyDraft.color, rot:(Math.random()*8-4).toFixed(1),
    x: 0.15+Math.random()*0.7, y: 0.2+Math.random()*0.6,
    drawing: stickyDraft.drawing || null,
    stickers: (stickyDraft.stickers||[]).map(s=>({emoji:s.emoji,x:s.x,y:s.y})),
    ts: Date.now()
  };
  const merged = [...STICKIES, note].slice(-STICKY_CAP);
  const r = await publishStickies(merged);
  if(r.ok){
    STICKIES = merged;
    stickyDraft = { text:"", color:stickyDraft.color, penColor:stickyDraft.penColor, tool:null, drawing:null, stickers:[] };
    renderStickies();
  } else {
    const err = $("#stErr",stickersEl);
    if(err){ err.hidden=false; err.textContent = t("stError"); }
    btn.disabled=false; btn.textContent=t("stPlace");
  }
}
function initStickersApp(el){
  stickersEl = el;
  if(!stickyDraft) stickyDraft = { text:"", color:STICKY_COLORS[0], penColor:PEN_COLORS[0], tool:null, drawing:null, stickers:[] };
  if(!stickyDraft.stickers) stickyDraft.stickers=[];
  if(!stickyDraft.penColor) stickyDraft.penColor=PEN_COLORS[0];

  $("#stPenSwatches",el).innerHTML = PEN_COLORS.map(c=>
    `<button class="st-swatch${stickyDraft.penColor===c?" on":""}" style="background:${c}" data-pencolor="${c}" aria-label="${t('stTakePenColor')}"></button>`).join("");
  $("#stPenSwatches",el).addEventListener("click",e=>{
    const b=e.target.closest("[data-pencolor]"); if(!b) return;
    stickyDraft.penColor = b.dataset.pencolor;
    $$(".st-swatch",el).forEach(x=>x.classList.toggle("on", x===b));
  });

  $("#stTools",el).addEventListener("click",e=>{
    const b=e.target.closest("[data-tool]"); if(!b) return;
    if(cancelEmojiDrag) cancelEmojiDrag();
    stickyDraft.tool = (stickyDraft.tool===b.dataset.tool) ? null : b.dataset.tool;
    renderStickies();
  });

  const bgSwatch = $("#stBgSwatch",el);
  if(bgSwatch) bgSwatch.style.background = stickyDraft.color;
  $("#stBgBtn",el).addEventListener("click",openBgPicker);

  $("#stPlaced",el).addEventListener("click",e=>{
    const b = e.target.closest("[data-del]");
    if(b) deleteSticky(b.dataset.del);
  });
  loadStickies();
}

/* показываем полоску стикеров на столе сразу, даже если приложение «Стикеры» ещё не открывали */
(function initSiteStickies(){
  try{
    const raw = localStorage.getItem(STICKY_LOCAL_KEY);
    if(raw) STICKIES = JSON.parse(raw);
  }catch(e){}
  renderSiteStickies();
})();

function renderMeStrings(){
  $("#avatar").textContent = ME.initial;
  $("#lockName").textContent = loc(ME,"fullName");
  $("#nameBtn").textContent = loc(ME,"fullName");
  $("#lockRole").textContent = loc(ME,"role");
}
renderMeStrings();

/* ---------------- разблокировка ---------------- */
const lock=$("#lock"), slider=$("#slider"), knob=$("#knob");
let dragging=false, startX=0, maxX=0;

function unlock(){
  lock.classList.add("unlocked");
  const d=$("#desktop");
  d.classList.add("on"); d.setAttribute("aria-hidden","false");
  setTimeout(()=>{ lock.style.display="none"; maybeShowOnboarding(); },800);
}
function relock(){
  lock.style.display=""; void lock.offsetWidth;
  lock.classList.remove("unlocked");
  knob.style.left="5px"; slider.classList.remove("dragging");
  const d=$("#desktop"); d.classList.remove("on"); d.setAttribute("aria-hidden","true");
}
knob.addEventListener("pointerdown",e=>{
  dragging=true; knob.classList.remove("springing"); slider.classList.add("dragging");
  startX=e.clientX - knob.offsetLeft; maxX=slider.clientWidth - knob.offsetWidth - 5;
  knob.setPointerCapture(e.pointerId);
});
knob.addEventListener("pointermove",e=>{
  if(!dragging) return;
  const x = Math.min(Math.max(5, e.clientX-startX), maxX);
  knob.style.left = x+"px";
  if(x >= maxX-2){ dragging=false; unlock(); }
});
function release(){
  if(!dragging) return;
  dragging=false; slider.classList.remove("dragging");
  knob.classList.add("springing"); knob.style.left="5px";
  setTimeout(()=>knob.classList.remove("springing"),340);
}
knob.addEventListener("pointerup",release);
knob.addEventListener("pointercancel",release);
slider.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" "||e.key==="ArrowRight"){ e.preventDefault(); knob.style.left=(slider.clientWidth-59)+"px"; setTimeout(unlock,220); }
});

/* ---------------- знакомство на рабочем столе ---------------- */
function renderIntro(){
  const hlRu = "моё рабочее пространство", hlEn = "my workspace";
  const hl = LANG==="en" ? hlEn : hlRu;
  $("#intro").innerHTML = `
  <div class="intro-photo">${ ME.photo
      ? `<img src="${esc(ME.photo)}" alt="${esc(ME.fullName)}">`
      : `<span class="ph">сюда фото<br>поле photo в коде</span>` }</div>
  <div class="intro-text">
    <h2>${esc(loc(ME.intro,"title")).replace(hl,
      `<span class="hl-select"><svg class="hl-dot hl-dot-start"><use href="#ic-seldot"/></svg>${hl}<svg class="hl-dot hl-dot-end"><use href="#ic-seldot"/></svg></span>`)}</h2>
    <p>${esc(loc(ME.intro,"text"))}</p>
    <p class="intro-caption">${esc(loc(ME.intro,"caption"))}</p>
  </div>`;
}
renderIntro();

/* ---------------- иконки на столе ---------------- */
function diconGlyph(app){
  return app.img ? `<img class="ic ic-custom" src="${esc(app.img)}" alt="">` : ic(app.icon);
}
const DESKTOP_ICONS = ["projects","about","notes","shelf"];
/* ✏️ явное положение иконок в сетке (2 ряда), чтобы под «Проекты» во 2 ряду была пустая ячейка */
const DESKTOP_ICON_POS = {
  projects:{col:1,row:1},
  about:   {col:2,row:1},
  notes:   {col:2,row:2},
  shelf:   {col:3,row:2}
};
function renderDesktopIcons(){
  $("#icons").innerHTML = DESKTOP_ICONS.map(id=>{
    const app = APPS[id];
    const pos = DESKTOP_ICON_POS[id];
    const style = pos ? ` style="grid-column:${pos.col};grid-row:${pos.row}"` : "";
    return `<button class="dicon" data-app="${id}"${style}>${diconGlyph(app)}<span>${loc(app,"title")}</span></button>`;
  }).join("");
}
renderDesktopIcons();

/* иконка стикеров вынесена отдельно, в левый верхний угол, с подписью-приглашением */
function renderStickerCallout(){
  $("#scWrap").innerHTML = `
  <button class="dicon" data-app="stickers">${diconGlyph(APPS.stickers)}</button>
  <p class="sc-note">${t("scNote")}</p>`;
}
renderStickerCallout();

/* иконка резюме вынесена отдельно вправо от основной сетки */
function renderResumeCallout(){
  $("#resumeWrap").innerHTML =
    `<button class="dicon" data-app="resume">${diconGlyph(APPS.resume)}<span>${loc(APPS.resume,"title")}</span></button>`;
}
renderResumeCallout();

/* ---------------- мини-чат «напишите мне» ----------------
   Сайт статический, поэтому «отправка» открывает почтовый клиент
   с уже вписанным сообщением (mailto:) — реального чата/бэкенда нет. */
function renderChatWidget(){
  $("#chatWidget").innerHTML = `
    <div class="chat-bubble-row">
      <span class="chat-avatar">${esc(ME.initial)}</span>
      <div class="chat-msg">${t("chatMsg")}</div>
    </div>
    <div class="chat-compose">
      <input class="chat-input" id="chatInput" placeholder="${t("chatPlaceholder")}" maxlength="500">
      <button class="chat-send" id="chatSend" type="button" title="${t("chatSend")}" disabled>${ic("ic-chev")}</button>
    </div>`;
  wireChatWidget();
}
function wireChatWidget(){
  const input = $("#chatInput"), btn = $("#chatSend");
  if(!input || !btn) return;
  input.addEventListener("input",()=>{ btn.disabled = !input.value.trim(); });
  input.addEventListener("keydown",e=>{ if(e.key==="Enter") sendChatMessage(); });
  btn.addEventListener("click",sendChatMessage);
}
function sendChatMessage(){
  const input = $("#chatInput"); if(!input) return;
  const text = input.value.trim(); if(!text) return;
  const href = `mailto:${ME.email}?subject=${encodeURIComponent(t("chatSubject"))}&body=${encodeURIComponent(text)}`;
  window.location.href = href;
  input.value = "";
  $("#chatSend").disabled = true;
}
renderChatWidget();

/* иконки выравниваются по левому краю фото в блоке знакомства,
   иконка резюме встаёт правее основной сетки с фиксированным отступом */
function alignIconsToPhoto(){
  const icons = $("#icons");
  const photo = $(".intro-photo");
  const resumeWrap = $("#resumeWrap");
  if(!icons || !photo) return;
  if(isNarrow()){ icons.style.left = ""; if(resumeWrap) resumeWrap.style.left = ""; return; }
  const rect = photo.getBoundingClientRect();
  icons.style.left = Math.round(rect.left) + "px";
  if(resumeWrap){
    const iconsRect = icons.getBoundingClientRect();
    resumeWrap.style.left = Math.round(iconsRect.right + 70) + "px";
  }
}
alignIconsToPhoto();
addEventListener("resize", alignIconsToPhoto);

function wireDicons(){
  $$(".dicon").forEach(el=>{
    el.addEventListener("click",()=>{
      $$(".dicon").forEach(x=>x.classList.remove("sel"));
      el.classList.add("sel");
      if(isTouch) openApp(el.dataset.app);
    });
    el.addEventListener("dblclick",()=>openApp(el.dataset.app));
  });
}
wireDicons();
$("#desktop").addEventListener("pointerdown",e=>{
  if(!e.target.closest(".dicon")) $$(".dicon").forEach(x=>x.classList.remove("sel"));
  if(!e.target.closest("#nameBtn")) $("#nameMenu").classList.remove("on");
});

/* ---------------- док ---------------- */
const DOCK = ["projects","notes","stickers","about","contacts","resume","shelf","terminal","sep","trash"];
function renderDock(){
  $("#dock").innerHTML = DOCK.map(id=> id==="sep" ? `<div class="dock-sep"></div>` :
    `<button class="dock-item" data-app="${id}">${ic(APPS[id].icon)}<span class="tip">${loc(APPS[id],"title")}</span><span class="dot"></span></button>`).join("");
}
renderDock();
function wireDock(){
  $$("#dock .dock-item").forEach(b=>b.addEventListener("click",()=>openApp(b.dataset.app)));
}
wireDock();

const dock=$("#dock");
dock.addEventListener("pointermove",e=>{
  if(isTouch) return;
  $$(".dock-item",dock).forEach(it=>{
    const r=it.getBoundingClientRect(), c=r.left+r.width/2;
    const s=Math.max(1, 1.45 - Math.abs(e.clientX-c)/170);
    it.style.transform=`scale(${s}) translateY(${-(s-1)*14}px)`;
  });
});
dock.addEventListener("pointerleave",()=>$$(".dock-item",dock).forEach(it=>it.style.transform=""));

/* ---------------- окна ---------------- */
const winLayer=$("#windows");
const open = new Map();
let z=200, cascade=0;
const PLATE_GAP=104;          // место слева под плашку темы (широкий экран)
const TOP_MIN_NARROW=88;      // место сверху под плашку темы (телефон)

function syncDock(){ $$("#dock .dock-item").forEach(b=>b.classList.toggle("open",open.has(b.dataset.app))); }
function focusWin(el){
  $$(".win").forEach(w=>w.classList.add("blurred"));
  el.classList.remove("blurred"); el.style.zIndex = ++z;
}
function openApp(id){
  const app=APPS[id]; if(!app) return;
  if(open.has(id)){ focusWin(open.get(id)); return; }

  const narrow=isNarrow();
  const W=vw(), H=vh();
  const w = narrow ? W-16 : Math.min(app.w, W-170);
  const h = narrow ? H-196 : Math.min(app.h, H-140);
  const left = narrow ? 8 : Math.max(PLATE_GAP, (W-w)/2 + 24 + (cascade%5)*28);
  const top  = narrow ? TOP_MIN_NARROW : Math.max(42, (H-h)/2 - 30 + (cascade%5)*26);
  cascade++;

  const el=document.createElement("section");
  el.className="win"; el.dataset.app=id;
  el.style.cssText=`left:${left}px;top:${top}px;width:${w}px;height:${h}px`;
  el.innerHTML=`
    <header class="tb">
      <div class="lights">
        <button class="lt close" title="${t("winClose")}"></button>
        <button class="lt min" title="${t("winMinimize")}"></button>
        <button class="lt max" title="${t("winMaximize")}"></button>
      </div>
      <div class="tb-spacer"></div>
      <div class="tb-title">${esc(loc(app,"title"))}</div>
      <div class="tb-spacer"></div>
    </header>
    <div class="win-body">${render(id)}</div>
    <div class="resizer"></div>`;
  winLayer.appendChild(el);
  open.set(id,el); syncDock(); focusWin(el);

  el.addEventListener("pointerdown",()=>focusWin(el));
  $(".lt.close",el).addEventListener("click",()=>closeWin(id));
  $(".lt.min",el).addEventListener("click",()=>{ el.classList.add("minimized"); setTimeout(()=>closeWin(id,true),300); });
  $(".lt.max",el).addEventListener("click",()=>toggleMax(el));
  makeDraggable(el); makeResizable(el); wire(id,el);
}
function closeWin(id,skipAnim){
  const el=open.get(id); if(!el) return;
  open.delete(id); syncDock();
  if(id==="stickers"){ if(cancelEmojiDrag) cancelEmojiDrag(); closeBgPicker(); stickersEl=null; stickyDraft=null; }
  if(skipAnim){ el.remove(); return; }
  el.classList.add("closing"); setTimeout(()=>el.remove(),180);
}
function toggleMax(el){
  if(el.classList.contains("max")){ el.classList.remove("max"); Object.assign(el.style,el._prev); }
  else{
    el._prev={left:el.style.left,top:el.style.top,width:el.style.width,height:el.style.height};
    el.classList.add("max");
    Object.assign(el.style,{left:"0px",top:"30px",width:"100%",height:"calc(100% - 30px)"});
  }
}
function makeDraggable(el){
  const tb=$(".tb",el); let sx,sy,ox,oy,on=false;
  tb.addEventListener("pointerdown",e=>{
    if(e.target.closest(".lt")) return;
    on=true; sx=e.clientX; sy=e.clientY; ox=el.offsetLeft; oy=el.offsetTop;
    tb.setPointerCapture(e.pointerId);
  });
  tb.addEventListener("pointermove",e=>{
    if(!on || el.classList.contains("max")) return;
    const nx=ox+e.clientX-sx, ny=oy+e.clientY-sy;
    el.style.left=Math.min(Math.max(-el.offsetWidth+120,nx), innerWidth-100)+"px";
    el.style.top =Math.min(Math.max(30,ny), innerHeight-60)+"px";
  });
  tb.addEventListener("pointerup",()=>on=false);
  tb.addEventListener("dblclick",e=>{ if(!e.target.closest(".lt")) toggleMax(el); });
}
function makeResizable(el){
  const r=$(".resizer",el); let sx,sy,sw,sh,on=false;
  r.addEventListener("pointerdown",e=>{
    on=true; sx=e.clientX; sy=e.clientY; sw=el.offsetWidth; sh=el.offsetHeight;
    r.setPointerCapture(e.pointerId); e.stopPropagation();
  });
  r.addEventListener("pointermove",e=>{
    if(!on) return;
    el.style.width =Math.max(320,sw+e.clientX-sx)+"px";
    el.style.height=Math.max(220,sh+e.clientY-sy)+"px";
  });
  r.addEventListener("pointerup",()=>on=false);
}

/* ---------------- содержимое приложений ---------------- */
function render(id){
  if(id==="projects") return finderHTML();
  if(id==="notes")    return notesHTML(NOTES[0].id);
  if(id==="about")    return aboutHTML();
  if(id==="contacts") return contactsHTML();
  if(id==="resume")   return resumeHTML();
  if(id==="shelf")    return shelfHTML();
  if(id==="stickers") return stickersHTML();
  if(id==="terminal") return termHTML();
  return `<div class="empty"><div>${ic("ic-trash")}${t("trashEmpty")}</div></div>`;
}

/* списки в боковой панели собираются из PROJECTS автоматически */
const KINDS = [...new Set(PROJECTS.map(p=>p.kind))];
const YEARS = [...new Set(PROJECTS.map(p=>p.year))].sort((a,b)=>b-a);

function finderHTML(){
  return `
  <aside class="fsb">
    <button data-folder="all" class="on">${ic("ic-folder")}${t("finderAll")}</button>
    <h4>${t("finderTags")}</h4>
    ${KINDS.map(k=>`<button data-tagf="${esc(k)}">${ic("ic-tag")}${esc(kindLabel(k))}</button>`).join("")}
    <h4>${t("finderYears")}</h4>
    ${YEARS.map(y=>`<button data-yearf="${esc(y)}">${ic("ic-clock")}${esc(y)}</button>`).join("")}
  </aside>
  <div class="fmain">
    <div class="ftoolbar"><span>${t("menuProjects")} — ${plural(PROJECTS.length)}</span></div>
    <div class="fscroll">${gridHTML(PROJECTS)}</div>
  </div>`;
}
function gridHTML(list){
  if(!list.length) return `<div style="opacity:.5;font-size:13px;padding:20px">${t("finderEmpty")}</div>`;
  return `<div class="grid">${list.map(p=>{
    const cover = p.image ? `<img src="${esc(p.image)}" alt="">` : p.mark;
    const style = p.image ? "" : ` style="background:${p.grad}"`;
    return `
    <button class="card" data-proj="${p.id}">
      <div class="thumb"${style}>${cover}</div>
      <h3>${esc(loc(p,"name"))}</h3>
      <p>${esc(kindLabel(p.kind))} · ${p.year}</p>
    </button>`;
  }).join("")}</div>`;
}
function projSectionLabel(i, total){
  if(total <= 1) return t("secDescription");
  if(total === 2) return i===0 ? t("secTask") : t("secSolution");
  if(i===0) return t("secTask");
  if(i===total-1) return t("secResult");
  return t("secProcess");
}

function projectHTML(p){
  const cover = p.image ? `<img class="zoomable" src="${esc(p.image)}" alt="">` : p.mark;
  const style = p.image ? "" : ` style="background:${p.grad}"`;
  const star = p.liveLink ? `<sup class="note-star">*</sup>` : "";
  const sid = i => `proj-${p.id}-sec-${i}`;
  const gid = `proj-${p.id}-gallery`;
  const pText = loc(p,"text"), pTags = loc(p,"tags");

  const navItems = [
    ...pText.map((tx,i)=>`<li><a href="#" data-jump="${sid(i)}">${esc(projSectionLabel(i,pText.length))}</a></li>`),
    p.gallery ? `<li><a href="#" data-jump="${gid}">${t("projScreens")}</a></li>` : "",
    `<li><a href="${esc(p.link)}" target="_blank" rel="noopener">${t("projLink")}</a></li>`,
    p.protoLink ? `<li><a href="${esc(p.protoLink)}" target="_blank" rel="noopener">${t("projProtoLink")}</a></li>` : "",
  ].filter(Boolean).join("");

  return `
  <div class="detail">
    <div class="detail-head">
      <div class="detail-head-text">
        <h2>${esc(loc(p,"name"))}${star}</h2>
        <p class="sub">${esc(kindLabel(p.kind))} · ${p.year}</p>

        <div class="proj-props">
          <div class="proj-prop"><span class="proj-prop-k">${ic("ic-clock")}${t("projYear")}</span><span class="proj-prop-v">${p.year}</span></div>
          <div class="proj-prop"><span class="proj-prop-k">${ic("ic-user")}${t("projRole")}</span><span class="proj-prop-v">${esc(loc(p,"role"))}</span></div>
          <div class="proj-prop"><span class="proj-prop-k">${ic("ic-brief")}${t("projClient")}</span><span class="proj-prop-v">${esc(loc(p,"client"))}</span></div>
          <div class="proj-prop"><span class="proj-prop-k">${ic("ic-tag")}${t("projTags")}</span><span class="proj-prop-v"><span class="tags">${pTags.map(tg=>`<span class="tag">${esc(tg)}</span>`).join("")}</span></span></div>
        </div>
      </div>
      <div class="hero"${style}>${cover}</div>
    </div>
    <div class="detail-in">
      <div class="proj-nav">
        <div class="proj-nav-title">${t("projNav")}</div>
        <ul class="proj-nav-list">${navItems}</ul>
      </div>

      ${pText.map((tx,i)=>`
      <section class="proj-section" id="${sid(i)}">
        <h4 class="proj-section-h">${esc(projSectionLabel(i,pText.length))}</h4>
        <p class="body">${esc(tx)}</p>
      </section>`).join("")}

      ${p.gallery ? `
      <section class="proj-section" id="${gid}">
        <h4 class="proj-section-h">${t("projScreens")}</h4>
        <div class="p-gallery">${p.gallery.map(g=>`<img class="zoomable" src="${esc(g)}" alt="">`).join("")}</div>
      </section>` : ""}

      <div class="btn-row">
        <a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">${t("projOpen")} ${ic("ic-chev")}</a>
        ${p.protoLink ? `<a class="btn ghost" href="${esc(p.protoLink)}" target="_blank" rel="noopener">${t("projViewProto")} ${ic("ic-chev")}</a>` : ""}
      </div>
      ${p.protoLink ? `<p class="proto-note">${t("projProtoNote")}</p>` : ""}
      ${p.liveLink ? `<p class="footnote">* ${t("projFootnotePrefix")}<a href="${esc(p.liveLink)}" target="_blank" rel="noopener">${esc(p.liveLink.replace("https://",""))}</a></p>` : ""}
    </div>
  </div>`;
}

function notesHTML(activeId){
  const n = NOTES.find(x=>x.id===activeId)||NOTES[0];
  return `
  <aside class="notes-sb">
    ${NOTES.map(x=>`<button class="note-item ${x.id===n.id?"on":""}" data-note="${x.id}">
      <strong>${esc(loc(x,"title"))}</strong><span>${esc(loc(x,"date"))}</span></button>`).join("")}
  </aside>
  <div class="note-body"><div class="stamp">${esc(loc(n,"date"))}</div>${loc(n,"body")}</div>`;
}

function aboutHTML(){
  return `<div class="doc">
    <h1>${esc(loc(ME,"fullName"))}</h1>
    <p class="lede">${esc(loc(ME,"tagline"))} · ${esc(loc(ME,"city"))}</p>
    <p>${t("aboutHello")}</p>
    <h3>${t("aboutDoing")}</h3>
    <p>${t("aboutDoingText")}</p>
    <h3>${t("aboutTools")}</h3>
    <div class="tags">${["Figma","Photoshop","Illustrator","After Effects","Blender","Notion"].map(tg=>`<span class="tag">${tg}</span>`).join("")}</div>
    <h3>${t("aboutExp")}</h3>
    <p>${t("aboutExpText")}</p>
    <h3>${t("aboutNext")}</h3>
    <p>${t("aboutNextText")}</p>
    <div class="rows" style="margin-top:22px">
      <a class="row" href="#" data-open-app="projects">${ic("ic-folder")}<span><b>${t("menuProjects")}</b><small>${t("aboutProjectsRow")}</small></span><span class="go">›</span></a>
      <a class="row" href="#" data-open-app="contacts">${ic("ic-mail")}<span><b>${t("menuContacts")}</b><small>${t("aboutContactsRow")}</small></span><span class="go">›</span></a>
    </div>
  </div>`;
}

function contactsHTML(){
  return `<div class="doc">
    <h1>${t("contactsTitle")}</h1>
    <p class="lede">${t("contactsLede")}</p>
    <div class="rows">
      <a class="row" href="mailto:${esc(ME.email)}">${ic("ic-mail")}<span><b>${t("contactsMail")}</b><small>${esc(ME.email)}</small></span><span class="go">›</span></a>
      <a class="row" href="${esc(ME.telegram)}" target="_blank" rel="noopener">${ic("ic-chev")}<span><b>Telegram</b><small>${esc(ME.telegram.replace("https://",""))}</small></span><span class="go">›</span></a>
      <a class="row" href="${esc(ME.behance)}" target="_blank" rel="noopener">${ic("ic-star")}<span><b>Behance</b><small>${esc(ME.behance.replace("https://",""))}</small></span><span class="go">›</span></a>
      <a class="row" href="#" data-open-app="resume">${ic("ic-doc")}<span><b>${t("contactsResume")}</b><small>${t("contactsResumeSub")}</small></span><span class="go">›</span></a>
    </div>
  </div>`;
}

function resumeHTML(){
  return `<div class="doc">
    <h1>${esc(loc(ME,"fullName"))}</h1>
    <p class="lede">${esc(loc(ME,"role"))} · ${esc(loc(ME,"city"))}</p>
    <h3>${t("resumeExp")}</h3>
    <p>${t("aboutExpText")}</p>
    <h3>${t("resumeEdu")}</h3>
    <p>${t("resumeEduText")}</p>
    <h3>${t("resumeSkills")}</h3>
    <div class="tags">${["Figma","Photoshop","Illustrator","After Effects","Blender","Notion"].map(tg=>`<span class="tag">${tg}</span>`).join("")}</div>
    <h3>${t("resumeLang")}</h3>
    <p>${t("resumeLangText")}</p>
    <div class="rows" style="margin-top:22px">
      <a class="row" href="#" data-open-app="contacts">${ic("ic-mail")}<span><b>${t("menuContacts")}</b><small>${t("aboutContactsRow")}</small></span><span class="go">›</span></a>
    </div>
  </div>`;
}

function shelfHTML(filter, activeId){
  const items = filter ? SHELF.filter(s=>s.type===filter) : SHELF;
  const active = items.find(s=>s.id===activeId) || items[0];
  return `
  <div class="shelf-app">
    <div class="shelf-tabs">
      <button data-shelff="" class="${!filter?"on":""}">${t("shelfAll")}</button>
      <button data-shelff="book" class="${filter==="book"?"on":""}">${t("shelfBooks")}</button>
      <button data-shelff="movie" class="${filter==="movie"?"on":""}">${t("shelfMovies")}</button>
    </div>
    ${items.length ? `<div class="shelf-strip">${items.map(s=>{
      const cover = s.image
        ? `<img src="${esc(s.image)}" alt="">`
        : `<span class="shelf-cover-mark" style="background:${s.grad}">${s.mark}</span>`;
      return `<button class="shelf-cover ${active && s.id===active.id ? "on" : ""}" data-shelf-item="${s.id}">${cover}</button>`;
    }).join("")}</div>` : `<div class="shelf-empty">${t("shelfEmpty")}</div>`}
    ${active ? `
    <div class="shelf-info">
      <div class="shelf-info-label">${active.type==="book" ? t("shelfBook") : t("shelfMovie")}</div>
      <h3 class="shelf-info-title">${esc(loc(active,"title"))}</h3>
      <p class="shelf-info-sub">${esc(loc(active,"author"))} · ${active.year}</p>
    </div>` : ""}
  </div>`;
}

function stickersHTML(){
  return `
  <aside class="fsb st-sb">
    <span class="st-title">${t("stTitle")}</span>
    <div class="st-tools" id="stTools">
      <button class="st-tool-btn" id="stPencilBtn" type="button" data-tool="pencil" title="${t("stPencil")}">✏️</button>
      <button class="st-tool-btn" id="stEraserBtn" type="button" data-tool="eraser" title="${t("stEraser")}">🧽</button>
      <button class="st-tool-btn" id="stEmojiBtn" type="button" data-tool="emoji" title="${t("stEmoji")}">🙂</button>
    </div>
    <div class="st-swatches" id="stPenSwatches"></div>
    <button class="st-bg-btn" id="stBgBtn" type="button" title="${t("stBgTitle")}">
      <span class="st-bg-swatch" id="stBgSwatch"></span>
      ${t("stBg")}
    </button>
    <span class="st-count" id="stCount"></span>
  </aside>
  <div class="stickies" id="stickies">
    <div class="st-compose" id="stCompose"></div>
    <div class="st-placed" id="stPlaced"></div>
  </div>`;
}

function termHTML(){
  return `<div class="term">
    <div class="out">${t("termIntro")}<b>help</b>${t("termIntroEnd")}</div>
    <div class="term-line"><span class="p">${esc(loc(ME,"name").toLowerCase())}@desktop ~ %</span><input class="term-in" autocomplete="off" spellcheck="false"></div>
  </div>`;
}

const CMDS = {
  help:()=>t("cmdHelp"),
  about:()=>loc(ME,"name")+" — "+loc(ME,"tagline"),
  projects:()=>PROJECTS.map(p=>"• "+loc(p,"name")+" — "+kindLabel(p.kind)+" ("+p.year+")").join("\n"),
  contacts:()=>t("cmdMail")+ME.email+"\ntelegram: "+ME.telegram,
  notes:()=>NOTES.map(n=>"• "+loc(n,"title")).join("\n"),
  theme:()=>t("cmdThemesLabel")+THEMES.map(th=>loc(th,"name").toLowerCase()).join(", ")+"."+t("cmdThemesHint")
};

/* ---------------- обработчики внутри окон ---------------- */
function wire(id,el){
  el.addEventListener("click",e=>{
    const openLink=e.target.closest("[data-open-app]");
    if(openLink){ e.preventDefault(); openApp(openLink.dataset.openApp); }
  });

  if(id==="stickers"){ initStickersApp(el); }

  if(id==="projects"){
    el.addEventListener("click",e=>{
      const zoomImg=e.target.closest("img.zoomable");
      if(zoomImg){
        e.preventDefault();
        openLightbox(zoomImg.src, zoomImg.alt);
        return;
      }
      const jump=e.target.closest("[data-jump]");
      if(jump){
        e.preventDefault();
        const target=document.getElementById(jump.dataset.jump);
        if(target) target.scrollIntoView({behavior:"smooth",block:"start"});
        return;
      }
      const card=e.target.closest("[data-proj]");
      if(card){
        const p=PROJECTS.find(x=>x.id===card.dataset.proj);
        $(".ftoolbar",el).innerHTML=`<button class="back">${ic("ic-back")}${t("menuProjects")}</button><span>${esc(loc(p,"name"))}</span>`;
        $(".fscroll",el).innerHTML=projectHTML(p);
        $(".fscroll",el).scrollTop=0;
        $(".fsb",el).style.display="none";
        return;
      }
      if(e.target.closest(".back")){
        $(".ftoolbar",el).innerHTML=`<span>${t("menuProjects")} — ${plural(PROJECTS.length)}</span>`;
        $(".fscroll",el).innerHTML=gridHTML(PROJECTS);
        $(".fsb",el).style.display="";
        return;
      }
      const filterBtn=e.target.closest("[data-tagf],[data-yearf],[data-folder]");
      if(filterBtn){
        $$(".fsb button",el).forEach(b=>b.classList.remove("on"));
        filterBtn.classList.add("on");
        const tag=filterBtn.dataset.tagf, year=filterBtn.dataset.yearf;
        const list = tag  ? PROJECTS.filter(p=>p.kind===tag)
                   : year ? PROJECTS.filter(p=>p.year===year)
                          : PROJECTS;
        const title = tag ? kindLabel(tag) : (year || t("menuProjects"));
        $(".ftoolbar",el).innerHTML=`<span>${esc(title)} — ${plural(list.length)}</span>`;
        $(".fscroll",el).innerHTML=gridHTML(list);
      }
    });
  }

  if(id==="notes"){
    el.addEventListener("click",e=>{
      const b=e.target.closest("[data-note]"); if(!b) return;
      const n=NOTES.find(x=>x.id===b.dataset.note);
      $$(".note-item",el).forEach(x=>x.classList.remove("on"));
      b.classList.add("on");
      $(".note-body",el).innerHTML=`<div class="stamp">${esc(loc(n,"date"))}</div>${loc(n,"body")}`;
      $(".note-body",el).scrollTop=0;
    });
  }

  if(id==="shelf"){
    el.addEventListener("click",e=>{
      const tab=e.target.closest("[data-shelff]");
      if(tab){
        const filter=tab.dataset.shelff || null;
        $(".win-body",el).innerHTML = shelfHTML(filter);
        return;
      }
      const cover=e.target.closest("[data-shelf-item]");
      if(cover){
        const filterBtn=$(".shelf-tabs .on",el);
        const filter=filterBtn ? (filterBtn.dataset.shelff || null) : null;
        $(".win-body",el).innerHTML = shelfHTML(filter, cover.dataset.shelfItem);
      }
    });
  }

  if(id==="terminal"){
    const input=$(".term-in",el), term=$(".term",el);
    setTimeout(()=>input.focus(),120);
    term.addEventListener("click",()=>input.focus());
    input.addEventListener("keydown",ev=>{
      if(ev.key!=="Enter") return;
      const raw=input.value.trim(); input.value="";
      if(!raw) return;
      const line=document.createElement("div");
      line.className="out"; line.innerHTML=`<span class="p">%</span> ${esc(raw)}`;
      term.insertBefore(line,term.lastElementChild);
      if(raw==="clear"){ $$(".out",term).forEach(n=>n.remove()); return; }
      let res;
      if(raw.startsWith("theme ")){
        const q=raw.slice(6).trim().toLowerCase();
        const th=THEMES.find(x=>x.id===q || loc(x,"name").toLowerCase()===q || loc(x,"name").toLowerCase().startsWith(q.slice(0,4)));
        res = th ? (setTheme(th.id), t("cmdThemeSet")+loc(th,"name").toLowerCase()) : t("cmdNoTheme")+q+t("cmdAvailable")+THEMES.map(x=>loc(x,"name").toLowerCase()).join(", ")+")";
      } else if(raw.startsWith("open ")){
        const a=raw.slice(5).trim();
        const map={projects:"projects","проекты":"projects",notes:"notes","заметки":"notes",about:"about","обо мне":"about",contacts:"contacts","контакты":"contacts",resume:"resume","резюме":"resume",shelf:"shelf","полка":"shelf","моя полка":"shelf",terminal:"terminal"};
        if(map[a]){ openApp(map[a]); res=t("cmdOpening")+loc(APPS[map[a]],"title")+"»…"; }
        else res=t("cmdNoApp")+a;
      } else {
        res = CMDS[raw] ? CMDS[raw]() : t("cmdNotFound")+raw+t("cmdTryHelp");
      }
      const out=document.createElement("div");
      out.className="out"; out.textContent=res;
      term.insertBefore(out,term.lastElementChild);
      term.scrollTop=term.scrollHeight;
    });
  }
}

/* ---------------- лайтбокс ---------------- */
const lightbox=$("#lightbox"), lightboxImg=$("#lightboxImg");
function openLightbox(src,alt){
  lightboxImg.src=src;
  lightboxImg.alt=alt||"";
  lightbox.classList.add("on");
}
function closeLightbox(){
  lightbox.classList.remove("on");
  lightboxImg.src="";
}
lightbox.addEventListener("click",e=>{ if(e.target!==lightboxImg) closeLightbox(); });
$("#lightboxClose").addEventListener("click",closeLightbox);

/* ---------------- онбординг ---------------- */
const ONBOARD_KEY = "portfolio-onboarded";
const onboard=$("#onboard"), onboardSlides=$$(".onboard-slide"), onboardDots=$("#onboardDots"), onboardOk=$("#onboardOk");
let onboardStep=0;
onboardDots.innerHTML = onboardSlides.map((_,i)=>`<button class="onboard-dot${i===0?" on":""}" data-dot="${i}" aria-label="Слайд ${i+1}"></button>`).join("");
function renderOnboardStep(){
  onboardSlides.forEach((s,i)=>s.classList.toggle("on", i===onboardStep));
  $$(".onboard-dot",onboardDots).forEach((d,i)=>d.classList.toggle("on", i===onboardStep));
  onboardOk.textContent = onboardStep===onboardSlides.length-1 ? t("onboardDone") : t("onboardNext");
}
function maybeShowOnboarding(){
  // ⚠️ временно показываем всегда, чтобы удобно было редактировать — потом вернуть проверку localStorage
  onboardStep=0; renderOnboardStep();
  onboard.classList.add("on");
}
function closeOnboarding(){
  onboard.classList.remove("on");
  try{ localStorage.setItem(ONBOARD_KEY,"1"); }catch(e){}
}
onboard.addEventListener("click",e=>{ if(e.target===onboard) closeOnboarding(); });
$("#onboardClose").addEventListener("click",closeOnboarding);
onboardOk.addEventListener("click",()=>{
  if(onboardStep < onboardSlides.length-1){ onboardStep++; renderOnboardStep(); }
  else closeOnboarding();
});
onboardDots.addEventListener("click",e=>{
  const d=e.target.closest("[data-dot]"); if(!d) return;
  onboardStep=+d.dataset.dot; renderOnboardStep();
});

/* ---------------- меню ---------------- */
$("#nameBtn").addEventListener("click",e=>{ e.stopPropagation(); $("#nameMenu").classList.toggle("on"); });
$("#nameMenu").addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  $("#nameMenu").classList.remove("on");
  if(b.id==="lockAgain") relock();
  else if(b.dataset.open) openApp(b.dataset.open);
});
$$(".menubar [data-open]").forEach(b=>b.addEventListener("click",()=>openApp(b.dataset.open)));

/* при изменении размера экрана — вписываем окна обратно в вид */
let rTimer;
addEventListener("resize",()=>{
  clearTimeout(rTimer);
  rTimer=setTimeout(()=>{
    const narrow=isNarrow(), W=vw(), H=vh();
    open.forEach(el=>{
      if(el.classList.contains("max")) return;
      const w=Math.min(el.offsetWidth, W-16);
      const h=Math.min(el.offsetHeight, H-(narrow?196:110));
      el.style.width=w+"px"; el.style.height=h+"px";
      el.style.left=(narrow?8:Math.min(Math.max(PLATE_GAP,el.offsetLeft), Math.max(PLATE_GAP,W-w-8)))+"px";
      el.style.top =Math.max(narrow?TOP_MIN_NARROW:34, Math.min(el.offsetTop, H-h-(narrow?100:70)))+"px";
    });
  },120);
});

/* горячие клавиши: Esc — закрыть верхнее окно, ⌘/Ctrl+J — следующая тема */
addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    if(emojiDragActive){ if(cancelEmojiDrag) cancelEmojiDrag(); return; }
    if(bgPicker.classList.contains("on")){ closeBgPicker(); return; }
    if(onboard.classList.contains("on")){ closeOnboarding(); return; }
    if(lightbox.classList.contains("on")){ closeLightbox(); return; }
    const wins=$$(".win");
    if(wins.length){ const top=wins.reduce((a,b)=>+a.style.zIndex>+b.style.zIndex?a:b); closeWin(top.dataset.app); }
  }
  if((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==="j"){ e.preventDefault(); cycleTheme(); }
});
