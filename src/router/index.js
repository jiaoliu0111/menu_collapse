import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* eslint-disable */
const router = new Router({
  routes: [
    { path: '/', redirect: '/login'},
    { path: '/home', component: () => import('@/view/Home')},
    { path: '/login', component: () => import('@/view/Login')},
    { path: '/study', component: () => import('@/view/Study')},
    { path: '/collapse', component: () => import('@/view/Collapse')}
  ]
})

export default router
