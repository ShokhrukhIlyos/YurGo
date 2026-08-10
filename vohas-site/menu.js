document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Table badge from QR code link, e.g. menu.html?t=07
const params = new URLSearchParams(window.location.search);
const table = params.get('t') || params.get('table');
const tableBadge = document.getElementById('tableBadge');
if (table) {
  tableBadge.hidden = false;
  tableBadge.textContent = `${translations.en['fullmenu.tableLabel']} ${table}`;
  tableBadge.dataset.table = table;
}

// Build menu panels from MENU_ITEMS (menu-data.js)
const CATEGORIES = ['breakfast', 'bar', 'salads', 'soups', 'mains', 'steaks', 'pasta', 'fastfood', 'pizza', 'sushi', 'kebabs', 'company', 'sides', 'bread'];
const panelsRoot = document.getElementById('menuPanels');

CATEGORIES.forEach((cat, i) => {
  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.dataset.panel = cat;

  const grid = document.createElement('div');
  grid.className = 'menu-photo-grid';

  MENU_ITEMS.filter((item) => item.cat === cat).forEach((item) => {
    const card = document.createElement('article');
    card.className = 'menu-photo-card';
    card.innerHTML = `
      <div class="mpc-img">
        <img src="assets/menu/${item.img || 'placeholder.svg'}" alt="${item.name}" loading="lazy"
             onerror="this.onerror=null;this.src='assets/menu/placeholder.svg'">
      </div>
      <div class="mpc-body">
        <div class="mi-head"><h4>${item.name}</h4><span>${item.price}</span></div>
        <p>${item.desc}</p>
      </div>`;
    grid.appendChild(card);
  });

  panel.appendChild(grid);
  panelsRoot.appendChild(panel);
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.menu-panel');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabButtons.forEach((b) => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', String(b === btn));
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === target);
    });
  });
});

// Language switch (shared translations from i18n.js)
const SUPPORTED_LANGS = ['en', 'ru', 'uz'];
const langButtons = document.querySelectorAll('.lang-btn');

function detectDefaultLang() {
  const saved = localStorage.getItem('vohas-lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : 'en';
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  if (table) tableBadge.textContent = `${dict['fullmenu.tableLabel']} ${table}`;

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('vohas-lang', lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(detectDefaultLang());
