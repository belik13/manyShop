// ---------------------------------------------------------------------------
// Каталоги для свободного скачивания.
// Как добавить каталог:
//   1) положите PDF в  public/katalogi/  (например  mebel-2026.pdf)
//   2) укажите его в поле file ниже и заполните pages / size
//   3) npm run build  → карточка станет кнопкой «Скачать PDF», запись уйдёт в sitemap
// Пока file = null, карточка показывается как «Готовится» со ссылкой на запрос.
// ---------------------------------------------------------------------------

export const catalogs = [
  {
    slug: 'mebel',
    title: 'Мебель для жилых интерьеров',
    category: 'Мебель',
    cover: '/images/product-connery-china.jpg',
    desc: 'Диваны, кресла, кровати и столы: модели фабрик-партнёров с габаритами, вариантами обивки и заводскими артикулами.',
    pages: null,
    size: null,
    file: null,
  },
  {
    slug: 'osveschenie',
    title: 'Освещение',
    category: 'Освещение',
    cover: '/images/case-full.jpg',
    desc: 'Люстры, подвесы, бра, торшеры и трековые системы — с типами цоколей, размерами и температурой света.',
    pages: null,
    size: null,
    file: null,
  },
  {
    slug: 'santehnika',
    title: 'Сантехника',
    category: 'Сантехника',
    cover: '/images/obj-apartments-new.jpg',
    desc: 'Смесители, раковины, ванны, душевые системы и инсталляции с техническими характеристиками.',
    pages: null,
    size: null,
    file: null,
  },
  {
    slug: 'plitka',
    title: 'Плитка и керамогранит',
    category: 'Отделка',
    cover: '/images/case-materials.jpg',
    desc: 'Крупноформатный керамогранит, настенная плитка и мозаика с фабрик Фошаня — форматы, коллекции, поверхности.',
    pages: null,
    size: null,
    file: null,
  },
  {
    slug: 'dveri',
    title: 'Двери',
    category: 'Отделка',
    cover: '/images/obj-house-new.jpg',
    desc: 'Межкомнатные и входные двери, скрытый монтаж, нестандартные размеры и варианты отделки полотна.',
    pages: null,
    size: null,
    file: null,
  },
  {
    slug: 'ulichnaya-mebel',
    title: 'Уличная мебель и кухни',
    category: 'Экстерьер',
    cover: '/images/product-kitchen-italy.jpg',
    desc: 'Уличные кухни, лаунж-группы и мебель для террас, глэмпингов и зон отдыха — материалы, устойчивые к погоде.',
    pages: null,
    size: null,
    file: null,
  },
];

export const getCatalog = (slug) => catalogs.find((c) => c.slug === slug);
export const availableCatalogs = () => catalogs.filter((c) => c.file);
