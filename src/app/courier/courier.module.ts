import { CourierRoutes } from './courier.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourierComponent } from './courier.component';

@NgModule({
  imports: [
    CommonModule,
    CourierRoutes
  ],
  declarations: [CourierComponent]
})
export class CourierModule { }
