/* ==========================================================================
   平台商業模式入門教學簡報 — 互動控制與 16:9 畫布自適應腳本
   純原生 JS，支援 file:// 離線雙擊開啟與 GitHub Pages，無任何外部依賴
   ========================================================================== */
(function () {
  'use strict';

  var STAGE_W = 1280;
  var STAGE_H = 720;

  var stage = document.getElementById('deckStage');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var total = slides.length;

  var btnPrev = document.getElementById('btnPrev');
  var btnNext = document.getElementById('btnNext');
  var btnCounter = document.getElementById('btnCounter');
  var btnFullscreen = document.getElementById('btnFullscreen');
  var progressFill = document.getElementById('progressFill');

  var tocOverlay = document.getElementById('tocOverlay');
  var tocGrid = document.getElementById('tocGrid');
  var btnCloseToc = document.getElementById('btnCloseToc');

  var currentIndex = 0;
  var touchStartX = 0;
  var touchStartY = 0;

  function pad2(n) {
    return n < 10 ? '0' + n : String(n);
  }

  /* 16:9 等比縮放，保證任何螢幕都不會爆版或出現捲軸 */
  function fitStage() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
    var margin = isFs ? 0 : 24;
    var availW = Math.max(320, vw - margin * 2);
    var availH = Math.max(180, vh - margin * 2);
    var scale = Math.min(availW / STAGE_W, availH / STAGE_H);
    stage.style.transform = 'scale(' + scale.toFixed(4) + ')';
  }

  /* 建立目錄跳轉清單 */
  function buildToc() {
    tocGrid.innerHTML = '';
    slides.forEach(function (slide, idx) {
      var title = slide.getAttribute('data-title') || ('第 ' + (idx + 1) + ' 頁');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toc-item';
      btn.setAttribute('data-idx', String(idx));
      btn.innerHTML =
        '<span class="toc-num">' + pad2(idx + 1) + '</span>' +
        '<span class="toc-label">' + title + '</span>';
      btn.addEventListener('click', function () {
        goTo(idx);
        closeToc();
      });
      tocGrid.appendChild(btn);
    });
  }

  function updateTocActive() {
    var items = tocGrid.querySelectorAll('.toc-item');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('is-current', i === currentIndex);
    }
  }

  function openToc() {
    updateTocActive();
    tocOverlay.classList.add('is-open');
    tocOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeToc() {
    tocOverlay.classList.remove('is-open');
    tocOverlay.setAttribute('aria-hidden', 'true');
  }

  function toggleToc() {
    if (tocOverlay.classList.contains('is-open')) {
      closeToc();
    } else {
      openToc();
    }
  }

  /* 切換頁面 */
  function goTo(index, skipHash) {
    var target = Math.max(0, Math.min(total - 1, index));
    currentIndex = target;

    slides.forEach(function (slide, idx) {
      slide.classList.toggle('is-active', idx === currentIndex);
      slide.classList.toggle('is-prev', idx < currentIndex);
      slide.setAttribute('aria-hidden', idx === currentIndex ? 'false' : 'true');
    });

    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === total - 1;
    btnCounter.textContent = pad2(currentIndex + 1) + ' / ' + pad2(total);

    var pct = ((currentIndex + 1) / total) * 100;
    progressFill.style.width = pct.toFixed(2) + '%';

    updateTocActive();

    if (!skipHash) {
      try {
        history.replaceState(null, '', '#slide-' + (currentIndex + 1));
      } catch (e) {
        /* 某些 file:// 環境若限制 replaceState 則略過 */
      }
    }
  }

  function next() {
    if (currentIndex < total - 1) goTo(currentIndex + 1);
  }

  function prev() {
    if (currentIndex > 0) goTo(currentIndex - 1);
  }

  function toggleFullscreen() {
    var doc = document;
    var el = document.documentElement;
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement) {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
    }
  }

  function parseInitialHash() {
    var match = window.location.hash.match(/^#slide-(\d+)$/);
    if (match) {
      var n = parseInt(match[1], 10);
      if (n >= 1 && n <= total) return n - 1;
    }
    return 0;
  }

  /* 事件綁定 */
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  btnCounter.addEventListener('click', toggleToc);
  btnCloseToc.addEventListener('click', closeToc);
  btnFullscreen.addEventListener('click', toggleFullscreen);

  tocOverlay.addEventListener('click', function (e) {
    if (e.target === tocOverlay) closeToc();
  });

  document.addEventListener('keydown', function (e) {
    if (tocOverlay.classList.contains('is-open')) {
      if (e.key === 'Escape' || e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        closeToc();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
      case 'Enter':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        goTo(0);
        break;
      case 'End':
        e.preventDefault();
        goTo(total - 1);
        break;
      case 'g':
      case 'G':
        e.preventDefault();
        openToc();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      default:
        break;
    }
  });

  /* 觸控左右滑動 */
  stage.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  stage.addEventListener('touchend', function (e) {
    if (e.changedTouches.length === 1) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) next();
        else prev();
      }
    }
  }, { passive: true });

  window.addEventListener('resize', fitStage);
  document.addEventListener('fullscreenchange', fitStage);
  document.addEventListener('webkitfullscreenchange', fitStage);
  window.addEventListener('hashchange', function () {
    goTo(parseInitialHash(), true);
  });

  /* 初始化 */
  buildToc();
  fitStage();
  goTo(parseInitialHash(), true);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      stage.classList.add('is-ready');
    });
  });
})();
