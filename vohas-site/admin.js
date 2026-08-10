const ADMIN_I18N = {
  en: {
    'admin.title': 'Feedback Dashboard',
    'admin.loginTitle': 'Admin Access',
    'admin.loginSub': 'Enter the admin key to view feedback.',
    'admin.keyPlaceholder': 'Admin key',
    'admin.unlock': 'Unlock',
    'admin.invalidKey': 'Invalid key.',
    'admin.statTotal': 'Total Feedback',
    'admin.statAvg': 'Average Rating',
    'admin.statWeek': 'Last 7 Days',
    'admin.statLow': '1–2 Star (needs attention)',
    'admin.ratingBreakdown': 'Rating Breakdown',
    'admin.byTable': 'By Table',
    'admin.allFeedback': 'All Feedback',
    'admin.allRatings': 'All ratings',
    'admin.stars5': '5 stars',
    'admin.stars4': '4 stars',
    'admin.stars3': '3 stars',
    'admin.stars2': '2 stars',
    'admin.stars1': '1 star',
    'admin.refresh': 'Refresh',
    'admin.star': 'star',
    'admin.starsPlural': 'stars',
    'admin.table': 'Table',
    'admin.avg': 'avg',
    'admin.anonymous': 'Anonymous',
    'admin.noFeedbackYet': 'No feedback yet.',
    'admin.noFeedbackFilter': 'No feedback matches this filter.',
  },
  ru: {
    'admin.title': 'Панель отзывов',
    'admin.loginTitle': 'Доступ администратора',
    'admin.loginSub': 'Введите админ-ключ, чтобы посмотреть отзывы.',
    'admin.keyPlaceholder': 'Админ-ключ',
    'admin.unlock': 'Войти',
    'admin.invalidKey': 'Неверный ключ.',
    'admin.statTotal': 'Всего отзывов',
    'admin.statAvg': 'Средняя оценка',
    'admin.statWeek': 'За 7 дней',
    'admin.statLow': '1–2 звезды (нужно внимание)',
    'admin.ratingBreakdown': 'Распределение оценок',
    'admin.byTable': 'По столикам',
    'admin.allFeedback': 'Все отзывы',
    'admin.allRatings': 'Все оценки',
    'admin.stars5': '5 звёзд',
    'admin.stars4': '4 звезды',
    'admin.stars3': '3 звезды',
    'admin.stars2': '2 звезды',
    'admin.stars1': '1 звезда',
    'admin.refresh': 'Обновить',
    'admin.star': 'звезда',
    'admin.starsPlural': 'звёзд',
    'admin.table': 'Столик',
    'admin.avg': 'ср.',
    'admin.anonymous': 'Анонимно',
    'admin.noFeedbackYet': 'Отзывов пока нет.',
    'admin.noFeedbackFilter': 'Нет отзывов по этому фильтру.',
  },
  uz: {
    'admin.title': "Fikr-mulohazalar paneli",
    'admin.loginTitle': 'Admin kirish',
    'admin.loginSub': "Fikrlarni ko'rish uchun admin kalitini kiriting.",
    'admin.keyPlaceholder': 'Admin kaliti',
    'admin.unlock': 'Kirish',
    'admin.invalidKey': "Kalit noto'g'ri.",
    'admin.statTotal': 'Jami fikrlar',
    'admin.statAvg': "O'rtacha baho",
    'admin.statWeek': 'Oxirgi 7 kun',
    'admin.statLow': "1–2 yulduz (e'tibor kerak)",
    'admin.ratingBreakdown': 'Baholar taqsimoti',
    'admin.byTable': 'Stollar bo\'yicha',
    'admin.allFeedback': 'Barcha fikrlar',
    'admin.allRatings': 'Barcha baholar',
    'admin.stars5': '5 yulduz',
    'admin.stars4': '4 yulduz',
    'admin.stars3': '3 yulduz',
    'admin.stars2': '2 yulduz',
    'admin.stars1': '1 yulduz',
    'admin.refresh': 'Yangilash',
    'admin.star': 'yulduz',
    'admin.starsPlural': 'yulduz',
    'admin.table': 'Stol',
    'admin.avg': "o'rt.",
    'admin.anonymous': 'Anonim',
    'admin.noFeedbackYet': "Hozircha fikr yo'q.",
    'admin.noFeedbackFilter': "Bu filtr bo'yicha fikr topilmadi.",
  },
};

const ADMIN_LOCALES = { en: 'en-US', ru: 'ru-RU', uz: 'uz-UZ' };

(function () {
  const loginView = document.getElementById('loginView');
  const dashboardView = document.getElementById('dashboardView');
  const keyInput = document.getElementById('adminKeyInput');
  const loginBtn = document.getElementById('loginBtn');
  const loginError = document.getElementById('loginError');
  const refreshBtn = document.getElementById('refreshBtn');
  const filterRating = document.getElementById('filterRating');
  const langButtons = document.querySelectorAll('.lang-btn');

  let allRecords = [];
  let currentLang = detectDefaultLang();

  function detectDefaultLang() {
    const saved = localStorage.getItem('vohas-lang');
    if (saved && ADMIN_I18N[saved]) return saved;
    const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return ADMIN_I18N[browserLang] ? browserLang : 'en';
  }

  function t(key) {
    return (ADMIN_I18N[currentLang] && ADMIN_I18N[currentLang][key]) || ADMIN_I18N.en[key] || key;
  }

  function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
    });
    langButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    document.documentElement.setAttribute('lang', currentLang);
  }

  function setLanguage(lang) {
    if (!ADMIN_I18N[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('vohas-lang', lang);
    applyStaticI18n();
    if (!dashboardView.hidden) render();
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  function getKey() {
    return sessionStorage.getItem('vohas-admin-key') || '';
  }

  async function fetchRecords(key) {
    const res = await fetch('/.netlify/functions/feedback', {
      headers: { 'x-admin-key': key },
    });
    if (!res.ok) throw new Error('Unauthorized');
    const data = await res.json();
    return data.records || [];
  }

  function starWord(n) {
    return n === 1 ? t('admin.star') : t('admin.starsPlural');
  }

  function render() {
    const filter = filterRating.value;
    const records = filter ? allRecords.filter((r) => String(r.rating) === filter) : allRecords;

    const total = allRecords.length;
    const avg = total ? allRecords.reduce((sum, r) => sum + r.rating, 0) / total : 0;
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const lastWeek = allRecords.filter((r) => new Date(r.createdAt).getTime() >= weekAgo).length;
    const low = allRecords.filter((r) => r.rating <= 2).length;

    document.getElementById('statTotal').textContent = String(total);
    document.getElementById('statAvg').textContent = avg.toFixed(1);
    document.getElementById('statWeek').textContent = String(lastWeek);
    document.getElementById('statLow').textContent = String(low);

    const bars = document.getElementById('ratingBars');
    bars.innerHTML = '';
    for (let star = 5; star >= 1; star--) {
      const count = allRecords.filter((r) => r.rating === star).length;
      const pct = total ? (count / total) * 100 : 0;
      const row = document.createElement('div');
      row.className = 'rating-bar-row';
      row.innerHTML = `
        <span class="label">${star} ${starWord(star)}</span>
        <span class="rating-bar-track"><span class="rating-bar-fill" style="width:${pct}%"></span></span>
        <span class="count">${count}</span>`;
      bars.appendChild(row);
    }

    const byTable = {};
    allRecords.forEach((r) => {
      const tKey = r.table || '—';
      if (!byTable[tKey]) byTable[tKey] = { count: 0, sum: 0 };
      byTable[tKey].count += 1;
      byTable[tKey].sum += r.rating;
    });
    const tableWrap = document.getElementById('tableBreakdown');
    tableWrap.innerHTML = '';
    Object.keys(byTable)
      .sort()
      .forEach((tKey) => {
        const info = byTable[tKey];
        const chip = document.createElement('div');
        chip.className = 'table-chip';
        chip.innerHTML = `<span class="t-num">${t('admin.table')} ${escapeHtml(tKey)}</span><span class="t-meta">${info.count} · ${t('admin.avg')} ${(info.sum / info.count).toFixed(1)}</span>`;
        tableWrap.appendChild(chip);
      });
    if (!Object.keys(byTable).length) {
      tableWrap.innerHTML = `<p class="feedback-empty">${t('admin.noFeedbackYet')}</p>`;
    }

    const list = document.getElementById('feedbackList');
    list.innerHTML = '';
    if (!records.length) {
      list.innerHTML = `<p class="feedback-empty">${t('admin.noFeedbackFilter')}</p>`;
      return;
    }
    const locale = ADMIN_LOCALES[currentLang] || 'en-US';
    records.forEach((r) => {
      const item = document.createElement('div');
      item.className = 'feedback-item';
      const date = new Date(r.createdAt).toLocaleString(locale);
      const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      item.innerHTML = `
        <div class="feedback-item-head">
          <span class="feedback-stars-mini">${stars}</span>
          <span class="feedback-meta">${r.table ? `${t('admin.table')} ${escapeHtml(r.table)} · ` : ''}${escapeHtml(r.name) || t('admin.anonymous')} · ${date}</span>
        </div>
        ${r.comment ? `<p class="feedback-comment">${escapeHtml(r.comment)}</p>` : ''}`;
      list.appendChild(item);
    });
  }

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }

  async function unlock(key) {
    try {
      allRecords = await fetchRecords(key);
      sessionStorage.setItem('vohas-admin-key', key);
      loginView.hidden = true;
      dashboardView.hidden = false;
      render();
    } catch {
      loginError.hidden = false;
      sessionStorage.removeItem('vohas-admin-key');
    }
  }

  loginBtn.addEventListener('click', () => unlock(keyInput.value.trim()));
  keyInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') unlock(keyInput.value.trim());
  });

  refreshBtn.addEventListener('click', async () => {
    allRecords = await fetchRecords(getKey());
    render();
  });

  filterRating.addEventListener('change', render);

  applyStaticI18n();

  const savedKey = getKey();
  if (savedKey) unlock(savedKey);
})();
