// Hero slice carousel — one photo cut into vertical strips; cursor / autoplay
// advances to the next photo with a staggered shutter transition per strip.
const sliceCarousel = document.getElementById('sliceCarousel');
if (sliceCarousel) {
  const slices = [...sliceCarousel.querySelectorAll('.slice')];
  const images = [
    'assets/img/w5Uw2FzDSySzNFv7n3SmA3SVnIo.jpg',
    'assets/img/c4Xb8oFpr9WS9xFtTILs72vQw.jpg',
    'assets/img/nkmenApuy0fo8Lc20jZZ64h3xIM.jpg',
    'assets/img/Y5SHy9QBVbDYdcITKMKpB62GA.jpg',
    'assets/img/Qt3lN9g1wQe3nKPJWaUpo3TNfOQ.jpg'
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

// Before / after slider
const slider = document.getElementById('baSlider');
const afterWrap = document.getElementById('baAfterWrap');
const handle = document.getElementById('baHandle');
if (slider) {
  const afterImg = afterWrap.querySelector('img');
  function setPos(clientX) {
    const rect = slider.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    afterWrap.style.width = pct + '%';
    handle.style.left = pct + '%';
    afterImg.style.width = rect.width + 'px';
  }
  function resizeAfterImg() {
    const rect = slider.getBoundingClientRect();
    afterImg.style.width = rect.width + 'px';
  }
  window.addEventListener('resize', resizeAfterImg);
  resizeAfterImg();

  let dragging = false;
  slider.addEventListener('pointerdown', (e) => { dragging = true; setPos(e.clientX); });
  window.addEventListener('pointermove', (e) => { if (dragging) setPos(e.clientX); });
  window.addEventListener('pointerup', () => dragging = false);
}

// Header scroll state + scroll-to-top
const header = document.getElementById('siteHeader');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  scrollTopBtn.classList.toggle('visible', y > 700);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Testimonial nav (single testimonial in this build — arrows are decorative no-ops)
const testiPrev = document.getElementById('testiPrev');
const testiNext = document.getElementById('testiNext');
if (testiPrev && testiNext) {
  const card = document.querySelector('.testimonial-card');
  function pulse() {
    card.style.transition = 'opacity 0.2s ease';
    card.style.opacity = '0.4';
    setTimeout(() => { card.style.opacity = '1'; }, 200);
  }
  testiPrev.addEventListener('click', pulse);
  testiNext.addEventListener('click', pulse);
}
