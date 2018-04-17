import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { UserDishesComponent } from './userDishes/userDishes.component';
import { UserComponent } from './user.component';
import { UserRestaurantsComponent } from './userRestaurants/userRestaurants.component';
import { OrderingComponent } from './ordering/ordering.component';
import { SuccessOrderComponent } from './SuccessOrder/SuccessOrder.component';

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
        path: 'restaurants',
        pathMatch: 'full',
        component: UserRestaurantsComponent
      },
      {
        path: 'cart',
        pathMatch: 'full',
        component: CartComponent
      },
      {
        path: 'ordering',
        pathMatch: 'full',
        component: OrderingComponent
      },
      {
        path: 'successOrder',
        pathMatch: 'full',
        component: SuccessOrderComponent
      }
    ]
  }
];

export const UserRoutes = RouterModule.forChild(routes);
