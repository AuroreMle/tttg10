<template>
  <div class="page-not-found">
    <h1>404</h1>
    <img src="@/assets/teabag.png" alt="Teabag Image">
    <p>Oups ! La page que vous recherchez n'existe pas.</p>
    <router-link to="/">Retour à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
.page-not-found {
  text-align: center;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 100px;
  margin-bottom: 20px;
}

p {
  font-size: 20px;
  margin-bottom: 20px;
}

router-link {
  font-size: 18px;
  color: #678D72;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
