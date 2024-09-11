<template>
  <div class="jeu-concours-page">
    <!-- Section 1: Hero Section -->
    <section class="hero-section">
      <img src="@/assets/Image1jc.jpg" alt="Femme rajoutant du miel au thé" class="hero-image"/>
      <h1>A vos mugs, prêts, savourez !</h1>
      <p>Pour célébrer l'ouverture de notre 10ème boutique à Nice, nous vous invitons à participer à notre jeu concours 100% gagnants ! Pourquoi jouer au loto quand on est sûr de remporter de fabuleux lots ? C'est simple, rapide, et amusant !</p>
    </section>

    <!-- Section 2: Comment Participer -->
    <section class="content-section">
      <img src="@/assets/Image2jc.jpg" alt="Thé dans une tasse colorée avec du sucre" class="section-image left-image"/>
      <div class="text-content">
        <h2>Comment Participer ?</h2>
        <p>1) Achetez votre thé préféré dans l'une de nos boutiques ou sur notre site web.</p>
        <p>2) Recevez un code unique imprimé sur votre ticket de caisse.</p>
        <p>3) Inscrivez-vous et entrez le code sur votre espace pour savoir immédiatement ce que vous avez gagné !</p>
      </div>
    </section>

    <!-- Section 3: Les Lots à Gagner -->
    <section class="content-section reverse-section">
      <img src="@/assets/Image3jc.jpg" alt="Set de thé avec théière et tasses originales" class="section-image"/>
      <div class="text-content">
        <h2>Les Lots à Gagner</h2>
        <p>Parmi les lots (beaucoup trop cools) que vous pouvez remporter, se cachent des infuseurs à thé, des boîtes de 100g d’un thé détox ou d’infusion, des boîtes de 100g de thé signature, des coffrets découverte d’une valeur de 39€ à 69€ !</p>
      </div>
    </section>

    <!-- Section 4: Les règles du jeu -->
    <section class="content-section">
      <img src="@/assets/Image4jc.jpg" alt="Tasse de thé à la menthe" class="section-image"/>
      <div class="text-content">
        <h2>Les règles du jeu</h2>
        <ul>
          <li>Chaque code est unique et ne peut être utilisé qu'une seule fois.</li>
          <li>Il est possible de participer plusieurs fois au jeu.</li>
          <li>Le jeu est ouvert à toute personne âgée de plus de 18 ans.</li>
          <li>Le jeu commence à l'ouverture de la boutique le 1er Mai 2025 et se termine le 30 Mai 2025 (inclu).</li>
          <li>Les lots peuvent être récupérés jusqu'au 30 Juin 2025 (inclu).</li>
          <li>Consultez notre règlement complet pour plus de détails sur les conditions de participation.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JeuConcours',
}
</script>

<style scoped>
.jeu-concours-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 40px;
}

.hero-section .hero-image {
  width: 80%; /* Ajusté à 80% de la largeur */
  max-width: 1000px; /* Limite la largeur maximale */
  border-radius: 10px;
  margin-bottom: 20px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero-section p {
  font-size: 1.2rem;
  color: #555;
}

/* Content Sections */
.content-section {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.content-section.reverse-section {
  flex-direction: row-reverse;
}

.section-image {
  flex: 1;
  width: 40%; /* Ajusté à 40% de la largeur */
  border-radius: 10px;
  margin-right: 20px;
}

.reverse-section .section-image {
  margin-right: 0;
  margin-left: 20px;
}

.text-content {
  flex: 2;
  text-align: left; /* Aligne le texte à gauche */
}

.text-content h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
}

.text-content p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
}

/* Media Queries */
@media (max-width: 768px) {
  .hero-section .hero-image {
    width: 100%;
    max-width: none; /* Supprime la largeur maximale */
  }

  .hero-section h1 {
    font-size: 1.8rem;
  }

  .hero-section p {
    font-size: 1rem;
  }

  .content-section {
    flex-direction: column;
    text-align: center;
  }

  .section-image {
    width: 100%; /* Images prennent 100% de la largeur */
    margin: 0 0 20px 0; /* Enlever les marges latérales */
  }

  .reverse-section {
    flex-direction: column;
  }

  .text-content {
    text-align: center; /* Aligner le texte au centre pour les petits écrans */
  }

  /* Section "Les Lots à Gagner" spécifique */
  .content-section.reverse-section {
    flex-direction: column; /* Assure que le texte est sous l'image en mode mobile */
  }
}
</style>
