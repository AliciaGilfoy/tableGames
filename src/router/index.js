import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Game',
    name: 'Game',
    component: Game
  },
]

const router = new VueRouter({
  routes
})

export default router
