<template>
  <div id="app">
    <router-link to="/">CARS</router-link>
    <router-view/>
  </div>
</template>

<script>
import AppCars from './components/AppCars.vue'

export default {
  name: 'app',
  
  data(){
    return{}
  },


}
</script>

<style>
    
</style>
