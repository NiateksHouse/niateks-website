/* ============================================================
   NIATEKS HOUSE — homepage interactions
   Design System §11 (navigation), §17 (animation), §21 (a11y)
   ============================================================ */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Navbar: transparent over hero → solid on scroll (§11) ---------- */
  var navbar = document.getElementById("navbar");
  var hero = document.querySelector(".hero");

  function updateNavbar() {
    if (!navbar || !hero) return;
    var threshold = hero.offsetHeight - 80;
    navbar.classList.toggle("is-solid", window.scrollY > threshold);
  }

  if (navbar && hero) {
    window.addEventListener("scroll", updateNavbar, { passive: true });
    window.addEventListener("resize", updateNavbar, { passive: true });
    updateNavbar();
  }

  /* ---------- Mobile menu (§11): trap focus, Escape closes, scroll locked ---------- */
  var menu = document.getElementById("mobileMenu");
  var toggle = document.getElementById("menuToggle");
  var closeBtn = document.getElementById("menuClose");
  var lastFocused = null;

  function focusableElements(container) {
    return container.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
  }

  function openMenu() {
    if (!menu || !toggle) return;
    lastFocused = document.activeElement;
    menu.hidden = false;
    document.body.style.overflow = "hidden";
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    var first = menu.querySelector("button, a");
    if (first) first.focus();
    document.addEventListener("keydown", onMenuKeydown);
  }

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.hidden = true;
    document.body.style.overflow = "";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.removeEventListener("keydown", onMenuKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onMenuKeydown(e) {
    if (e.key === "Escape") {
      closeMenu();
      return;
    }
    if (e.key !== "Tab" || !menu) return;
    var elements = focusableElements(menu);
    if (elements.length === 0) return;
    var first = elements[0];
    var last = elements[elements.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (menu && menu.hidden) openMenu();
      else closeMenu();
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  /* Close menu when a link inside it is clicked (same-page navigation aid) */
  if (menu) {
    menu.querySelectorAll(".mobile-menu__link, .mobile-menu__footer a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ---------- Scroll reveal (§17): once per element ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        observerHealthy = true; /* any callback (even non-intersecting) = healthy env */
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    var observerHealthy = false;
    revealEls.forEach(function (el) { observer.observe(el); });

    /* Immediate sweep: reveal everything already in view on load, so content
       never stays hidden if the observer's initial callback is delayed. */
    var inView = [];
    revealEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) inView.push(el);
    });
    inView.forEach(function (el) {
      el.classList.add("is-visible");
      observer.unobserve(el);
    });

    /* Broken-environment guard: IO always fires an initial callback for each
       observed element. If none has arrived within 1.5s, the environment never
       fires IO (some embedded webviews) — reveal everything via CSS and stop
       animating. Healthy browsers are unaffected. */
    window.setTimeout(function () {
      if (observerHealthy) return;
      document.documentElement.classList.add("reveal-fallback");
      revealEls.forEach(function (el) { observer.unobserve(el); });
    }, 1500);
  }
})();
