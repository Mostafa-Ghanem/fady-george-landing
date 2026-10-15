(() => {
  const WA_NUMBER = '201284288055'; // 01284288055 بالصيغة الدولية لمصر

  // Mobile menu
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    const set = (open) => {
      document.body.classList.toggle('menu-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
    };
    burger.addEventListener('click', () => set(!document.body.classList.contains('menu-open')));
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
    matchMedia('(min-width: 961px)').addEventListener('change', (e) => { if (e.matches) set(false); });
  }

  // Header state on scroll
  const header = document.querySelector('.header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', scrollY > 12);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Contact form → WhatsApp
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const reason = form.reason.value;
      const message = form.message.value.trim();
      form.querySelectorAll('.field').forEach((f) => f.classList.remove('has-error'));
      let firstBad = null;
      if (name.length < 2) { form.name.closest('.field').classList.add('has-error'); firstBad = firstBad || form.name; }
      if (!reason) { form.reason.closest('.field').classList.add('has-error'); firstBad = firstBad || form.reason; }
      if (firstBad) { status.textContent = 'من فضلك اكتب اسمك واختار نوع الاستفسار.'; firstBad.focus(); return; }
      const text = `أهلاً أستاذ فادي 👋\nأنا ${name}\nنوع الاستفسار: ${reason}` + (message ? `\n\n${message}` : '') + '\n\n(من الموقع الرسمي)';
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      status.textContent = 'تمام! اتفتح واتساب برسالتك، اضغط إرسال هناك.';
    });
  }
})();
