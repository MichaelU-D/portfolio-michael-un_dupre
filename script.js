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
    const themeBtn = document.querySelector('.theme-toggle');
    const saveTheme = localStorage.getItem('darkMode');

    // sauvé le theme dark mode
    if (saveTheme !== null) {
      this.isDarkMode = saveTheme === 'true';
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
    
    //ajout la class darkmode au click
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.DarkMode = !this.DarkMode;
        document.body.classList.toggle('dark-mode', this.DarkMode);
        localStorage.setItem('darkMode', this.DarkMode);
      });
    }

    // fetch du json
    try {
      const response = await fetch('script.json');
      const data = await response.json();

      const galleries = document.querySelectorAll('.gallery');

      // cherche de la class gallerie
      if (galleries.length) {
        this.projets = data;
        this.afficherProjets(this.projets, galleries); //information des projet
      } else { //pas de gallerie = sur la page d'un projet
        const params = new URLSearchParams(window.location.search); //isole l'id de page
        const id = params.get("id");// recherche de cette id
        this.project = data.find(p => p.id == id);// match l'id du projet correspondant
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

        // ouvrire la page d'un projet sur click de l'image
        div.addEventListener('click', () => {
          window.location.href = `projet_presentation.html?id=${projet.id}`;
        });
      });
    },
  },
});

app.mount('body');