import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing';
import { AdminDishesComponent } from './adminDishes/adminDishes.component';
import { AdminCategoriesComponent } from './adminCategories/adminCategories.component';
import { AdminRestaurantsComponent } from './adminRestaurants/adminRestaurants.component';
import { AdminHomeComponent } from './adminHome/adminHome.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AdminComponent,
    AdminDishesComponent,
    AdminCategoriesComponent,
    AdminRestaurantsComponent,
    AdminHomeComponent
]
})
export class AdminModule { }
