// Hide the sticky mobile CTA when a primary bundle button is already on screen,
// so it never covers content or duplicates a visible CTA.
(function () {
  var bar = document.getElementById('sticky');
  if (!bar || !('IntersectionObserver' in window)) return;
  var targets = document.querySelectorAll('.hero .btn-lg, .bundle .btn, .final .btn-lg, footer');
  var visible = 0;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible += e.isIntersecting ? 1 : -1; });
    bar.classList.toggle('hide', visible > 0);
  });
  targets.forEach(function (t) { io.observe(t); });
})();
