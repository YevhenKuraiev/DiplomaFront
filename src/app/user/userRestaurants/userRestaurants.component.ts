import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Restaurant } from '../../models/restaurantModel';

@Component({
  selector: 'app-userRestaurants',
  templateUrl: './userRestaurants.component.html',
  styleUrls: ['./userRestaurants.component.css']
})
export class UserRestaurantsComponent implements OnInit {
  restaurants: any;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData('restaurants').subscribe((data: Restaurant) => this.restaurants = data);
  }

}
