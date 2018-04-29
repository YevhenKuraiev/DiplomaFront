import { ServerOrderModel } from './../models/serverOrderModel';
import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Route } from '../models/route';
import { RouteInfo } from '../models/routeInfo';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {
  routesInfo: RouteInfo[] = [];
  orders: ServerOrderModel[] = [];
  totalDistance = 0;
  loading = true;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    this.ShowRoutes();
    this.ShowOrders();
  }

  private ShowRoutes() {
    this.httpService.getData('routes').subscribe((data: RouteInfo[]) => this.routesInfo = data,
      () => console.log(error),
      () => {
        this.loading = false;
        this.routesInfo.forEach(x => this.totalDistance += x.distance);
        this.totalDistance /= 1000;
      });
  }

  private ShowOrders() {
    this.httpService.getData('orders').subscribe((data: ServerOrderModel[]) => this.orders = data,
      () => console.log(error),
      () => {
      });
  }

}
