const sections = document.querySelectorAll(".section");

function updateBackground() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < top + height) {
      const color = section.getAttribute("data-color");

      document.body.style.background = `
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.75), transparent 55%),
        radial-gradient(circle at 80% 25%, rgba(255,255,255,0.55), transparent 55%),
        linear-gradient(135deg, ${color}, #ffffff)
      `;
    }
  });
}

window.addEventListener("scroll", updateBackground);
window.addEventListener("load", updateBackground);