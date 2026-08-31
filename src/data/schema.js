// ---------------------------------------------------------------------------
// Граф сущностей Schema.org.
// Все схемы сайта выводятся ОДНИМ блоком @graph и связаны через @id —
// так поисковики и ИИ видят не набор карточек, а связную сеть знаний:
//   Organization ← WebSite ← WebPage ← Product / Service / Article / Case
// ---------------------------------------------------------------------------
import { SITE } from './site.js';

export const ORG_ID  = `${SITE.url}/#organization`;
export const SITE_ID = `${SITE.url}/#website`;
export const abs = (p) => new URL(p, SITE.url).href;

/** Ссылка на организацию — вставляется в provider / seller / publisher / about */
export const orgRef = { '@id': ORG_ID };
export const LOGO_ID = `${SITE.url}/#logo`;

/** Логотип как самостоятельный узел графа */
export function logoImage() {
  return imageObject('/images/logo-relent.png', 'Логотип Relent', LOGO_ID);
}

/** Идентификаторы страницы: сама страница и её первичное изображение */
export const pageId  = (path) => `${abs(path)}#webpage`;
export const imageId = (path) => `${abs(path)}#primaryimage`;

/** ImageObject — даёт ИИ понять, что за картинка и к чему относится */
export function imageObject(src, caption, id) {
  return {
    '@type': 'ImageObject',
    ...(id ? { '@id': id } : {}),
    url: abs(src),
    contentUrl: abs(src),
    ...(caption ? { caption } : {}),
  };
}

/** Центральная сущность: сама компания */
export function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: ['Relent Group', 'Релент'],
    url: SITE.url + '/',
    email: SITE.email,
    description: SITE.description,
    slogan: SITE.tagline,
    logo: { '@id': LOGO_ID },
    image: { '@id': LOGO_ID },
    sameAs: [SITE.telegramUrl],
    areaServed: { '@type': 'Country', name: SITE.areaServed },
    // чем компания занимается — помогает ИИ отнести её к теме
    knowsAbout: [
      'Комплектация объектов мебелью',
      'Импорт мебели из Китая',
      'Контрактная мебель',
      'Инспекция качества на фабриках',
      'Консолидация и доставка грузов из Китая',
      'Отделочные материалы из Китая',
    ],
    // где физически работает команда
    location: {
      '@type': 'Place',
      name: SITE.city,
      address: { '@type': 'PostalAddress', addressCountry: 'CN', addressLocality: 'Гуанчжоу' },
    },
    ...(SITE.phone
      ? { contactPoint: { '@type': 'ContactPoint', telephone: SITE.phone, contactType: 'sales', areaServed: 'RU' } }
      : {}),
  };
}

/** Сайт как сущность */
export function website() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE.url + '/',
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'ru-RU',
    publisher: orgRef,
  };
}

/** Страница: связывает контент с сайтом и компанией */
export function webPage({ path, title, description, image, breadcrumbId }) {
  return {
    '@type': 'WebPage',
    '@id': pageId(path),
    url: abs(path),
    name: title,
    description,
    isPartOf: { '@id': SITE_ID },
    about: orgRef,
    inLanguage: 'ru-RU',
    ...(image ? { primaryImageOfPage: { '@id': imageId(path) } } : {}),
    ...(breadcrumbId ? { breadcrumb: { '@id': breadcrumbId } } : {}),
  };
}
