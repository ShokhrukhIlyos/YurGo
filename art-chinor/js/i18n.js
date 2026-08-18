(function(){
  var buttons = document.querySelectorAll('.lang-switch button');
  var stored = localStorage.getItem('art-chinor-lang');
  function setLang(lang){
    buttons.forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-lang') === lang); });
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      el.classList.toggle('active', el.getAttribute('data-i18n') === lang);
    });
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('art-chinor-lang', lang);
  }
  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){ setLang(btn.getAttribute('data-lang')); });
  });
  if(stored){ setLang(stored); }
})();
