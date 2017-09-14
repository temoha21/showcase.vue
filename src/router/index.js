import Vue from 'vue'
import Router from 'vue-router'
import ShowCase from '../components/ShowCase.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/showcase',
      name: 'ShowCase',
      component: ShowCase
    }
  ]
})
