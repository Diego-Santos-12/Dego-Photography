// Galerías — categories > events > photos, all from this one list.
// To add an event: add an entry to its category's `events` with a unique id, a title,
// a cover and its photos as [path, width, height]. `date` is optional text, shown as written;
// an event with no photos and no cover still shows its name and date.
// An event with `url` is a private gallery hosted elsewhere: its card opens that address.
// What the admin panel publishes (/portafolio.js) replaces this list; the list stays as the fallback.
const GALLERIES = window.PORTAFOLIO_PUBLICADO || [
  {
    id: "bodas",
    title: "Bodas",
    description: "Historias de amor contadas con autenticidad y emoción.",
    servicePage: "/servicios/bodas/",
    quote: "Bodas",
    events: [
      {
        id: "sofia-alejandro",
        title: "Sofía & Alejandro",
        cover: "/assets/img/bodas/bodas-5.jpg",
        photos: [
          ["/assets/img/bodas/bodas-1.jpg", 1800, 1200],
          ["/assets/img/bodas/bodas-2.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-3.jpg", 1800, 1200],
          ["/assets/img/bodas/bodas-4.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-5.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-6.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-7.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-8.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-9.jpg", 1800, 1200],
          ["/assets/img/bodas/bodas-10.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-11.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-12.jpg", 1800, 1200],
          ["/assets/img/bodas/bodas-13.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-14.jpg", 1200, 1800],
          ["/assets/img/bodas/bodas-15.jpg", 1200, 1800]
        ]
      }
    ]
  },
  {
    id: "eventos-sociales",
    title: "Eventos Sociales",
    description: "Bautizos, graduaciones y celebraciones familiares.",
    servicePage: "/servicios/eventos-sociales/",
    quote: "Eventos%20Sociales",
    events: [
      {
        id: "bautizo",
        title: "Bautizo",
        cover: "/assets/img/eventos-sociales/bautizo-9.jpg",
        photos: [
          ["/assets/img/eventos-sociales/bautizo-1.jpg", 1800, 1200],
          ["/assets/img/eventos-sociales/bautizo-2.jpg", 1200, 1800],
          ["/assets/img/eventos-sociales/bautizo-3.jpg", 1200, 1800],
          ["/assets/img/eventos-sociales/bautizo-4.jpg", 1200, 1800],
          ["/assets/img/eventos-sociales/bautizo-5.jpg", 1200, 1800],
          ["/assets/img/eventos-sociales/bautizo-6.jpg", 1800, 1490],
          ["/assets/img/eventos-sociales/bautizo-7.jpg", 1200, 1800],
          ["/assets/img/eventos-sociales/bautizo-8.jpg", 1200, 1800],
          ["/assets/img/eventos-sociales/bautizo-9.jpg", 1200, 1800],
          ["/assets/img/eventos-sociales/bautizo-10.jpg", 1800, 1200],
          ["/assets/img/eventos-sociales/bautizo-11.jpg", 1200, 1800]
        ]
      },
      {
        id: "graduacion",
        title: "Graduación",
        cover: "/assets/img/eventos-sociales/graduacion-1.jpg",
        photos: [
          ["/assets/img/eventos-sociales/graduacion-1.jpg", 800, 1200],
          ["/assets/img/eventos-sociales/graduacion-2.jpg", 800, 1200],
          ["/assets/img/eventos-sociales/graduacion-3.jpg", 800, 1200],
          ["/assets/img/eventos-sociales/graduacion-4.jpg", 800, 1200],
          ["/assets/img/eventos-sociales/graduacion-5.jpg", 800, 1200],
          ["/assets/img/eventos-sociales/graduacion-6.jpg", 800, 1200],
          ["/assets/img/eventos-sociales/graduacion-7.jpg", 800, 1200],
          ["/assets/img/eventos-sociales/graduacion-8.jpg", 800, 1200]
        ]
      }
    ]
  },
  {
    id: "xv-anos",
    title: "XV Años",
    description: "Una celebración única, fotografiada de principio a fin.",
    servicePage: "/servicios/xv-anos/",
    quote: "XV%20A%C3%B1os",
    events: [
      {
        id: "xv-iglesia",
        title: "XV en Iglesia",
        cover: "/assets/img/xv/xv-12.jpg",
        photos: [
          ["/assets/img/xv/xv-1.jpg", 1800, 1200],
          ["/assets/img/xv/xv-2.jpg", 1800, 1200],
          ["/assets/img/xv/xv-3.jpg", 1200, 1800],
          ["/assets/img/xv/xv-4.jpg", 1200, 1800],
          ["/assets/img/xv/xv-5.jpg", 1800, 1200],
          ["/assets/img/xv/xv-6.jpg", 1200, 1800],
          ["/assets/img/xv/xv-7.jpg", 1200, 1800],
          ["/assets/img/xv/xv-8.jpg", 1800, 1200],
          ["/assets/img/xv/xv-9.jpg", 1200, 1800],
          ["/assets/img/xv/xv-10.jpg", 1200, 1800],
          ["/assets/img/xv/xv-11.jpg", 1200, 1800],
          ["/assets/img/xv/xv-12.jpg", 1800, 1200],
          ["/assets/img/xv/xv-13.jpg", 1200, 1800],
          ["/assets/img/xv/xv-14.jpg", 1800, 1200]
        ]
      },
      {
        id: "xv-misa-jardin",
        title: "XV: Misa y Jardín",
        cover: "/assets/img/xv/xv-17.jpg",
        photos: [
          ["/assets/img/xv/xv-15.jpg", 1800, 1202],
          ["/assets/img/xv/xv-16.jpg", 1202, 1800],
          ["/assets/img/xv/xv-17.jpg", 1800, 1202],
          ["/assets/img/xv/xv-18.jpg", 1800, 1202],
          ["/assets/img/xv/xv-19.jpg", 1800, 1202],
          ["/assets/img/xv/xv-20.jpg", 1800, 1202],
          ["/assets/img/xv/xv-21.jpg", 1202, 1800]
        ]
      }
    ]
  },
  {
    id: "books",
    title: "Books",
    description: "Sesiones de retrato en exterior y en estudio.",
    servicePage: "/servicios/books/",
    quote: "Books",
    events: [
      {
        id: "book-exterior",
        title: "Book en Exterior",
        cover: "/assets/img/books/books-4.avif",
        photos: [
          ["/assets/img/books/books-1.avif", 687, 1031],
          ["/assets/img/books/books-2.avif", 687, 1030],
          ["/assets/img/books/books-3.avif", 687, 1031],
          ["/assets/img/books/books-4.avif", 687, 1031],
          ["/assets/img/books/books-5.avif", 1170, 780],
          ["/assets/img/books/books-6.avif", 687, 1031]
        ]
      },
      {
        id: "book-estudio",
        title: "Book en Estudio",
        cover: "/assets/img/books/books-10.avif",
        photos: [
          ["/assets/img/books/books-7.avif", 688, 1031],
          ["/assets/img/books/books-8.avif", 688, 1031],
          ["/assets/img/books/books-9.avif", 688, 1031],
          ["/assets/img/books/books-10.avif", 688, 1031],
          ["/assets/img/books/books-11.avif", 688, 1031]
        ]
      },
      {
        id: "retrato-estudio",
        title: "Retrato en Estudio",
        cover: "/assets/img/books/books-12.avif",
        photos: [
          ["/assets/img/books/books-12.avif", 687, 1031]
        ]
      }
    ]
  },
  {
    id: "eventos-especiales",
    title: "Eventos Especiales",
    description: "Festivales y presentaciones llenos de talento.",
    servicePage: "/servicios/eventos-especiales/",
    quote: "Eventos%20Especiales",
    events: [
      {
        id: "festival-navideno-art-class",
        title: "Festival Navideño Art Class",
        cover: "/assets/img/eventos-especiales/festival-1.jpg",
        photos: [
          ["/assets/img/eventos-especiales/festival-1.jpg", 1800, 1200],
          ["/assets/img/eventos-especiales/festival-2.jpg", 1200, 1800],
          ["/assets/img/eventos-especiales/festival-3.jpg", 1800, 1200],
          ["/assets/img/eventos-especiales/festival-4.jpg", 1200, 1800],
          ["/assets/img/eventos-especiales/festival-5.jpg", 1200, 1800],
          ["/assets/img/eventos-especiales/festival-6.jpg", 1200, 1800],
          ["/assets/img/eventos-especiales/festival-7.jpg", 1200, 1800],
          ["/assets/img/eventos-especiales/festival-8.jpg", 1200, 1800]
        ]
      },
      {
        id: "festival-class-dance-coco",
        title: "Festival Class Dance Coco",
        date: "",
        cover: "",
        url: "/entrar",
        photos: []
      }
    ]
  }
];

// Renders from ?categoria=&evento= before script.js runs, so its lightbox picks up the grid.
(function renderGallery() {
  const root = document.getElementById('galleryView');
  const params = new URLSearchParams(window.location.search);
  const category = GALLERIES.find(c => c.id === params.get('categoria'));
  const event = category && category.events.find(e => e.id === params.get('evento') && !e.url);

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
  const photoCount = (c) => c.events.reduce((sum, e) => sum + e.photos.length, 0);
  const categoryUrl = (c) => `/galerias/?categoria=${c.id}`;
  const eventMeta = (e, count) => [e.date && esc(e.date), count].filter(Boolean).join(' &middot; ');

  const card = (href, cover, title, meta, text) => `
    <a href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''} class="gallery-card">
      <div class="gallery-card-img">${cover ? `<img src="${cover}" alt="${esc(title)}" loading="lazy" decoding="async">` : ''}</div>
      <div class="gallery-card-info">
        <h2>${esc(title)}</h2>
        ${text ? `<p>${esc(text)}</p>` : ''}
        <span class="gallery-card-meta">${meta}</span>
      </div>
    </a>`;

  const crumbs = [['/#hero', 'Inicio']];
  let eyebrow = 'Galerías', title = 'Momentos Que Hemos Fotografiado.', sub = 'Elige una categoría y explora los eventos que hemos fotografiado.', body;
  document.title = 'Galerías | DEGO Photography';

  if (event) {
    crumbs.push(['/galerias/', 'Galerías'], [categoryUrl(category), category.title]);
    eyebrow = category.title;
    title = event.title;
    const count = event.photos.length;
    sub = [event.date, count ? `${plural(count, 'fotografía')}. Toca cualquier foto para verla en grande.` : 'Aún no hay fotos publicadas de este evento.'].filter(Boolean).join(' · ');
    body = `${count ? `<div class="masonry-grid gallery-photos">${event.photos.map(([src, w, h]) =>
      `<img src="${src}" alt="${esc(event.title)}" width="${w}" height="${h}" loading="lazy" decoding="async">`).join('')}</div>` : ''}
      <a href="${categoryUrl(category)}" class="gallery-back">&#8592; Ver todos los eventos de ${esc(category.title)}</a>`;
    document.title = `${event.title} | Galerías | DEGO Photography`;
  } else if (category) {
    crumbs.push(['/galerias/', 'Galerías']);
    eyebrow = 'Galerías';
    title = category.title;
    sub = category.description;
    body = `<div class="gallery-cards">${category.events.map(e =>
      e.url
        ? card(e.url, e.cover, e.title, eventMeta(e, 'Galería privada <span class="arrow-ico">&#8599;</span>'))
        : card(`${categoryUrl(category)}&evento=${e.id}`, e.cover, e.title, eventMeta(e, e.photos.length ? plural(e.photos.length, 'foto') : 'Sin fotos publicadas'))).join('')}</div>
      ${category.servicePage ? `<a href="${category.servicePage}" class="gallery-back">Ver el servicio de ${esc(category.title)} <span class="arrow-ico">&#8599;</span></a>` : ''}`;
    document.title = `${category.title} | Galerías | DEGO Photography`;
  } else {
    body = `<div class="gallery-cards">${GALLERIES.map(c =>
      card(categoryUrl(c), c.events[0].cover, c.title, `${plural(c.events.length, 'evento')} &middot; ${plural(photoCount(c), 'foto')}`, c.description)).join('')}</div>`;
  }

  const current = event ? event.title : category ? category.title : 'Galerías';
  root.innerHTML = `
    <p class="breadcrumb" style="margin-top: 0;">${crumbs.map(([href, label]) =>
      `<a href="${href}">${esc(label)}</a><span>/</span>`).join('')}<span class="current">${esc(current)}</span></p>
    <div class="section-head" style="margin-top: 28px;">
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h1 class="section-title" style="font-size: clamp(34px, 5vw, 64px);">${esc(title)}</h1>
      <p class="section-sub">${esc(sub)}</p>
    </div>
    ${body}`;

  const quote = document.getElementById('galleryQuote');
  if (category) quote.href = `/cotizacion/?servicio=${category.quote}`;
})();
