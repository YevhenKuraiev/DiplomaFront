import { MaterialModule } from './../material.module';
import { SaveUrlPipe } from './../pipes/saveUrl.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDishesComponent } from './userDishes/userDishes.component';
import { UserRoutes } from './user.routing';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutes,
    MaterialModule
  ],
  declarations: [
    UserComponent,
    UserDishesComponent,
    SaveUrlPipe
,
    CartComponent
],
  bootstrap: [UserComponent]
})
export class UserModule { }
