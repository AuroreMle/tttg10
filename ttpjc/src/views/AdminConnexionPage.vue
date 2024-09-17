<template>
  <div class="participer-page">
    <img src="@/assets/logotype.png" alt="Logo TheTipTop" class="logotype-image"/>
    <p class="instruction-text">Connectez-vous en tant qu'administrateur</p>
    
    <button class="connexion-button facebook-button">Se connecter avec Facebook</button>
    <button class="connexion-button google-button">Se connecter avec Google</button>
    
    <div class="divider">
      <span>OU</span>
    </div>
    
    <form class="signup-form" @submit.prevent="loginAdmin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      
      <button type="submit" class="submit-button">Se connecter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminConnexionPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginAdmin() {
      try {
        const response = await fetch('https://vigilant-smile-production.up.railway.app/login/admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        const data = await response.json();
        if (response.ok) {
          // Stocker l'ID administrateur et le rôle dans le localStorage
          localStorage.setItem('adminId', data.user.id);
          localStorage.setItem('userRole', 'admin'); // Stocker le rôle 'admin'

          // Emettre un événement de connexion réussie
          this.$emit('login-success');
          
          alert('Connexion administrateur réussie!');
          this.$router.push('/admin/dashboard');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    }
  }
};
</script>

<style scoped>
.participer-page {
  width: 95%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #F3EDE0;
  border-radius: 10px;
  text-align: center;
  min-height: 520px; /* Ajusté pour correspondre à la page utilisateur */
}

.logotype-image {
  width: 360px; /* Ajusté pour correspondre à la page utilisateur */
  margin-bottom: 20px;
}

.instruction-text {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.connexion-button {
  background-color: #A3BFAB;
  color: white;
  border: none;
  padding: 10px 20px;
  font-family: Lato;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  max-width: 500px;
}

.google-button {
  margin-top: 20px; /* Ajusté pour correspondre à la page utilisateur */
}

.divider {
  margin: 20px 0;
  border-top: 5px solid #A3BFAB;
  position: relative;
  text-align: center;
}

.divider span {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #F3EDE0;
  padding: 0 10px;
  font-size: 1rem;
  color: black;
}

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup-form input {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #243B3B;
  border-radius: 5px;
}

.submit-button {
  background-color: #678D72;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 500px;
  font-size: 1rem;
}
</style>
