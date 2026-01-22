// ===== SMART SMOOTH SCROLL (DESKTOP ONLY) =====

// Detect mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
  let currentScroll = window.pageYOffset;
  let targetScroll = currentScroll;
  const ease = 0.08;

  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * ease;
    window.scrollTo(0, currentScroll);
    requestAnimationFrame(smoothScroll);
  }

  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    targetScroll += e.deltaY;
    targetScroll = Math.max(
      0,
      Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
    );
  }, { passive: false });

  smoothScroll();
}
