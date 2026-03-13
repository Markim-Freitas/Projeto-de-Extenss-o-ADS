(function () {
  'use strict';

const music = document.getElementById("bg-music");
let started = false;

function startMusic() {
  if (started) return;
  started = true;

  music.volume = 0;
  music.play();

  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 0.5) {
      volume += 0.02;
      music.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

window.addEventListener("scroll", startMusic);

  // Loader
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', function () {
      loader.classList.add('hidden');
    });
    // Fallback: esconder após 3s mesmo se load não disparar
    setTimeout(function () {
      loader.classList.add('hidden');
    }, 3000);
  }

  // Ano no footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menu mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
    // Fechar ao clicar em um link
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
      });
    });
  }

  // Agenda: filtrar por mês
  const agendaTabs = document.querySelectorAll('.agenda-tab');
  const agendaCards = document.querySelectorAll('.agenda-card');
  if (agendaTabs.length && agendaCards.length) {
    agendaTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var month = this.getAttribute('data-month');
        agendaTabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        agendaCards.forEach(function (card) {
          if (card.getAttribute('data-month') === month) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // Scroll suave para âncoras (reforço para alguns navegadores)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();


