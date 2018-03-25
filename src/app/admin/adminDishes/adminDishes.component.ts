import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Dish } from '../../models/dishModel';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-dishes',
  templateUrl: './adminDishes.component.html',
  styleUrls: ['./adminDishes.component.css'],
  providers: [HttpService]
})
export class AdminDishesComponent implements OnInit {

  editDishForm: FormGroup;
  addDishForm: FormGroup;

  showEditCategory = false;

  imageData: any;
  dishes: Dish[] = [];

  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;

  editIndex: number;

  constructor(private httpService: HttpService) {
    this.editDishForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[А-Я][а-яА-Я]{2,}')
      ]),
    });
    this.addDishForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[А-Я][а-яА-Я]{2,}')
      ]),
    });
  }

  ngOnInit(): void {
    this.httpService.getData('dishes').subscribe((data: Dish[]) => this.dishes = data);
  }

  getDishes() {
    if (this.pageEvent) {
      return this.dishes.slice(
        (this.pageEvent.pageIndex * this.pageEvent.pageSize),
        (this.pageEvent.pageIndex * this.pageEvent.pageSize + this.pageEvent.pageSize));
    } else {
      return this.dishes.slice(0, this.pageSize);
    }
  }

}
