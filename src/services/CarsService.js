import axios from 'axios';
import { httpService } from './HttpService';

class CarsService {
    
    create(car){
        return httpService.post('/cars', car)
    }

    getCars(){
        return httpService.get('/cars')
    }

}

export const carsService = new CarsService()