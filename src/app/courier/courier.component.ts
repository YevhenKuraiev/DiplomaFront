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
  routesInfo: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData('routes').subscribe((data: RouteInfo) => this.routesInfo = data);
  }

}
