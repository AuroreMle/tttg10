<template>
  <div class="user-dashboard">
    <!-- Section 1 -->
    <section class="section-greeting">
      <h1>Bonjour, comment gagnez-vous aujourd’hui ?</h1>
      <form class="code-form" @submit.prevent="validateCode">
        <input type="text" v-model="code" placeholder="Entrer le code concours" />
        <button type="submit">Valider</button>
      </form>
      <p v-if="alertMessage" :class="alertClass">{{ alertMessage }}</p>
    </section>

    <!-- Section 2 -->
    <section class="section-history">
      <h2>Historique des gains</h2>
      <div class="history-table-wrapper">
        <table class="history-table">
          <thead>
            <tr>
              <th>Date de validation</th>
              <th>Code concours</th>
              <th>Gain</th>
              <th>A retirer le plus tard</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in history" :key="index">
              <td>{{ entry.date }}</td>
              <td>{{ entry.code }}</td>
              <td>{{ entry.gain }}</td>
              <td>{{ entry.expiryDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "UserDashboard",
  data() {
    return {
      code: '', // Code saisi par l'utilisateur
      history: [], // Historique des gains
      alertMessage: '', // Message d'alerte
      alertClass: '', // Classe CSS pour l'alerte
      userId: null // ID de l'utilisateur
    };
  },
  methods: {
    async validateCode() {
      try {
        const response = await axios.post('https://backend-vnuy.onrender.com/validate-code', { userId: this.userId, code: this.code });
        if (response.status === 200 && response.data.message === 'Code valide !') {
          this.alertMessage = 'Code valide !';
          this.alertClass = 'alert-success';

          // Ajouter l'entrée à l'historique
          const newEntry = {
            date: new Date().toLocaleDateString(),
            code: this.code,
            gain: response.data.gain,
            expiryDate: new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString()
          };
          this.history.push(newEntry);
        } else {
          this.alertMessage = 'Code invalide.';
          this.alertClass = 'alert-error';
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.alertMessage = 'Code invalide.';
        } else {
          console.error('Erreur lors de la validation du code: ', error);
          this.alertMessage = 'Erreur lors de la validation du code.';
        }
        this.alertClass = 'alert-error';
      }
    },
    async fetchHistory() {
      try {
        const response = await axios.get(`https://backend-vnuy.onrender.com/user-history/${this.userId}`);
        this.history = response.data.map(entry => ({
          date: new Date(entry.validation_date).toLocaleDateString(),
          code: entry.code,
          gain: entry.gain,
          expiryDate: new Date(entry.expiry_date).toLocaleDateString()
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'historique : ', error);
      }
    }
  },
  mounted() {
    // Récupération du userId via les paramètres de la route ou localStorage
    this.userId = this.$route.params.userId || localStorage.getItem('userId');

    if (this.userId) {
      // Si userId est récupéré avec succès, on récupère l'historique
      this.fetchHistory();
    } else {
      // Si userId n'est pas défini, afficher un message d'erreur dans la console
      console.error('Erreur : userId non défini');
      this.alertMessage = 'Erreur : ID utilisateur non fourni. Veuillez vous reconnecter.';
      this.alertClass = 'alert-error';
    }
  }
};
</script>

<style scoped>
/* Styles pour les alertes */
.alert-success {
  color: green;
}

.alert-error {
  color: red;
}

.user-dashboard {
  padding: 20px;
}

.section-greeting {
  margin-bottom: 40px;
}

.section-greeting h1 {
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left; /* Alignement à gauche */
}

.code-form {
  display: flex;
  align-items: center;
}

.code-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 20px; /* Espace entre l'input et le bouton */
}

.code-form button {
  padding: 10px 30px; /* Augmenter la largeur du bouton */
  background-color: #678d72; /* Nouvelle couleur de fond */
  color: white;
  border: none;
  border-radius: 5px; /* Bordure arrondie du bouton */
  cursor: pointer;
}

.section-history {
  margin-top: 40px;
}

.section-history h2 {
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left; /* Alignement à gauche */
}

.history-table-wrapper {
  overflow-x: auto; /* Permet le défilement horizontal */
}

.history-table {
  width: 100%;
  border-collapse: separate; /* Permet de voir l'espace entre les lignes */
  border-spacing: 0 10px; /* Espace entre les lignes pour voir la background color */
  background-color: #f3ede0;
  border: 2px solid #000; /* Bordure extérieure */
  border-radius: 15px; /* Bordure arrondie pour l'ensemble du tableau */
  padding: 10px; /* Padding pour éviter que les lignes touchent les bords */
  box-sizing: border-box; /* S'assure que le padding est inclus dans la largeur */
}

.history-table th {
  padding: 15px;
  text-align: left;
  color: black;
  background-color: #f3ede0; /* Même couleur que le fond de la table */
}

.history-table td {
  padding: 15px;
  text-align: left;
  background-color: #a3bfab; /* Couleur des lignes */
  color: white;
  border: none; /* Supprimer la bordure entre les cellules */
}

/* Bordure arrondie pour chaque ligne */
.history-table tr {
  border-radius: 50px;
  overflow: hidden; /* Assure que les coins arrondis sont visibles */
}

.history-table tr:not(:last-child) {
  margin-bottom: 10px; /* Espace entre les lignes */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .history-table-wrapper {
    overflow-x: auto; /* Permet le défilement horizontal pour petits écrans */
  }

  .history-table {
    border-spacing: 0; /* Élimine l'espace entre les lignes pour éviter les débordements */
  }
}
</style>
