(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const navLinks = nav ? nav.querySelectorAll('a') : [];
  const year = document.getElementById('year');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  function setMenuOpen(open) {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });
    navLinks.forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') setMenuOpen(false);
    });
    document.addEventListener('click', event => {
      if (menuToggle.getAttribute('aria-expanded') === 'true' && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
        setMenuOpen(false);
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    }, { passive: true });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach(item => observer.observe(item));
  }

  // Accessible gallery lightbox with previous/next controls and keyboard support.
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  if (lightbox && galleryItems.length) {
    const image = lightbox.querySelector('figure img');
    const caption = lightbox.querySelector('figcaption');
    const closeButton = lightbox.querySelector('.lightbox-close');
    const previousButton = lightbox.querySelector('.lightbox-prev');
    const nextButton = lightbox.querySelector('.lightbox-next');
    let activeIndex = 0;
    let lastFocusedElement = null;

    function renderPhoto(index) {
      activeIndex = (index + galleryItems.length) % galleryItems.length;
      const item = galleryItems[activeIndex];
      const thumb = item.querySelector('img');
      image.src = item.dataset.full || thumb.src;
      image.alt = item.dataset.alt || thumb.alt;
      caption.textContent = thumb.alt;
      previousButton.disabled = galleryItems.length < 2;
      nextButton.disabled = galleryItems.length < 2;
    }
    function openLightbox(index) {
      lastFocusedElement = document.activeElement;
      renderPhoto(index);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      closeButton.focus();
    }
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      image.removeAttribute('src');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
    }
    galleryItems.forEach((item, index) => item.addEventListener('click', () => openLightbox(index)));
    closeButton.addEventListener('click', closeLightbox);
    previousButton.addEventListener('click', () => renderPhoto(activeIndex - 1));
    nextButton.addEventListener('click', () => renderPhoto(activeIndex + 1));
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', event => {
      if (!lightbox.classList.contains('is-open')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') renderPhoto(activeIndex - 1);
      if (event.key === 'ArrowRight') renderPhoto(activeIndex + 1);
    });
  }
})();
