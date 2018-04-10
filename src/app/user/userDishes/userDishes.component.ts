import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../models/dishModel';
import { HttpService } from '../../services/http.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { Order } from '../../models/orderModel';

@Component({
  selector: 'app-user-dishes',
  templateUrl: './userDishes.component.html',
  styleUrls: ['./userDishes.component.css']
})

export class UserDishesComponent implements OnInit {

  imageData: any;
  dishes: any;
  err: any;
  cartProducts: any;
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getData('dishes').subscribe((data: Dish) => this.dishes = data);
    const tempData = localStorage.getItem('cart');
    if (tempData !== null) {
      this.cartProducts = JSON.parse(tempData);
    } else {
      this.cartProducts = [];
    }
  }

  addToCart(index) {
    --index;
    const dish = this.dishes[index];
    let cartData = [];
    const data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
      let counter = 0;
      for (const i of cartData) {
        if ((cartData[counter] as Order).name === dish.name) {
          (cartData[counter] as Order).quantity++;
          this.updateCartData(cartData);
          localStorage.setItem('cart', JSON.stringify(cartData));
          return;
        }
        counter++;
      }
    }
    cartData.push(dish);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.dishes[index].isAdded = true;
  }

  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }

}
