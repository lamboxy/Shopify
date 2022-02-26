import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Error404 from '../views/Error404.vue'
const routes = [

  {
    path: '/Signup',
    name: 'signup',
    component: Signup
  },

  {
    path: '/Login',
    name: 'login',
    component: Login
  },

  {
    path: '/Menu',
    name: 'menu',
    component: Menu
  },

  {
   path: '/:catchAll(.*)',
   name:'Error404',
   component: Error404,
  }
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
