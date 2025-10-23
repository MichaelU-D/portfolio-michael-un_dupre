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
      selectedProject: null
    };
  },
});

app.component('card', {
  props: ['ptitle', 'pdesc', 'pimg', 'ptool', 'prole', 'pmention'],
  template: `
      <section class="projet-hero">
          <img class="projet-image" :src="pimg">
      </section>
      <section class="projet-description">
        <p>
          {{ pdesc }}
        </p>
      </section>

      <section class="projet-infos">
        <div class="info-outils">
          <h3>outils</h3>
          <ul>
            <li v-for="tool in ptool">{{ tool }}</li>
          </ul>
        </div>

        <div class="info-role">
          <h3>rôle</h3>
            <ul>
              <li v-for="role in prole">{{ role }}</li>
          </ul>
        </div>

        <div class="info-mention">
          <h3>mention</h3>
            <ul>
              <li v-for="m in pmention">{{ m }}</li>
          </ul>
        </div>
      </section>
  `
});

app.mount("#app");