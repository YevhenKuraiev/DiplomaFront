import { HttpService } from './../services/http.service';
import { CategoryModel } from './../models/categoryModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  categories: CategoryModel;

  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
      this.httpService.getData('categories').subscribe((data: CategoryModel) => this.categories = data);
  }

}
