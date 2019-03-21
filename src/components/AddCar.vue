<template>
    <div>
        <h1>Add Car</h1><br>
        <hr>
        <form @submit.prevent="addCar" @reset="resetForm(e)">
      <div>
        Brand:<br>
        <input type="text" v-model="car.brand" name="brand">
        <br>
        Model:<br>
        <input type="text" v-model="car.model" name="model">
        <br>
       Year:<br>
        <select id="dob"  v-model="car.year">
        <option v-for="(year, index) in years" :key="index">{{ year }}</option>
        </select>
        <br>
        Max speed:<br>
        <input type="number" name="maxSpeed" min="0" max="210">
        <br>
        Number of doors:<br>
        <input type="number" name="NumberOfDoors" min="2" max="8">
        <br>
        Is automatic:
        <input type="checkbox" name="isAutomatic" value="car"> Yes<br>
        <input type="checkbox" name="isAutomatic" value="car"> No <br>
        <br>
        Engine:
        <input type="radio" name="engine" value="car"> Hybrid<br>
        <input type="radio" name="engine" value="car"> Disel<br>
        <input type="radio" name="engine" value="car"> Petrol<br>
        <input type="radio" name="engine" value="car"> Electric<br>
      </div>
     <button type="submit" class="btn btn-default">Add car</button>
     <button type="reset" class="btn btn-default">Reset</button>
    <button name="preview" type="button" @click="previewData" class="btn btn-default">Preview</button>


    </form>
    </div>
</template>

<script>
import {carsService} from '../services/CarsService.js'


export default {

    data(){
       return{
           cars : [],
           car: {
             "brand": "",
              "model": "",
              "year": 0,
              "maxSpeed": 0,
              "isAutomatic": true,
              "engine": "string",
              "numberOfDoors": 0
           }
       }
    },

    computed : {
    years () {
        const year = new Date().getFullYear()
        return Array.from({length: year - 1900}, (value, index) => 1901 + index)
    }
    },

    methods: {
    //   addCar(){
    //     carsService.create({
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
    //   }
    // },

        async addCar(){
          try{
            const{ data } = await carsService.add(this.car);
            this.cars = data;

            const { data: newCar } = await carsService.add({
              "brand": "string",
              "model": "string",
              "year": 0,
              "maxSpeed": 0,
              "isAutomatic": true,
              "engine": "string",
              "numberOfDoors": 0
            });
            console.log(newCar);
            this.$router.push({name: 'cars'});
          }
          catch(error){
            console.log(error);
          }
        },

        resetForm(e) {
            e.preventDefault()
            this.$data.text = ""
        },

        previewData(){
           alert(`
        brand: ${this.car.brand}
        model: ${this.car.model}
        year: ${this.car.year}
        maximumSpeed: ${this.car.maxSpeed}
        numberOfDoors: ${this.car.numberOfDoors}
        engine: ${(this.car.model)}
        ${this.car.isAutomatic ? 'Automatic' : 'Manual'}
      `)
        }
    }

}
</script>

<style>

</style>
