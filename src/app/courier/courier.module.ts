import { NguiMapModule } from '@ngui/map';
import { ConfigService } from './../services/config.service';
import { HttpService } from './../services/http.service';
import { UserService } from './../services/user.service';
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
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBP1XG4Z5nph35aVskXQuhBmESwZc3_JXU'})

  ],
  declarations: [
    CourierComponent,
    AuthCourierComponent,
],
providers: [
  UserService,
  HttpService,
  ConfigService
]
})
export class CourierModule { }
