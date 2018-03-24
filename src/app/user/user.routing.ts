import { Routes, RouterModule } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';

const routes: Routes = [
  {
    path: 'dishes',
    component: DishesComponent,
  },
];

export const UserRoutes = RouterModule.forChild(routes);
