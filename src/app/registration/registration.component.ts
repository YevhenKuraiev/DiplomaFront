import { Component, OnInit } from '@angular/core';
import { City } from '../models/cityModel';
import { HttpClient } from '@angular/common/http';
 
@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})


export class RegistrationComponent { 


    str1: string;
    str2: string;
    loginHandle(login: string, password:string){
        this.str1 = login;
        this.str2 = password;
        debugger
        if (login == "admin" && password == "admin"){
        }
    }
}