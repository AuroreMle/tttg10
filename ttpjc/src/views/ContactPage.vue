<template>
  <div class="contact-page">
    <section class="intro">
      <h1>Contactez-nous</h1>
      <p>Vous avez une question par rapport au concours, à la boutique ou vous voulez juste parler de thé? Nous sommes à votre écoute !</p>
    </section>

    <section class="contact-form-section">
      <div class="contact-container">
        <div class="teabag-image">
          <img src="@/assets/teabag.png" alt="Teabag Image">
        </div>
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div v-if="!isSubmitted">
              <div class="form-group">
                <input type="text" id="name" v-model="name" placeholder="Nom et Prénom" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" v-model="email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="text" id="subject" v-model="subject" placeholder="Objet" required>
              </div>
              <div class="form-group">
                <textarea id="message" v-model="message" placeholder="Message" rows="6" required></textarea>
              </div>
              <div class="submit-container">
                <button type="submit" class="submit-btn">Envoyer</button>
              </div>
            </div>

            <!-- Message de confirmation -->
            <p v-if="isSubmitted" class="confirmation-message">
              {{ confirmationMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      isSubmitted: false, // Pour vérifier si le formulaire a été soumis
      confirmationMessage: '' // Message de confirmation
    }
  },
  methods: {
    submitForm() {
      // Afficher le message de confirmation
      this.confirmationMessage = "Message transmis, nous vous contacterons au plus vite !";
      
      // Effacer les champs du formulaire
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';

      // Mettre isSubmitted à true pour cacher le formulaire et montrer le message
      this.isSubmitted = true;
    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro p {
  font-size: 1.2rem;
  color: #555;
}

.contact-form-section {
  display: flex;
  justify-content: center;
}

.contact-container {
  display: flex;
  align-items: center;
  background-color: #F3EDE0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  width: 95%;
  max-width: 900px;
  gap: 20px;
}

.teabag-image {
  flex: 1;
}

.teabag-image img {
  width: 100%; 
  border-radius: 10px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }

  .intro p {
    font-size: 1rem;
  }

  .contact-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .teabag-image img {
    width: 80%;
    max-width: 300px;
  }

  .contact-form {
    flex: 1;
    width: 100%;
  }
}

.contact-form {
  flex: 2;
}

.form-group {
  margin-bottom: 20px;
  padding-right: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #243B3B;
  font-size: 1rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #AEAEAE;
  font-weight: normal;
}

.submit-container {
  display: flex;
  justify-content: flex-end;
}

.submit-btn {
  background-color: #678D72;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #567A5E;
}

.confirmation-message {
  color: green;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
}
</style>
