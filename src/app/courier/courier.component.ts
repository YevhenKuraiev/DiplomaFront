import { MaterialModule } from './../material.module';
import { UserService } from './../services/user.service';
import { ServerOrderModel } from './../models/serverOrderModel';
import { error } from 'util';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Route } from '../models/route';
import { RouteInfo } from '../models/routeInfo';
import { Router, CanActivate } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DirectionsRenderer } from '@ngui/map';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {
  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;
  routesInfo: RouteInfo[] = [];
  orders: ServerOrderModel[] = [];
  totalDistance = 0;
  loading = true;
  geocoder = new google.maps.Geocoder();
  addresses: string[] = [];
  directionsRenderer: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;
  direction: any;
  constructor(private user: UserService, private router: Router,
    private httpService: HttpService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (!this.user.isLoggedIn()) {
      this.router.navigate(['/auth']);
    } else {
      this.ShowRoutes();
      this.ShowOrders();
    }
  }

  directionsChanged() {
    this.directionsResult = this.directionsRenderer.getDirections();
    this.cdr.detectChanges();
  }

  showDirection() {
    this.directionsRendererDirective['showDirections'](this.direction);
  }

  private ShowRoutes() {
    this.httpService.getData('routes').subscribe((data: RouteInfo[]) => this.routesInfo = data,
      () => console.log(error),
      () => {
        this.loading = false;
        this.routesInfo.forEach(x => this.totalDistance += x.distance);
        this.totalDistance /= 1000;
        const routeModel: RouteModel = this.ParseRoute(this.routesInfo[0].fullRoute);
        this.direction = {
          origin: routeModel.start,
          destination: routeModel.end,
          travelMode: 'DRIVING'
        };
        this.directionsRendererDirective['initialized$'].subscribe(directionsRenderer => {
          this.directionsRenderer = directionsRenderer;
        });
        // this.getMarkers(routeModel.start, routeModel.end);

      });

  }

  // private getMarkers(start: string, end: string) {
  //   let arr: any[];
  //   arr = [start, end];
  //   this.httpService.postData('routes', arr)
  //     .subscribe((res: Coordinates[]) => {
  //       res.forEach(element => {
  //         this.positions.push(new google.maps.LatLng(element.latitude, element.longitude));
  //       });
  //     }, err => console.log(error));
  //   debugger;
  // }



  private ParseRoute(route: string): any {
    const routeModel: RouteModel = {
      start: route.substring(0, route.indexOf('-') - 1) + ', Харків',
      end: route.substring(route.indexOf('-') + 1, route.indexOf(':')) + ', Харків',
    };
    return routeModel;
  }

  private ShowOrders() {
    this.httpService.getData('orders').subscribe((data: ServerOrderModel[]) => {
      this.orders = data,
      this.addresses.push('вулиця Сумська, 15, Харків');
        this.orders.forEach(order => {
          this.addresses.push(this.CutString(order.deliveryAddress));
        });
    },
      () => console.log(error));
  }


  private CutString(line: string) {
    let counter = 0;
    for (let i = 0; i < line.length; i++) {
      if (counter === 3) {
        counter = i;
        break;
      }
      if (line[i] === ',') {
        counter++;
      }
    }
    return line.substring(0, counter - 1);
  }

}

export class RouteModel {
  start: string;
  end: string;
}

export class Coordinates {
  latitude: number;
  longitude: number;
}
