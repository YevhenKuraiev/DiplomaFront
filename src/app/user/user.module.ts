import { SaveUrlPipe } from './../pipes/saveUrl.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDishesComponent } from './userDishes/userDishes.component';
import { UserRoutes } from './user.routing';


@NgModule({
  imports: [
    CommonModule,
    UserRoutes
  ],
  declarations: [
    UserComponent,
    UserDishesComponent,
    SaveUrlPipe
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
