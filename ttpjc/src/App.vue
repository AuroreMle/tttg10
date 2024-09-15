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
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    const route = useRoute()

    // Mettre à jour le titre lorsque la route change
    watch(() => route.meta.title, (newTitle) => {
      if (newTitle) {
        document.title = newTitle
      } else {
        document.title = 'Titre par défaut' // Titre par défaut si aucun titre n'est spécifié
      }
    }, { immediate: true })

    // Mettre à jour la meta description
    watch(() => route.meta.description, (newDescription) => {
      const metaTag = document.querySelector('meta[name="description"]')
      if (newDescription) {
        if (metaTag) {
          metaTag.setAttribute('content', newDescription)
        } else {
          const newMetaTag = document.createElement('meta')
          newMetaTag.setAttribute('name', 'description')
          newMetaTag.setAttribute('content', newDescription)
          document.head.appendChild(newMetaTag)
        }
      } else if (metaTag) {
        metaTag.remove()
      }
    }, { immediate: true })
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
