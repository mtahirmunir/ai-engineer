/**
 * Portfolio v2 — minimal JS for nav and footer
 */
(function () {
  'use strict';

  var yearEl = document.getElementById('year-v2');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var open = navList.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
    navList.addEventListener('click', function (e) {
      if (e.target.matches('a')) {
        navList.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
