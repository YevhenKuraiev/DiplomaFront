import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../models/dishModel';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  imageData: any;
  dishes: Dish;


  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
      this.httpService.getData('dishes').subscribe((data: Dish) => this.dishes = data);
  }

  submit(id: string) {
    this.httpService.addToCart(id);
}

}
