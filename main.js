document.addEventListener("DOMContentLoaded", function () {
  console.log("COUNTER JS RUNNING");

  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    let count = 0;

    const updateCounter = () => {
      const increment = Math.ceil(target / 60);

      if (count < target) {
        count += increment;
        counter.textContent = count;
        setTimeout(updateCounter, 40);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  if (slides.length === 0) return;

  slides[0].classList.add("active");

  setInterval(() => {
    const next = (current + 1) % slides.length;

    slides[next].classList.add("active");

    setTimeout(() => {
      slides[current].classList.remove("active");
      current = next;
    }, 1000);

  }, 5000);
});

const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

animatedItems.forEach(item => observer.observe(item));
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


