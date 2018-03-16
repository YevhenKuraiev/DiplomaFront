import { CategoryModel } from './models/categoryModel';
import { City } from './models/cityModel';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './services/http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpService]
})


export class AppComponent implements OnInit {
    mylst = ['1', '2', '3', '4', '5'];

    categories: CategoryModel;

    constructor(private httpService: HttpService) {}
    ngOnInit(): void {
        this.httpService.getData('categories').subscribe((data: CategoryModel) => this.categories = data);
    }
}
