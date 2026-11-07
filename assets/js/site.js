/* Small progressive enhancements. The site works fully without this file. */
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  if (!("IntersectionObserver" in window)) return;

  /* 1. Highlighter sweep across measurement rows, once, as they come into view. */
  var sweeps = document.querySelectorAll(".note--measure, .measure-line");
  var sweepObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        sweepObs.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -15% 0px" });
  sweeps.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.85) return; /* already on screen: leave it highlighted */
    el.classList.add("sweep");
    sweepObs.observe(el);
  });

  /* 2. Case studies: sticky frame counter + frame index that marks what you've read. */
  var bar = document.querySelector(".frame-bar");
  if (!bar) return;

  var setBarHeight = function () { root.style.setProperty("--bar-h", bar.offsetHeight + "px"); };
  setBarHeight();
  window.addEventListener("resize", setBarHeight);

  var frames = Array.prototype.slice.call(document.querySelectorAll(".frame[id]"));
  var barN = bar.querySelector("[data-bar-n]");
  var barCaption = bar.querySelector("[data-bar-caption]");
  var links = {};
  document.querySelectorAll(".frame-index a").forEach(function (a) {
    links[a.getAttribute("href").slice(1)] = a;
  });

  var update = function () {
    var line = bar.getBoundingClientRect().bottom + window.innerHeight * 0.25;
    var current = frames[0];
    frames.forEach(function (f) {
      var r = f.getBoundingClientRect();
      if (r.top <= line) current = f;
      if (r.top <= line && links[f.id]) links[f.id].classList.add("is-seen");
    });
    barN.textContent = current.getAttribute("data-frame");
    barCaption.textContent = current.getAttribute("data-caption");
    Object.keys(links).forEach(function (id) {
      links[id].classList.toggle("is-current", id === current.id);
    });
  };

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { update(); ticking = false; });
  }, { passive: true });
  update();
})();
