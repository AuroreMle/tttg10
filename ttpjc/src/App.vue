<template>
  <div id="app">
    <AppHeader />
    <div id="content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Lato;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#content {
  flex: 1;
  padding: 20px; /* Facultatif, ajuste selon le design que tu souhaites */
}
</style>
