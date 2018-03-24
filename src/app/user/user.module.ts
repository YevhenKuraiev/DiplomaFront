import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DishesComponent } from './dishes/dishes.component';
import { UserRoutes } from './user.routing';


@NgModule({
  imports: [
    CommonModule,
    UserRoutes
  ],
  declarations: [
    UserComponent,
    DishesComponent
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
