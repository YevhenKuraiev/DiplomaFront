import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/orderModel';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { HttpService } from '../../services/http.service';
import { OrderingComponent } from '../ordering/ordering.component';
import { UserComponent } from '../user.component';
import { Dish } from '../../models/dishModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts = [];
  bill: any;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.initiateData();
  }

  initiateData() {
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
      let counter = 0;
      for (const product of this.cartProducts) {
        if ((this.cartProducts[counter] as Order).quantity === 0) {
          (this.cartProducts[counter] as Order).quantity++;
        }
        counter++;
      }
    } else {
      this.cartProducts = [];
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

  ordering() {
    if (this.cartProducts.length > 0) {
      this.dialog.closeAll();
      this.dialog.open(OrderingComponent);
    }
  }

}
