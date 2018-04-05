import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../models/dishModel';
import { HttpService } from '../../services/http.service';
import { error } from 'util';

@Component({
  selector: 'app-user-dishes',
  templateUrl: './userDishes.component.html',
  styleUrls: ['./userDishes.component.css']
})

export class UserDishesComponent implements OnInit {

  imageData: any;
  dishes: any;
  err: any;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData('dishes').subscribe((data: Dish) => this.dishes = data);
  }


  submit(dishId: string) {
    this.httpService.postDataWithFullUrl('http://localhost:60326/api/Cart', dishId).subscribe(this.err = error);
  }

}
