import { Routes, RouterModule } from '@angular/router';
import { AdminCategoriesComponent } from './adminCategories/adminCategories.component';
import { AdminDishesComponent } from './adminDishes/adminDishes.component';
import { AdminHomeComponent } from './adminHome/adminHome.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: AdminHomeComponent
      },
      {
        path: 'dishes',
        component: AdminDishesComponent
      },
      {
        path: 'categories',
        component: AdminCategoriesComponent
      },
      {
        path: 'restaurants',
        component: AdminCategoriesComponent
      }
    ]
  }
];

export const AdminRoutes = RouterModule.forChild(routes);
