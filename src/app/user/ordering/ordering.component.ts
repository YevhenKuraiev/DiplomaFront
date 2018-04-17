import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../models/orderModel';
import { Dish } from '../../models/dishModel';
import { SuccessOrderComponent } from '../SuccessOrder/SuccessOrder.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css'],
  providers: [HttpService]
})
export class OrderingComponent implements OnInit {
  cartProducts: any;
  orderingForm: FormGroup;
  totalPrice: number;
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private httpService: HttpService) {
  }

  ngOnInit() {
    this.cartProducts = localStorage.getItem('cart');
    this.orderingForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  updateTotalPrice() {
    this.totalPrice = 0;
    let counter = 0;
    const prod = JSON.parse(this.cartProducts);
    for (const i of prod) {
      this.totalPrice += (prod[counter] as Dish).price * (prod[counter] as Order).quantity;
      counter++;
    }
  }

  buy() {
    if (this.orderingForm.valid) {
      this.updateTotalPrice();
      const orderModel = {
        phoneNumber: this.orderingForm.controls['phoneNumber'].value,
        dishes: JSON.parse(localStorage.getItem('cart')),
        deliveryAddress: this.orderingForm.controls['address'].value,
        dateTime: new Date(),
        orderPrice: this.totalPrice,
      };
      this.httpService.postData('orders', orderModel)
        .subscribe(response => {
          this.orderingForm.reset();
          this.dialog.closeAll();
          this.dialog.open(SuccessOrderComponent);
        }, error => {

        });

    }
  }
}
