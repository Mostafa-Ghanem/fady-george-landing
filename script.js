(() => {
  const menu = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if (menu && nav) {
    const close = () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','فتح القائمة'); };
    menu.addEventListener('click', () => {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open',open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة');
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') close(); });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  // No misleading front-end submission. Enable only once a verified delivery destination exists.
  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', e => e.preventDefault());
})();
