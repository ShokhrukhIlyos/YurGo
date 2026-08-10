(function () {
  const loginView = document.getElementById('loginView');
  const dashboardView = document.getElementById('dashboardView');
  const keyInput = document.getElementById('adminKeyInput');
  const loginBtn = document.getElementById('loginBtn');
  const loginError = document.getElementById('loginError');
  const refreshBtn = document.getElementById('refreshBtn');
  const filterRating = document.getElementById('filterRating');

  let allRecords = [];

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
        <span class="label">${star} star${star > 1 ? 's' : ''}</span>
        <span class="rating-bar-track"><span class="rating-bar-fill" style="width:${pct}%"></span></span>
        <span class="count">${count}</span>`;
      bars.appendChild(row);
    }

    const byTable = {};
    allRecords.forEach((r) => {
      const t = r.table || '—';
      if (!byTable[t]) byTable[t] = { count: 0, sum: 0 };
      byTable[t].count += 1;
      byTable[t].sum += r.rating;
    });
    const tableWrap = document.getElementById('tableBreakdown');
    tableWrap.innerHTML = '';
    Object.keys(byTable)
      .sort()
      .forEach((t) => {
        const info = byTable[t];
        const chip = document.createElement('div');
        chip.className = 'table-chip';
        chip.innerHTML = `<span class="t-num">Table ${t}</span><span class="t-meta">${info.count} · avg ${(info.sum / info.count).toFixed(1)}</span>`;
        tableWrap.appendChild(chip);
      });
    if (!Object.keys(byTable).length) {
      tableWrap.innerHTML = '<p class="feedback-empty">No feedback yet.</p>';
    }

    const list = document.getElementById('feedbackList');
    list.innerHTML = '';
    if (!records.length) {
      list.innerHTML = '<p class="feedback-empty">No feedback matches this filter.</p>';
      return;
    }
    records.forEach((r) => {
      const item = document.createElement('div');
      item.className = 'feedback-item';
      const date = new Date(r.createdAt).toLocaleString();
      const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      item.innerHTML = `
        <div class="feedback-item-head">
          <span class="feedback-stars-mini">${stars}</span>
          <span class="feedback-meta">${r.table ? `Table ${escapeHtml(r.table)} · ` : ''}${escapeHtml(r.name) || 'Anonymous'} · ${date}</span>
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

  const savedKey = getKey();
  if (savedKey) unlock(savedKey);
})();
