import {Restaurant} from './restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {
    constructor(private http: Http){}

    restaurans(): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}