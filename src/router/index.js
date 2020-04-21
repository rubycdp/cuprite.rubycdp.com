import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Docs from '../views/Docs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/docs',
    name: 'docs',
    component: Docs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
