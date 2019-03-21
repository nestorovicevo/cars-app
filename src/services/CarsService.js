// import axios from 'axios'
import { httpService } from './HttpService';

class CarsService {

    add(car){
        return httpService.post('/cars', car)
    }

    getCars(){
        return httpService.get('/cars')
    }

}

export const carsService = new CarsService()