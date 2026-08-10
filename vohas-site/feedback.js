(function () {
  const fab = document.getElementById('feedbackFab');
  const overlay = document.getElementById('feedbackOverlay');
  const closeBtn = document.getElementById('feedbackClose');
  const stars = document.querySelectorAll('#feedbackStars .star-btn');
  const commentEl = document.getElementById('feedbackComment');
  const nameEl = document.getElementById('feedbackName');
  const errorEl = document.getElementById('feedbackError');
  const submitBtn = document.getElementById('feedbackSubmit');
  const formView = document.getElementById('feedbackFormView');
  const thanksView = document.getElementById('feedbackThanksView');

  let rating = 0;

  function paintStars() {
    stars.forEach((s) => {
      s.classList.toggle('filled', Number(s.dataset.value) <= rating);
    });
  }

  stars.forEach((s) => {
    s.addEventListener('click', () => {
      rating = Number(s.dataset.value);
      paintStars();
    });
  });

  function openModal() {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function resetForm() {
    rating = 0;
    paintStars();
    commentEl.value = '';
    nameEl.value = '';
    errorEl.hidden = true;
    formView.hidden = false;
    thanksView.hidden = true;
    submitBtn.disabled = false;
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    resetForm();
  }

  fab.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  submitBtn.addEventListener('click', async () => {
    errorEl.hidden = true;

    if (!rating) {
      const lang = document.documentElement.lang;
      const dict = (typeof translations !== 'undefined' && (translations[lang] || translations.en)) || {};
      errorEl.textContent = dict['feedback.errorRating'] || 'Please choose a rating.';
      errorEl.hidden = false;
      return;
    }

    submitBtn.disabled = true;
    const table = (document.getElementById('tableBadge') || {}).dataset ? document.getElementById('tableBadge').dataset.table || '' : '';

    try {
      const res = await fetch('/.netlify/functions/feedback', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          rating,
          comment: commentEl.value,
          name: nameEl.value,
          table,
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      formView.hidden = true;
      thanksView.hidden = false;
      setTimeout(closeModal, 2500);
    } catch (err) {
      errorEl.textContent = 'Something went wrong. Please try again.';
      errorEl.hidden = false;
      submitBtn.disabled = false;
    }
  });
})();
