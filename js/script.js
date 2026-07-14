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
      photo: 'assets/img/WcHSrXrakxufW1oRI0RtcvKpfA8.jpg',
      grayscale: false,
      quote: 'Desde la primera conversación hasta la galería final, todo se sintió fácil e intencional. Las fotos capturaron emociones que recordaremos para siempre.',
      avatar: 'assets/img/d4PUdW6Q9ehUsBXmsMcchcFIAV0.jpg',
      name: 'Emma & Daniel',
      role: 'Sesión de Boda'
    },
    {
      photo: 'assets/img/xAWIWUGB4M81SVvszdjixMwS9g.jpg',
      grayscale: true,
      quote: 'Toda la experiencia fue tranquila, profesional e increíblemente bien dirigida. Cada foto se sintió natural y atemporal.',
      avatar: 'assets/img/xTxolJSoMHO9oJNhmRkIhv3qerU.jpg',
      name: 'Sophia Laurent',
      role: 'Sesión de Retrato'
    },
    {
      photo: 'assets/img/1eVCUZr4LzoWomKoDPSx7ypxZo.jpg',
      grayscale: false,
      quote: 'Trabajar con ellos se sintió como reencontrarnos con viejos amigos. Nuestras fotos familiares están llenas de calidez y risas genuinas.',
      avatar: 'assets/img/Y5SHy9QBVbDYdcITKMKpB62GA.jpg',
      name: 'Familia Durand',
      role: 'Sesión Familiar'
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
      quoteEl.textContent = t.quote;
      avatarEl.src = t.avatar;
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
