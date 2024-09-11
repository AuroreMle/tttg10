import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import JeuConcours from '../views/JeuConcours.vue'
import APropos from '../views/APropos.vue'
import ContactPage from '../views/ContactPage.vue'
import UserConnexion from '../views/UserConnexion.vue'
import ParticiperPage from '../views/ParticiperPage.vue'
import ParticiperAdminPage from '@/views/ParticiperAdminPage.vue'
import AdminConnexionPage from '@/views/AdminConnexionPage.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import MentionsLegales from '@/views/MentionsLegales.vue'
import ConGeUt from '@/views/ConGeUt.vue'
import PageNotFound from '@/views/PageNotFound.vue'


const routes = [
  { path: '/', 
    component: HomePage ,
    meta: { title: 'Accueil - Jeu Concours Thé Tip Top', description: 'Bienvenue sur la page d\'accueil de notre site.' }
  },
  { path: '/jeu-concours', 
    component: JeuConcours ,
    meta: { title: 'Jeu Conours - Présentation ', description: 'Apprenez-en plus sur le jeu concours.' }
  },
  { path: '/a-propos', 
    component: APropos ,
    meta: { title: 'A propos', description: 'Apprennez-en plus sur The Tip Top, nos valeurs et notre mission.' }
  },
  { path: '/contact', 
    component: ContactPage ,
    meta: { title: 'Contact', description: 'Pour toutes question, n\'hesitez pas à nous contacter. ' }
  },
  { path: '/connexion', 
    component: UserConnexion ,
    meta: { title: 'Connexion', description: 'Connectez-vous à votre compte. ' }
  },
  { path: '/participer', 
    component: ParticiperPage ,
    meta: { title: 'Participer', description: 'Inscivez-vous au Jeu Concours. ' }
  },
  { path: '/admin/signup', 
    component: ParticiperAdminPage  , 
    meta: { title: 'Inscription Admin', description: 'Creez votre compte administrateur. ' }
  },
  { path: '/admin/connexion', 
    component: AdminConnexionPage , 
    meta: { title: 'Connexion Admin', description: 'Connectez-vous à votre compte admin. ' }
  },
  { path: '/admin/dashboard', 
    component: AdminDashboard ,
    meta: { title: 'Admin Dashboard', description: 'Consultez les gains et leur statut, administrez le jeu concours. ' }
  },
  { path: '/user/dashboard', 
    component: UserDashboard ,
    meta: { title: 'Dashboard', description: 'Découvrez vos gains. ' }
  },
  { path: '/mentionslegales', 
    component: MentionsLegales ,
    meta: { title: 'Mention Legales', description: 'Consultez les mentions legales du jeu concours. ' }
  },
  { path: '/conditionsgenerales', 
    component: ConGeUt ,
    meta: { title: 'Condition generales', description: 'Consultez les conditions générales du jeu concours. ' }
  },
  { path: '/pagenotfound', 
    component: PageNotFound.vue 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router