import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Create from '@/views/Create.vue'
import Update from '@/views/Update.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/update/:id',
      name: 'update',
      component: Update
    }
  ]
})
