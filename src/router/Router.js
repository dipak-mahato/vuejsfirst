import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
    {
    path: '/',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../components/User.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})

export default router