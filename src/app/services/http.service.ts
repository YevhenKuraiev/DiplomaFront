import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
    apiUrl = 'http://localhost:60327/api/';
    constructor(private http: HttpClient) {

     }

    getData(url: string) {
        return this.http.get(this.apiUrl + url);
    }
}
