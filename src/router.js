import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
// import Patios from '.views/Patios.vue'
// import Fencing from '.views/Fencing.vue'
// import Landscaping from '.views/Landscaping.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  // { path: 'services/patios', component: Patios },
  // { path: 'services/fencing', component: Fencing },
  // { path: 'services/landscaping', component: Landscaping }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
