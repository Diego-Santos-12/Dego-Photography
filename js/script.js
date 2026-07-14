// Hero slice carousel — one photo cut into vertical strips; cursor / autoplay
// advances to the next photo with a staggered shutter transition per strip.
const sliceCarousel = document.getElementById('sliceCarousel');
if (sliceCarousel) {
  const slices = [...sliceCarousel.querySelectorAll('.slice')];
  const images = [
    'assets/img/carousel-1.jpg',
    'assets/img/carousel-2.jpg',
    'assets/img/carousel-3.jpg',
    'assets/img/carousel-4.jpg',
    'assets/img/carousel-5.jpg'
  ];
  let current = 0;
  let animating = false;

  function layoutSlices() {
    const rect = sliceCarousel.getBoundingClientRect();
    const w = rect.width;
    const stripW = w / slices.length;
    slices.forEach((slice, i) => {
      const img = slice.querySelector('img');
      img.style.width = w + 'px';
      img.style.left = (-i * stripW) + 'px';
    });
  }
  window.addEventListener('resize', layoutSlices);
  layoutSlices();

  function advance() {
    if (animating) return;
    animating = true;
    current = (current + 1) % images.length;
    slices.forEach((slice, i) => {
      setTimeout(() => {
        slice.classList.add('fading');
        setTimeout(() => {
          slice.querySelector('img').src = images[current];
          slice.classList.remove('fading');
        }, 550);
      }, i * 220);
    });
    setTimeout(() => { animating = false; }, slices.length * 220 + 900);
  }

  sliceCarousel.addEventListener('mouseenter', advance);
  setInterval(advance, 8000);
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Animated counters
const counters = document.querySelectorAll('.count');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterIO.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    item.closest('.faq-list').querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('open');
      other.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});
// open first FAQ item per column by default
document.querySelectorAll('.faq-list').forEach(list => {
  const first = list.querySelector('.faq-item');
  if (first) {
    first.classList.add('open');
    first.querySelector('.faq-a').style.maxHeight = first.querySelector('.faq-a').scrollHeight + 'px';
  }
});

// Header scroll state + scroll-to-top
const header = document.getElementById('siteHeader');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  scrollTopBtn.classList.toggle('visible', y > 700);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Testimonial slider — cycles through several real client testimonials
const testiPrev = document.getElementById('testiPrev');
const testiNext = document.getElementById('testiNext');
const testimonialSlider = document.getElementById('testimonialSlider');
if (testiPrev && testiNext && testimonialSlider) {
  const testimonials = [
    {
      photo: 'assets/img/testimonial-wedding.jpg',
      framing: 'center 33%',
      grayscale: false,
      quote: 'No tenemos palabras para agradecerles. Nos hicieron sentir súper cómodos y capturaron cada momento de una forma increíble. Cada vez que vemos las fotos, volvemos a vivir ese día.',
      avatar: 'assets/img/testimonial-wedding.jpg',
      avatarFraming: 'center 33%',
      name: 'Sofía & Alejandro',
      role: 'Sesión de Boda'
    },
    {
      photo: 'assets/img/testimonial-xv.avif',
      framing: 'center 76%',
      grayscale: false,
      quote: 'Quedamos encantados con el resultado. Mi hija disfrutó muchísimo la sesión y las fotos quedaron hermosas. Sin duda, un recuerdo que vamos a atesorar para siempre.',
      avatar: 'assets/img/testimonial-xv.avif',
      avatarFraming: 'center 76%',
      name: 'Laura G. (Mamá de Valeria)',
      role: 'Sesión de XV Años'
    },
    {
      photo: 'assets/img/testimonial-graduacion.jpg',
      framing: 'center 25%',
      grayscale: false,
      quote: 'Las fotos quedaron increíbles y capturaron los mejores momentos con nuestros amigos y familia. Además, hicieron que todo fuera muy natural. ¡Los volveríamos a contratar sin pensarlo!',
      avatar: 'assets/img/testimonial-graduacion.jpg',
      avatarFraming: 'center 25%',
      name: 'Andrea M., Ignacio Zaragoza',
      role: 'Sesión de Graduación'
    }
  ];
  let testiIndex = 0;
  const photoEl = document.getElementById('testimonialPhoto');
  const quoteEl = document.getElementById('testimonialQuote');
  const avatarEl = document.getElementById('testimonialAvatar');
  const nameEl = document.getElementById('testimonialName');
  const roleEl = document.getElementById('testimonialRole');

  function renderTestimonial(index) {
    const t = testimonials[index];
    [photoEl, quoteEl, avatarEl].forEach(el => el.style.opacity = '0');
    setTimeout(() => {
      photoEl.src = t.photo;
      photoEl.style.filter = t.grayscale ? 'grayscale(1)' : 'none';
      photoEl.style.objectPosition = t.framing || '50% 50%';
      quoteEl.textContent = t.quote;
      avatarEl.src = t.avatar;
      avatarEl.style.objectPosition = t.avatarFraming || '50% 50%';
      nameEl.textContent = t.name;
      roleEl.textContent = t.role;
      [photoEl, quoteEl, avatarEl].forEach(el => el.style.opacity = '1');
    }, 250);
  }
  testiPrev.addEventListener('click', () => {
    testiIndex = (testiIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(testiIndex);
  });
  testiNext.addEventListener('click', () => {
    testiIndex = (testiIndex + 1) % testimonials.length;
    renderTestimonial(testiIndex);
  });
}

// Portfolio lightbox — used on service landing pages; supports several independent galleries per page
const masonryGrids = document.querySelectorAll('.masonry-grid');
if (masonryGrids.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Cerrar">&times;</button>
    <button class="lightbox-prev" aria-label="Anterior">&#8592;</button>
    <img src="" alt="">
    <button class="lightbox-next" aria-label="Siguiente">&#8594;</button>
  `;
  document.body.appendChild(lightbox);
  const lbImg = lightbox.querySelector('img');
  let activeGallery = [];
  let lbIndex = 0;
  function openLightbox(gallery, i) {
    activeGallery = gallery;
    lbIndex = i;
    lbImg.src = activeGallery[i].src;
    lbImg.alt = activeGallery[i].alt;
    lightbox.classList.add('open');
  }
  function closeLightbox() { lightbox.classList.remove('open'); }
  function showDelta(delta) {
    lbIndex = (lbIndex + delta + activeGallery.length) % activeGallery.length;
    lbImg.src = activeGallery[lbIndex].src;
    lbImg.alt = activeGallery[lbIndex].alt;
  }
  masonryGrids.forEach(grid => {
    const gallery = [...grid.querySelectorAll('img')];
    gallery.forEach((img, i) => img.addEventListener('click', () => openLightbox(gallery, i)));
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showDelta(-1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => showDelta(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showDelta(-1);
    if (e.key === 'ArrowRight') showDelta(1);
  });
}

// Quote form — assembles a WhatsApp message from the captured fields
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  const quoteParams = new URLSearchParams(window.location.search);
  const serviceParam = quoteParams.get('servicio');
  const serviceSelect = document.getElementById('quoteService');
  if (serviceParam && serviceSelect) {
    const match = [...serviceSelect.options].find(o => o.value === serviceParam);
    if (match) serviceSelect.value = serviceParam;
  }
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(quoteForm).entries());
    const lines = [
      'Hola, me gustaría solicitar una cotización:',
      `Nombre: ${data.nombre || '-'}`,
      `Correo: ${data.correo || '-'}`,
      `WhatsApp: ${data.whatsapp || '-'}`,
      `Tipo de evento: ${data.servicio || '-'}`,
      `Fecha del evento: ${data.fecha || '-'}`,
      `Ciudad: ${data.ciudad || '-'}`,
      `Lugar: ${data.lugar || '-'}`,
      `Presupuesto aproximado: ${data.presupuesto || '-'}`,
      `Mensaje: ${data.mensaje || '-'}`
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/528443597656?text=${text}`, '_blank');
  });
}
