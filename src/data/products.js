// ---------------------------------------------------------------------------
// Единый источник данных для программных (авто-генерируемых) страниц.
// Добавили объект в массив products → на следующей сборке появилась новая
// страница /analog/<slug>/, ссылка в каталоге и запись в sitemap.
// ---------------------------------------------------------------------------

// Категории каталога. Порядок = порядок вывода.
export const categories = [
  { slug: 'divany', name: 'Диваны', accus: 'диван', image: '/images/product-sofa.jpg', desc: 'Модульные и классические диваны премиальных силуэтов — с фабрик Китая по цене в 3–4 раза ниже европейского бутика.' },
  { slug: 'kresla', name: 'Кресла', accus: 'кресло', image: '/images/product-chair-italy.jpg', desc: 'Дизайнерские кресла: культовые формы и фактуры, изготовленные по идентичной технологии.' },
  { slug: 'krovati', name: 'Кровати', accus: 'кровать', image: '/images/product-bed-italy.jpg', desc: 'Кровати с мягким изголовьем и премиальной обивкой — прямые поставки с фабрик-партнёров.' },
  { slug: 'stoly', name: 'Столы', accus: 'стол', image: '/images/product-table-italy.jpg', desc: 'Обеденные и журнальные столы: керамика, массив, стекло — те же материалы, другая цена.' },
  { slug: 'kuhni', name: 'Кухни', accus: 'кухню', image: '/images/product-kitchen-italy.jpg', desc: 'Кухонные гарнитуры и уличные кухни — корпуса, фасады, столешницы и техника под ваш проект.' },
  { slug: 'osveschenie', name: 'Освещение', accus: 'светильник', image: '/images/hero.jpg', desc: 'Люстры, бра, торшеры и трековые системы под ваш проект.' },
  { slug: 'santehnika', name: 'Сантехника', accus: 'сантехнику', image: '/images/obj-apartments.jpg', desc: 'Смесители, раковины, ванны и душевые системы напрямую с производств.' },
  { slug: 'dveri', name: 'Двери', accus: 'дверь', image: '/images/obj-house.jpg', desc: 'Межкомнатные и входные двери, скрытый монтаж, нестандартные размеры.' },
  { slug: 'plitka', name: 'Плитка и керамогранит', accus: 'плитку', image: '/images/why.jpg', desc: 'Керамогранит, крупноформат, мозаика — от фабрик Фошаня, столицы керамики.' },
  { slug: 'kamen', name: 'Камень', accus: 'камень', image: '/images/why.jpg', desc: 'Натуральный и искусственный камень для столешниц, фасадов и интерьера.' },
];

// Типы объектов (услуги/посадочные под сегменты спроса).
export const services = [
  { slug: 'kvartiry', name: 'Квартиры и апартаменты', gen: 'квартир и апартаментов', image: '/images/obj-apartments.jpg', desc: 'Полная комплектация квартиры мебелью, освещением и отделочными материалами под готовый дизайн-проект.' },
  { slug: 'doma', name: 'Частные дома', gen: 'частных домов', image: '/images/obj-house.jpg', desc: 'Подбор и поставка всех материалов и мебели для загородного дома — единым потоком с фабрик Китая.' },
  { slug: 'oteli', name: 'Отели', gen: 'отелей', image: '/images/obj-hotel.jpg', desc: 'Комплектация номерного фонда, лобби, ресторанов и общественных зон по единой спецификации.' },
  { slug: 'kommercheskie', name: 'Коммерческие объекты', gen: 'коммерческих объектов', image: '/images/hero.jpg', desc: 'Офисы, шоурумы, салоны и общественные пространства — контрактная мебель и отделка.' },
  { slug: 'restorany', name: 'Рестораны и кафе', gen: 'ресторанов и кафе', image: '/images/obj-house.jpg', desc: 'Мебель, освещение и отделка для залов, барных зон и террас под проект дизайнера.' },
];

// Товары-аналоги (двигатель трафика: «аналог {бренд} {модель} из Китая цена»).
export const products = [
  {
    slug: 'minotti-andersen', type: 'Диван', typeGen: 'дивана', model: 'Andersen', brand: 'Minotti',
    country: 'Италия', category: 'divany',
    priceOrig: '$14 000', priceChina: '$4 200', priceChinaNum: 4200, currency: 'USD', save: 70,
    photoOrig: '/images/product-sofa.jpg', photoChina: '/images/product-sofa-china.jpg',
    desc: 'Модульный диван с чистой архитектурной геометрией, широкими сиденьями и тонкой опорой. Собираем на фабрике-партнёре из тех же материалов — каркас, наполнение и обивочные ткани идентичны оригиналу.',
  },
  {
    slug: 'minotti-connery', type: 'Диван', typeGen: 'дивана', model: 'Connery', brand: 'Minotti',
    country: 'Италия', category: 'divany',
    priceOrig: '$42 000', priceChina: '$12 600', priceChinaNum: 12600, currency: 'USD', save: 70,
    photoOrig: '/images/product-connery-italy.jpg', photoChina: '/images/product-connery-china.jpg',
    desc: 'Крупный угловой диван с низкой посадкой, мягкими подушками и характерным основанием в контрастной отделке. Подходит для больших гостиных и лаунж-зон.',
  },
  {
    slug: 'hamilton-conte-aggi', type: 'Диван', typeGen: 'дивана', model: 'Aggi', brand: 'Hamilton Conte',
    country: 'Франция', category: 'divany',
    priceOrig: '$7 000', priceChina: '$2 100', priceChinaNum: 2100, currency: 'USD', save: 70,
    photoOrig: '/images/product-aggi-italy.jpg', photoChina: '/images/product-aggi-china.jpg',
    desc: 'Компактный округлый диван на поворотном основании с бархатной обивкой насыщенного терракотового оттенка. Собираем аналог из идентичных материалов — велюр, поролон, фанерный каркас.',
  },
  {
    slug: 'minotti-trio', type: 'Кресло', typeGen: 'кресла', model: 'Trio', brand: 'Minotti',
    country: 'Италия', category: 'kresla',
    priceOrig: '$8 800', priceChina: '$2 600', priceChinaNum: 2600, currency: 'USD', save: 70,
    photoOrig: '/images/product-trio-italy.jpg', photoChina: '/images/product-trio-china.jpg',
    desc: 'Лаунж-кресло на тонком деревянном каркасе с наклонной спинкой и мягким сиденьем. Сочетание гладкой кожи и фактурного букле повторяется один в один.',
  },
  {
    slug: 'bebitalia-harbor', type: 'Кресло', typeGen: 'кресла', model: 'Harbor', brand: 'B&B Italia',
    country: 'Италия', category: 'kresla',
    priceOrig: '$9 500', priceChina: '$2 850', priceChinaNum: 2850, currency: 'USD', save: 70,
    photoOrig: '/images/product-harbor-italy.jpg', photoChina: '/images/product-harbor-china.jpg',
    desc: 'Высокое кресло с подголовником на поворотном крестообразном основании, в комплекте с пуфом. Обивка букле светлого оттенка, посадка рассчитана на долгое сидение.',
  },
  {
    slug: 'minotti-laurel', type: 'Кресло', typeGen: 'кресла', model: 'Laurel', brand: 'Minotti',
    country: 'Италия', category: 'kresla',
    priceOrig: '$16 800', priceChina: '$5 000', priceChinaNum: 5000, currency: 'USD', save: 70,
    photoOrig: '/images/product-laurel-italy.jpg', photoChina: '/images/product-laurel-china.jpg',
    desc: 'Кресло с кожаной «оболочкой» и мягкими подушками из букле на поворотном металлическом основании. Сочетание кожи и ткани — ключевая деталь модели.',
  },
  {
    slug: 'tonin-casa-butterfly', type: 'Кухонный стол', typeGen: 'обеденного стола', model: 'Butterfly',
    brand: 'Tonin Casa', country: 'Италия', category: 'stoly',
    priceOrig: '$3 200', priceChina: '$950', priceChinaNum: 950, currency: 'USD', save: 70,
    photoOrig: '/images/product-table-italy.jpg', photoChina: '/images/product-table-china.jpg',
    desc: 'Обеденный стол с керамической или деревянной столешницей и выразительным основанием-«бабочкой». Возможен раскладной механизм.',
  },
  {
    slug: 'fratelli-barri-rimini', type: 'Кровать', typeGen: 'кровати', model: 'Rimini',
    brand: 'Fratelli Barri', country: 'Италия', category: 'krovati',
    priceOrig: '$5 300', priceChina: '$1 600', priceChinaNum: 1600, currency: 'USD', save: 70,
    photoOrig: '/images/product-bed-italy.jpg', photoChina: '/images/product-bed-china.jpg',
    desc: 'Кровать в стиле современного ар-деко с высоким мягким изголовьем, велюровой обивкой и деликатной металлической окантовкой.',
  },
  {
    slug: 'poliform-land', type: 'Уличная кухня', typeGen: 'уличной кухни', model: 'Land',
    brand: 'Poliform', country: 'Италия', category: 'kuhni',
    priceOrig: '$74 000', priceChina: '$22 000', priceChinaNum: 22000, currency: 'USD', save: 70,
    photoOrig: '/images/product-kitchen-italy.jpg', photoChina: '/images/product-kitchen-china.jpg',
    desc: 'Уличная кухня с барбекю и грилем: корпуса из материалов, устойчивых к погоде, встроенная техника и рабочая поверхность для террасы или зоны отдыха.',
  },
];

// --- helpers ---
export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const productsByCategory = (catSlug) => products.filter((p) => p.category === catSlug);
export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getService = (slug) => services.find((s) => s.slug === slug);
export const fullName = (p) => `${p.type} ${p.brand} ${p.model}`;
