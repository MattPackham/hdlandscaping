import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Patios from './views/services/Patios.vue'
import Fencing from './views/services/Fencing.vue'
import Landscaping from './views/services/Landscaping.vue'

import JakeJenGarden from './views/services/patios/JakeJenGarden.vue'
import SteveGarden from './views/services/patios/SteveGarden.vue'
import SallyPatio from './views/services/patios/SallysPatio.vue'
import ModernFencing from './views/services/fencing/ModernFencing.vue'
import SarahBrickwork from './views/services/fencing/SarahBrickwork.vue'
import GardenPathway from './views/services/fencing/GardenPathway.vue'
import DaveFlowerbed from './views/services/landscaping/DaveFlowerbed.vue'

const routes = [
  { path: '/', component: Home },
   { path: '/hdlandscaping', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/services/patios', component: Patios },
  { path: '/services/fencing', component: Fencing },
  { path: '/services/landscaping', component: Landscaping },

  { path: '/services/patios/jake-jens-garden', component: JakeJenGarden },
  { path: '/services/patios/steves-garden', component: SteveGarden },
  { path: '/services/patios/sallys-patio', component: SallyPatio },

  { path: '/services/fencing/modern-wooden-fencing', component: ModernFencing },
  { path: '/services/fencing/sarahs-brickwork', component: SarahBrickwork },
  { path: '/services/fencing/elegant-garden-pathway', component: GardenPathway },

  { path: '/services/landscaping/jake-jens-modern-garden', component: JakeJenGarden },
  { path: '/services/landscaping/sarahs-garden-feature', component: SarahBrickwork },
  { path: '/services/landscaping/daves-custom-flowerbed', component: DaveFlowerbed },

]

export default createRouter({
  history: createWebHistory(),
  routes
})
