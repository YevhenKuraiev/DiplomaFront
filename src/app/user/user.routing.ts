import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { UserDishesComponent } from './userDishes/userDishes.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserDishesComponent
      },
      {
        path: 'cart',
        pathMatch: 'full',
        component: CartComponent
      }
    ]
  }
];

export const UserRoutes = RouterModule.forChild(routes);
