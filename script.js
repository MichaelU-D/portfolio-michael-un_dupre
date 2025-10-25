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


// fetch du json
document.addEventListener('DOMContentLoaded', () => {
  fetch('script.json')
  .then(response => response.json())
    .then(data => {
      afficherProjets(data);
    })
});

function afficherProjets(projets) {
  const galleries = document.querySelectorAll('.gallery');

  projets.forEach((projet, index) => {
    const div = galleries[index];
    if (!div) return;

    // chercher l'image
    div.style.backgroundImage = `url('${projet.image}')`;

    // amene sur la page du projet au click
    div.addEventListener('click', () => {
      window.location.href = `projet_presentation.html?id=${projet.id}`;
    });
  });
}

const app = Vue.createApp({
  data() {
    return {
      project: null,
    };
  },

  async mounted() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    try {
      const res = await fetch("script.json");
      const data = await res.json();
      this.project = data.find(p => p.id == id);
    } catch (error) {
      console.error("Erreur lors du chargement du projet :", error);
    }
  },
});

app.mount("#app");