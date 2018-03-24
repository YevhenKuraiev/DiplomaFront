import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  linkList: Link[] = [
    {
      name: 'Дом',
      link: 'home',
      icon: 'home'
    },
    {
      name: 'Блюда',
      link: 'dishes',
      icon: 'restaurant_menu'
    },
    {
      name: 'Категории',
      link: 'categories',
      icon: 'attach_file'
    },
    {
      name: 'Рестораны',
      link: 'restaurants',
      icon: 'restaurant'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Link {
  name: string;
  link: string;
  icon: string;
}
