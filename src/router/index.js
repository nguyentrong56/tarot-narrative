import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CardPage from '../views/CardPage.vue'
import Adventure from '../views/Adventure.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/CardPage',
    name: 'CardPage',
    component: CardPage
  },
  
  {
    path: '/Adventure',
    name: 'Adventure',
    component: Adventure
  },
  

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
