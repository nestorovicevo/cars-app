import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'


import AppCars from './components/AppCars';

const routes = [
  { 
    path: '/cars',
    name: 'cars',
    component: AppCars
  }
]
Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
