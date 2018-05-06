import { MaterialModule } from './../material.module';
import { CourierRoutes } from './courier.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourierComponent } from './courier.component';
import { AuthCourierComponent } from './authCourier/authCourier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CourierRoutes,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CourierComponent,
    AuthCourierComponent,
]
})
export class CourierModule { }
