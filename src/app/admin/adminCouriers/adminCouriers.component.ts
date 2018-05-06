import { AddCourierComponent } from './addCourier/addCourier.component';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CourierRegistrationModel } from '../../models/courierRegistrationModel';
import { UserModel } from '../../models/userModel';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin-couriers',
  templateUrl: './adminCouriers.component.html',
  styleUrls: ['./adminCouriers.component.css']
})
export class AdminCouriersComponent implements OnInit {

  users: UserModel[] = [];
  constructor(private httpService: HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpService.getData('couriers').subscribe((data: UserModel[]) => this.users = data);
  }


  addCourier() {
    this.dialog.open(AddCourierComponent);
  }


}
