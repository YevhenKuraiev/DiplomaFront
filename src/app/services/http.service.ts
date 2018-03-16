import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { ContentType } from '@angular/http/src/enums';

@Injectable()
export class HttpService {
    apiUrl = 'http://localhost:60326/api/';
    error: any;
    constructor(private http: HttpClient) {
    }

    getData(url: string) {
        return this.http.get(this.apiUrl + url);
    }

    addToCart(dishId: string) {
        const result = this.http.post('http://localhost:60326/Cart/AddToCart/', dishId)
        .subscribe(error => console.log(error));

    }
}
