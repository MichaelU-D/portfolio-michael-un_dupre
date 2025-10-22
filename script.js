// darkmode
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.querySelector('.theme-toggle');
  const body = document.body;

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
});

// anime gsap
document.addEventListener("DOMContentLoaded", () => {
  const scrollLogo = document.querySelector(".scroll");

  gsap.to(scrollLogo, {
    y: 15,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
});