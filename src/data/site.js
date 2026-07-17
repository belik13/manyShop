// Central site config — used across layout, components, schema.
export const SITE = {
  name: 'Relent',
  url: 'https://relentgroup.ru',
  email: 'relentgroup@gmail.com',
  telegram: '@aleksandrmkd',
  telegramUrl: 'https://t.me/aleksandrmkd',
  phone: '', // TODO: добавить телефон — важно для коммерческих факторов Яндекса
  tagline: 'Комплектация объектов из Китая под ключ',
  description:
    'Комплектация объектов мебелью и отделочными материалами напрямую из Китая под ключ: подбор, контроль производства, инспекция качества и доставка по всей России.',
  city: 'Гуанчжоу, Китай',
  areaServed: 'Россия',
};

// Main navigation (shared by header & footer).
export const NAV = [
  { label: 'Каталог', href: '/katalog/' },
  { label: 'Что комплектуем', href: '/uslugi/' },
  { label: 'Как работаем', href: '/kak-rabotaem/' },
  { label: 'Кейсы', href: '/#cases' },
  { label: 'Контакты', href: '/kontakty/' },
];
