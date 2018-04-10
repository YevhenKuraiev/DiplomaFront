import { MaterialModule } from './../material.module';
import { SaveUrlPipe } from './../pipes/saveUrl.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDishesComponent } from './userDishes/userDishes.component';
import { UserRoutes } from './user.routing';
import { CartComponent } from './cart/cart.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  imports:
  [
    CommonModule,
    UserRoutes,
    MaterialModule,
    MatDialogModule
  ],
  declarations:
  [
    UserComponent,
    UserDishesComponent,
    SaveUrlPipe,
    CartComponent
  ],
  bootstrap:
  [
    UserComponent
  ]

})
export class UserModule { }
