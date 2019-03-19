<template>
    <div>
        <h1>App Cars</h1>
        <ul  v-for="(car, index) in cars" :key="index">
            <li>{{car.brand}}</li>
            <li>{{car.model}}</li>
            <li>{{car.year}}</li>
            <li>{{car.maxSpeed}}</li>
            <li>{{car.isAutomatic}}</li>
            <li>{{car.engine}}</li>
            <li>{{car.numberOfDoors}}</li>
        </ul>
    </div>
</template>

<script>
import {carsService} from '../services/CarsService.js'

export default {

     data(){
        return{
      cars: []
    }
    },

    created(){

    carsService.getCars()
    .then(response=> response.data)
    .then(data=> {
      this.cars= data;
      })
    .catch(e=> {
      console.log(e);
    });
    }    
}
</script>

<style>

</style>
