/* ============================================
   Portafolio — David Pérez
   Menú móvil, scroll-spy, animación de aparición,
   año automático
   ============================================ */

(function () {
  'use strict';

  /* ---------- Menú móvil (hamburguesa) ---------- */

  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto');
    toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    toggle.setAttribute('aria-label', abierto ? 'Close menu' : 'Open menu');
  });

  // Cerrar el menú al hacer clic en un enlace
  menu.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('abierto');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });

  /* ---------- Resaltado del enlace activo ---------- */

  var secciones = document.querySelectorAll('section[id]');
  var enlaces = document.querySelectorAll('.nav__link');

  function resaltarEnlace() {
    var posicion = window.scrollY + 100;
    var actual = secciones[0] ? secciones[0].id : null;

    secciones.forEach(function (seccion) {
      if (seccion.offsetTop <= posicion) {
        actual = seccion.id;
      }
    });

    enlaces.forEach(function (link) {
      var esActivo = link.getAttribute('href') === '#' + actual;
      link.classList.toggle('activo', esActivo);
    });
  }

  window.addEventListener('scroll', resaltarEnlace, { passive: true });
  resaltarEnlace();

  /* ---------- Animación de aparición ---------- */

  var elementos = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.1 });

    elementos.forEach(function (el) {
      observador.observe(el);
    });
  } else {
    // Navegadores sin IntersectionObserver: mostrar todo
    elementos.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- Año automático en el footer ---------- */

  document.getElementById('anio').textContent = new Date().getFullYear();
})();
