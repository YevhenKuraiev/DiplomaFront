import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
    apiUrl: string = "http://localhost:60326/api/";
    constructor(private http: HttpClient){

     }
      
    getData(url: string){
        return this.http.get(this.apiUrl + url)
    }
}