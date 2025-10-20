// darkmode
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.querySelector('.theme-toggle');
  const body = document.body;

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
});