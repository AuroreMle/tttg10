<template>
  <div class="home">
    <!-- Main Section -->
    <main>
      <div class="text-section">
        <h1>Jouez, la chance vous sourie !</h1>
        <p>100% des participants sont gagnants. Tentez de gagner un an de thés !</p>
        <router-link to="/participer"><button class="btn participate-btn">Participer</button></router-link>
      </div>
      <div class="image-section">
        <img src="@/assets/green-tea.png" alt="Green Tea" />
      </div>
    </main>

    <!-- Section 1 -->
    <section class="section1">
      <div class="divider"></div>
      <h2>Découvrez des saveurs originales de thé bio, d’origine naturelle, produits par des passionnés</h2>
      <div class="features">
        <div class="feature">
          <img src="@/assets/loupe.png" alt="Icone loupe verte" />
          <strong>Gouts originaux</strong>
          <p>Déguster des saveurs qui n’existent que chez nous</p>
        </div>
        <div class="feature">
          <img src="@/assets/world.png" alt="Icone planete terre verte" />
          <strong>Produit responsable</strong>
          <p>Parce que préserver la planète c’est se préserver</p>
        </div>
        <div class="feature">
          <img src="@/assets/plant.png" alt="Icone jeune plante verte" />
          <strong>Produit de haute qualité</strong>
          <p>Fait par des experts avec les meilleurs techniques</p>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="section2">
      <h2>Comment participer ?</h2>
      <div class="steps">
        <div class="step">
          <img src="@/assets/cart.png" alt="Icone panier achat" />
          <strong>Étape 1: Achat en boutique</strong>
          <p>A partir de 49€, un code est imprimé sur votre ticket</p>
        </div>
        <div class="step">
          <img src="@/assets/user.png" alt="Icone utilisateur" />
          <strong>Étape 2 : Participation</strong>
          <p>Cliquez sur “Participer” et laissez-vous guider</p>
        </div>
        <div class="step">
          <img src="@/assets/ticket.png" alt="Icone ticket de caisse" />
          <strong>Étape 3 : Code & gains</strong>
          <p>Saisissez votre code et découvrez le lot gagné</p>
        </div>
        <div class="step">
          <img src="@/assets/cadeau.png" alt="Icone cadeau" />
          <strong>Étape 4: Remise du gain</strong>
          <p>Rendez-vous en boutique pour récupérer votre lot</p>
        </div>
      </div>
      <router-link to="/participer"><button class="btn participate-btn">Participer</button></router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* General Styles */
.home {
  font-family: 'Lato', sans-serif;
  color: #333;
  margin: 0 auto;
  padding: 0;
  max-width: 1380px;
}

/* Button Styles */
.btn {
  border: 1px solid;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

.login-btn {
  background-color: #F3EDE0;
  color: black;
}

.participate-btn {
  background-color: #678D72;
}

/* Main Section Styles */
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.text-section {
  min-width: 50%;
  text-align: left;
}

.text-section h1 {
  font-size: 2em;
  margin: 0;
}

.text-section p {
  font-size: 1.2em;
}

.image-section img {
  max-width: 100%;
  height: auto;
}

/* Section 1 Styles */
.section1 {
  text-align: center;
  padding: 20px;
}

.divider {
  background-color: black;
  height: 10px;
  width: 20%;
  margin: 20px auto;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature {
  width: 30%;
  text-align: center;
}

.feature img {
  width: 100px; /* Adjust size as needed */
  height: auto;
}

.feature strong {
  display: block;
  margin: 10px 0;
}

/* Section 2 Styles */
.section2 {
  text-align: center;
  padding: 20px;
}

.steps {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.step {
  width: 22%;
  background-color: #F3EDE0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
  margin-bottom: 20px;
}

.step img {
  width: 50px; /* Adjust size as needed */
  height: auto;
}

.step strong {
  display: block;
  margin: 10px 0;
}


/* Media Queries */
@media (max-width: 768px) {
  main {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-section {
    order: 2; /* Move text section below image */
    min-width: 100%;
  }

  .image-section {
    order: 1; /* Move image section above text */
    margin-bottom: 20px;
  }

  .text-section h1 {
    font-size: 1.5em;
  }

  .text-section p {
    font-size: 1em;
  }

  .image-section img {
    max-width: 80%;
  }

  .section1 .divider {
    width: 50%;
  }

  .feature {
    width: 100%;
    margin-bottom: 20px;
  }

  .section2 .step {
    width: 90%;
  }
}
</style>
