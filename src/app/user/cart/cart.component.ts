import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any;
  bill: any;

  constructor() { }

  ngOnInit() {
    this.initiateData();
  }

  initiateData() {
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
  }

  updateTotal() {
    this.bill = 0;
    for (const i of this.cartProducts) {
      this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
    }
  }

  removeItem(id) {
    this.cartProducts.splice(id, 1);
    if (this.cartProducts.length) {
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      localStorage.setItem('cart', null);
    }
  }

  removeAll() {
    this.cartProducts = [];
    localStorage.clear();
  }

  payBill() {
    if (this.cartProducts.length) {
      localStorage.removeItem('cart');
      this.initiateData();
      alert("Your bill is: " + this.bill);
    } else {
      alert("No items in cart");
    }
  }

}
