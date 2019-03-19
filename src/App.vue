<template>
  <div id="app">
    <router-link to="/cars">CARS</router-link>
    <router-view/>
  </div>
</template>

<script>
import AppCars from './components/AppCars';

export default {
  name: 'app',
  components: {
    AppCars
  },
  
  data(){
    return{
      cars: []
    }
  },

  created(){

    // carsService.getCars()
    // .then(response=> response.data)
    // .then(data=> {
    //   this.cars= data;
    
    // carsService.create({
    //   "brand": "string",
    //   "model": "string",
    //   "year": 0,
    //   "maxSpeed": 0,
    //   "isAutomatic": true,
    //   "engine": "string",
    //   "numberOfDoors": 0
    // })
    // .then(response =>response.data)
    // .then(data=> {
    //   console.log(data)
    // })
    // .catch(e=>{
    //   console.log(e)
    //   })

    // })
    // .catch(e=> {
    //   console.log(e);
    // });
    
  }


}
</script>

<style>
    
</style>
