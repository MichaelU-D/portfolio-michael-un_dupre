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

// burger
function toggleMenu() {
    const navButtons = document.querySelector('.nav-buttons');
    navButtons.classList.toggle('active');
  }

// app vue
const app = Vue.createApp({
  data() {
    return {
      project: null,
    };
  },

  async mounted() {
    // fetch du json
    try {
      const res = await fetch('script.json');
      const data = await res.json();

      const galleries = document.querySelectorAll('.gallery');

      if (galleries.length) {
        this.projets = data;
        this.afficherProjets(this.projets, galleries);
      } else {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        this.project = data.find(p => p.id == id);
      }
    } catch (error) {
      console.error("Erreur fetch JSON:", error);
    }
  },

  methods: {
    afficherProjets(projets, galleries) {
      projets.forEach((projet, index) => {
        const div = galleries[index];
        if (!div) return;

        // l'image du projet
        div.style.backgroundImage = `url('${projet.image}')`;

        // ouvrire la page d'un projet
        div.addEventListener('click', () => {
          window.location.href = `projet_presentation.html?id=${projet.id}`;
        });
      });
    },
  },
});

app.mount('#app');