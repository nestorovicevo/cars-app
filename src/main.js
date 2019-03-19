import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import AppCars from './components/AppCars'

const routes = [
  {path: '/', component: AppCars, redirect: '/cars'}
]

const router = new VueRouter({
  router: routes,
  mode: 'history'
})

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
