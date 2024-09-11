<template>
  <header>
    <div class="header-content">
      <router-link to="/">
        <img src="@/assets/logotype.png" alt="Logo TheTipTop" class="logo" />
      </router-link>
      <!-- Menu hamburger pour les petits écrans -->
      <div class="hamburger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- Menu normal pour les grands écrans -->
      <nav class="desktop-menu">
        <router-link to="/jeu-concours">Jeu concours</router-link>
        <router-link to="/a-propos">À propos</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link v-if="isLoggedIn" :to="dashboardLink">
          <button class="login-btn">Ma dashboard</button>
        </router-link>
        <router-link v-else to="/connexion">
          <button class="login-btn">Se connecter</button>
        </router-link>
        <router-link v-if="!isLoggedIn" to="/participer">
          <button class="participate-btn">Participer</button>
        </router-link>
        <button v-if="isLoggedIn" @click="handleLogout" class="participate-btn">Se déconnecter</button>
      </nav>
      <!-- Menu qui apparaît sur clic pour les petits écrans -->
      <nav v-if="menuOpen" class="mobile-menu">
        <router-link to="/jeu-concours" @click="closeMenu">Jeu concours</router-link>
        <router-link to="/a-propos" @click="closeMenu">À propos</router-link>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
        <router-link v-if="isLoggedIn" :to="dashboardLink" @click="closeMenu">
          <button class="login-btn">Ma dashboard</button>
        </router-link>
        <router-link v-else to="/connexion" @click="closeMenu">
          <button class="login-btn">Se connecter</button>
        </router-link>
        <router-link v-if="!isLoggedIn" to="/participer" @click="closeMenu">
          <button class="participate-btn">Participer</button>
        </router-link>
        <button v-if="isLoggedIn" @click="handleLogout" class="participate-btn">Se déconnecter</button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isLoggedIn: false,
      dashboardLink: '',
      menuOpen: false,
    };
  },
  methods: {
    checkAuth() {
      const userRole = localStorage.getItem('userRole');
      this.isLoggedIn = !!userRole;

      if (userRole === 'admin') {
        this.dashboardLink = '/admin/dashboard';
      } else if (userRole === 'user') {
        this.dashboardLink = '/user/dashboard';
      }
    },
    handleLogout() {
      this.logout();
      this.closeMenu(); // Close the menu on mobile after logout
    },
    logout() {
      localStorage.removeItem('userRole');
      localStorage.removeItem('userId');
      this.isLoggedIn = false;
      this.dashboardLink = '';
      this.$router.push('/');
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
  created() {
    this.checkAuth();
  },
  watch: {
    $route() {
      this.checkAuth();
    },
  },
};
</script>

<style scoped>
/* Header Styles */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  border-bottom: 2px solid black;
  background-color: #fff;
  width: 100%;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  width: 200px;
}

/* Menu normal pour les grands écrans */
.desktop-menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.desktop-menu a {
  margin: 0 15px;
  text-decoration: none;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* Ajout du style des boutons */
.desktop-menu .login-btn, .desktop-menu .participate-btn {
  border: 1px solid;
  padding: 10px 20px;
  margin: 0 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.desktop-menu .login-btn {
  background-color: #F3EDE0;
  color: black;
}

.desktop-menu .participate-btn {
  background-color: #678D72;
}

/* Hamburger menu styles */
.hamburger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger-menu span {
  height: 3px;
  width: 25px;
  background-color: black;
  margin: 4px 0;
  transition: 0.4s;
}

/* Mobile Menu (Hidden by default) */
.mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  border: 1px solid black;
  width: 100%;
}

.mobile-menu a, .mobile-menu button {
  margin: 10px 0;
  text-decoration: none;
  color: black;
}

.mobile-menu .login-btn, .mobile-menu .participate-btn {
  border: 1px solid;
  padding: 10px 20px;
  margin: 0 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.mobile-menu .login-btn {
  background-color: #F3EDE0;
  color: black;
}

.mobile-menu .participate-btn {
  background-color: #678D72;
}

/* Media Queries */
@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }

  .hamburger-menu {
    display: flex;
  }
}
</style>
