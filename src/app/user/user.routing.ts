import { Routes, RouterModule } from '@angular/router';
import { UserDishesComponent } from './userDishes/userDishes.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserDishesComponent
      }
    ]
  }
];

export const UserRoutes = RouterModule.forChild(routes);
