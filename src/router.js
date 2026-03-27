import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Patios from './views/services/Patios.vue'
import Brickwork from './views/services/Brickwork.vue'
import Landscaping from './views/services/Landscaping.vue'
import Gallery from './views/Gallery.vue'

import JakeJenPatio from './views/services/patios/JakeJenPatio.vue'
import DanPatio from './views/services/patios/DanPatio.vue'
import JanPatio from './views/services/patios/JanPatio.vue'
import JimLisaPatio from './views/services/patios/JimLisaPatio.vue'
import PavingStones from './views/services/patios/PavingStones.vue'

import ContemporaryBrickwork from './views/services/brickwork/ContemporaryBrickwork.vue'
import JackieBrickwork from './views/services/brickwork/JackieBrickworkSeating.vue'
import MattBrickwork from './views/services/brickwork/MattBrickwork.vue'
import RogerBrickwork from './views/services/brickwork/RogerBrickwork.vue'

import JakeJenLandscaping from './views/services/landscaping/JakeJenLandscaping.vue'
import JackieLandscaping from './views/services/landscaping/JackieLandscaping.vue'
import RogerPatio from './views/services/patios/RogerPatio.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/hdlandscaping', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/gallery', component: Gallery },
  { path: '/services/patios', component: Patios },
  { path: '/services/brickwork', component: Brickwork },
  { path: '/services/landscaping', component: Landscaping },

  { path: '/services/patios/jake-jens-patio', component: JakeJenPatio },
  { path: '/services/patios/jim-lisas-patio', component: JimLisaPatio },
  { path: '/services/patios/jan-patio', component: JanPatio },
  { path: '/services/patios/dan-patio', component: DanPatio },
  { path: '/services/patios/paving-stones', component: PavingStones },
  { path: '/services/patios/roger-patio', component: RogerPatio },
  { path: '/services/patios/jackies-brickwork', component: JackieBrickwork },

  { path: '/services/brickwork/contemporary-brickwork-wall', component: ContemporaryBrickwork },
  { path: '/services/brickwork/jackies-brickwork', component: JackieBrickwork },
  { path: '/services/brickwork/matts-brickwork', component: MattBrickwork },
  { path: '/services/brickwork/rogers-brickwork', component: RogerBrickwork },

  { path: '/services/landscaping/jake-jens-landscaping', component: JakeJenLandscaping },
  { path: '/services/landscaping/jackie-landscaping', component: JackieLandscaping },
]

export default createRouter({
  history: createWebHistory('/'),
  routes
})
