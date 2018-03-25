import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Dish } from '../../models/dishModel';

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
  dishes: Dish;

  constructor(private httpService: HttpService) {
    this.editDishForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[А-Я][а-яА-Я]+')
      ]),
    });
    this.addDishForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[А-Я][а-яА-Я]+')
      ]),
    });
  }

  ngOnInit(): void {
    this.httpService.getData('dishes').subscribe((data: Dish) => this.dishes = data);
  }

}
