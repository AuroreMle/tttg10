<template>
  <div class="admin-dashboard">
    <!-- Section 1 -->
    <section class="section-greeting">
      <h1>Partageons notre positivi-thé !</h1>
      <form class="code-form" @submit.prevent="verifyCode">
        <input type="text" v-model="code" placeholder="Entrer le code concours" />
        <button type="submit">Vérifier</button>
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
              <th>A retirer au plus tard</th>
              <th>Nom de l'utilisateur</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in history" :key="index">
              <td>{{ entry.date }}</td>
              <td>{{ entry.code }}</td>
              <td>{{ entry.gain }}</td>
              <td>{{ entry.expiryDate }}</td>
              <td>{{ entry.username }}</td>
              <td>
                <button v-if="entry.status === 'À remettre'" @click="updateStatus(entry.id)">
                  À remettre
                </button>
                <span v-else>
                  Remis le {{ entry.statusDate }}
                </span>
              </td>
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
  name: "AdminDashboard",
  data() {
    return {
      code: '', // Code saisi par l'utilisateur
      history: [], // Historique des gains
      alertMessage: '', // Message d'alerte à afficher
      alertClass: '' // Classe CSS pour le message d'alerte
    };
  },
  methods: {
    verifyCode() {
      // Chercher toutes les entrées avec le code saisi
      const matchingEntries = this.history.filter(entry => entry.code === this.code);
      
      if (matchingEntries.length > 0) {
        // Trier par date de validation pour prendre le plus ancien
        matchingEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
        const firstEntry = matchingEntries[0];

        // Afficher le message de validation
        this.alertMessage = `Ce code offre un ${firstEntry.gain}, il a été validé par ${firstEntry.username} le ${firstEntry.date}. Valable jusqu'au ${firstEntry.expiryDate}. Statut : ${firstEntry.status} `;
        this.alertClass = 'alert-success';
      } else {
        // Si le code n'existe pas dans l'historique
        this.alertMessage = "Ce code n'a pas encore été validé.";
        this.alertClass = 'alert-error';
      }
    },
    async fetchHistory() {
      try {
        // Récupération de l'historique des gains
        const response = await axios.get('https://vigilant-smile-production.up.railway.app/admin-history');
        this.history = response.data.map(entry => ({
          id: entry.id,
          date: new Date(entry.validation_date).toLocaleDateString(),
          code: entry.code,
          gain: entry.gain,
          expiryDate: new Date(entry.expiry_date).toLocaleDateString(),
          username: entry.username || 'N/A',
          status: entry.status || 'À remettre',
          statusDate: entry.status_date || ''
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'historique: ', error);
      }
    },
    async updateStatus(id) {
  try {
    const response = await axios.patch(`https://vigilant-smile-production.up.railway.app/update-status/${id}`, {
      status: 'Remis' // Envoyer le statut spécifique pour ce gain
    });

    if (response.status === 200) {
      // Mettre à jour uniquement l'entrée correspondante
      this.history = this.history.map(entry => {
        if (entry.id === id) {
          entry.status = 'Remis le'; // Mettre à jour le statut localement
          entry.statusDate = new Date().toLocaleDateString(); // Date locale
        }
        return entry;
      });
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut: ', error);
  }
}

  },
  created() {
    this.fetchHistory();
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

.admin-dashboard {
  padding: 20px;
}

.section-greeting {
  margin-bottom: 40px;
}

.section-greeting h1 {
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
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
  margin-right: 20px;
}

.code-form button {
  padding: 10px 30px;
  background-color: #678d72;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.section-history {
  margin-top: 40px;
}

.section-history h2 {
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}

.history-table-wrapper {
  overflow-x: auto;
}

.history-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  background-color: #f3ede0;
  border: 2px solid #000;
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
}

.history-table th {
  padding: 15px;
  text-align: left;
  color: black;
  background-color: #f3ede0;
}

.history-table td {
  padding: 15px;
  text-align: left;
  background-color: #a3bfab;
  color: white;
  border: none;
}

.history-table tr {
  border-radius: 50px;
  overflow: hidden;
}

.history-table tr:not(:last-child) {
  margin-bottom: 10px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .history-table-wrapper {
    overflow-x: auto;
  }

  .history-table {
    border-spacing: 0;
  }
}
</style>
