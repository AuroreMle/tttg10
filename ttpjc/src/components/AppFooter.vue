<template>
  <footer>
    <div class="footer-content">
      <img src="@/assets/logotype.png" alt="Logo TheTipTop" class="footer-logo" />
      <nav>
        <router-link to="/jeu-concours">Jeu concours</router-link>
        <router-link to="/a-propos">À propos</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/mentionslegales">Mentions Legales</router-link>
        <router-link to="/conditionsgenerales">CGU</router-link>
      </nav>
      <div class="social-media">
        <a href="https://www.instagram.com" target="_blank"><img src="@/assets/igicon.png" alt="Instagram logo icon" /></a>
        <a href="https://www.facebook.com" target="_blank"><img src="@/assets/fbicon.png" alt="Facebook logo icon" /></a>
        <a href="https://www.x.com" target="_blank"><img src="@/assets/icon.png" alt="X / Twitter logo icon " /></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;
  border-top: 2px solid black;
  background-color: #fff;
  width: 100%; 
  margin: 0;
}

.footer-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.footer-logo {
  height: 80px;
}

nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: black;
}

.social-media img {
  margin-left: 15px;
  height: 30px;
  cursor: pointer;
}

/* Media Queries pour rendre le footer responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 10px;
    height: 60px; /* Ajuster pour petits écrans */
  }

  nav {
    margin-bottom: 10px;
  }

  nav a {
    margin: 5px 10px; /* Réduire l'espacement des liens */
  }

  .social-media img {
    margin: 0 10px; /* Réduire l'espacement entre les icônes */
    height: 25px; /* Réduire la taille des icônes */
  }
}
</style>
