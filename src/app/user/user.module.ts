import { AddCourierComponent } from './../admin/adminCouriers/addCourier/addCourier.component';
import { NguiMapModule } from '@ngui/map';
import { CourierComponent } from './../courier/courier.component';
import { MaterialModule } from './../material.module';
import { SaveUrlPipe } from './../pipes/saveUrl.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDishesComponent } from './userDishes/userDishes.component';
import { UserRoutes } from './user.routing';
import { CartComponent } from './cart/cart.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { UserRestaurantsComponent } from './userRestaurants/userRestaurants.component';
import { OrderingComponent } from './ordering/ordering.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessOrderComponent } from './SuccessOrder/SuccessOrder.component';

@NgModule({
  imports:
  [
    CommonModule,
    UserRoutes,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBP1XG4Z5nph35aVskXQuhBmESwZc3_JXU'})
  ],
  declarations:
  [
    UserComponent,
    UserDishesComponent,
    SaveUrlPipe,
    CartComponent,
    OrderingComponent,
    UserRestaurantsComponent,
    OrderingComponent,
    SuccessOrderComponent,

],
  bootstrap:
  [
    UserComponent
  ]

})
export class UserModule { }
