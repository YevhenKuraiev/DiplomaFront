import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class HttpService {
    apiUrl = 'http://localhost:60327/api/';
    constructor(private http: HttpClient) {

     }

    getData(url: string) {
        return this.http.get(this.apiUrl + url);
    }
    addToCart(id: string) {
        return this.http.get('http://localhost:60327/api/Cart/1');
    }
}
