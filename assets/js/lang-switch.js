document.addEventListener('DOMContentLoaded', function() {
  const switchBtn = document.getElementById('lang-switch-btn');
  let currentLang = 'en';

  const modalHtml = `
    <div id="password-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.3); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px); z-index:9999; align-items:center; justify-content:center;">
      <div style="background:#fff; padding:30px; border-radius:12px; width:320px; text-align:center; border:1px solid #e5e5e5; box-shadow:0 8px 30px rgba(0,0,0,0.12);">
        <h3 style="margin-top:0; color:#1d1d1f; font-weight:600;">Enter Password</h3>
        <input type="password" id="lang-password-input" style="width:100%; padding:10px; margin-bottom:20px; background:#f5f5f7; color:#1d1d1f; border:1px solid #d1d1d6; border-radius:8px; box-sizing:border-box; outline:none; font-size:1em;" placeholder="Password">
        <p id="password-error" style="color:#ee5f5b; display:none; margin:-10px 0 15px 0; font-size:0.9em;">Incorrect password</p>
        <button id="password-submit" style="padding:8px 20px; background:#3574f0; color:#fff; border:none; border-radius:8px; cursor:pointer; font-weight:600; font-size:0.95em;">Confirm</button>
        <button id="password-cancel" style="padding:8px 20px; background:#f5f5f7; color:#555; border:1px solid #d1d1d6; border-radius:8px; cursor:pointer; margin-left:12px; font-size:0.95em;">Cancel</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('password-modal');
  const input = document.getElementById('lang-password-input');
  const submitBtn = document.getElementById('password-submit');
  const cancelBtn = document.getElementById('password-cancel');
  const errorMsg = document.getElementById('password-error');

  function setLanguage(lang) {
    const enEls = document.querySelectorAll('.lang-en');
    const zhEls = document.querySelectorAll('.lang-zh');
    const sidebar = document.querySelector('.sidebar');
    const hero = document.querySelector('.hero-section');
    const page = document.querySelector('.page');

    if (lang === 'zh') {
      enEls.forEach(function(el) {
        if (!el.classList.contains('hero-section')) {
          el.style.display = 'none';
        }
      });
      zhEls.forEach(function(el) { el.style.display = ''; });

      if (sidebar) sidebar.style.display = '';
      if (hero) hero.style.display = 'none';
      if (page) page.classList.remove('full-width');
      if (switchBtn) switchBtn.textContent = 'EN';
    } else {
      enEls.forEach(function(el) {
        if (!el.classList.contains('hero-section')) {
          el.style.display = '';
        }
      });
      zhEls.forEach(function(el) { el.style.display = 'none'; });

      if (sidebar) sidebar.style.display = 'none';
      if (hero) hero.style.display = 'flex';
      if (page) page.classList.add('full-width');
      if (switchBtn) switchBtn.textContent = '中文';
    }

    var enBlocks = document.querySelectorAll('.page__content div.lang-en, .page__content .lang-en');
    enBlocks.forEach(function(block) {
      var pdfLinks = block.querySelectorAll('a[href$=".pdf"], a[href$=".jpg"]');
      pdfLinks.forEach(function(a) {
        a.style.display = (lang === 'en') ? 'none' : '';
      });
    });

    var csdnLinks = document.querySelectorAll('.csdn-link');
    csdnLinks.forEach(function(el) {
      el.style.display = (lang === 'en') ? 'none' : '';
    });

    var zhOnlyNavs = document.querySelectorAll('.zh-only-nav');
    zhOnlyNavs.forEach(function(el) {
      el.style.display = (lang === 'en') ? 'none' : '';
    });

    currentLang = lang;
  }

  function showModal() {
    modal.style.display = 'flex';
    input.value = '';
    errorMsg.style.display = 'none';
    input.focus();
  }

  function hideModal() {
    modal.style.display = 'none';
  }

  function checkPassword() {
    if (input.value === 'shark') {
      sessionStorage.setItem('zh_unlocked', 'true');
      hideModal();
      setLanguage('zh');
    } else {
      errorMsg.style.display = 'block';
    }
  }

  submitBtn.addEventListener('click', checkPassword);
  cancelBtn.addEventListener('click', hideModal);
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkPassword();
  });

  if (switchBtn) {
    switchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (currentLang === 'en') {
        showModal();
      } else {
        setLanguage('en');
      }
    });
  }

  setLanguage('en');

  // CountUp animation for stat numbers
  function animateCountUp(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1500;
    var start = 0;
    var startTime = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.floor(easeOutCubic(progress) * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  var statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    var statObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCountUp(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(function(el) { statObserver.observe(el); });
  } else {
    statNumbers.forEach(function(el) {
      var target = el.getAttribute('data-target');
      var suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target + suffix;
    });
  }

  // Scroll fade-in for content sections
  var headings = document.querySelectorAll('h1, h2, .paper-box, .section-card');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    headings.forEach(function(h) {
      h.style.opacity = '0';
      observer.observe(h);
    });
  } else {
    headings.forEach(function(h) {
      h.classList.add('fade-in-up');
    });
  }
});
