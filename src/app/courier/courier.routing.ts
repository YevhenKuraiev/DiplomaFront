import { CourierComponent } from './courier.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'courier',
    component: CourierComponent,
  }
];

export const CourierRoutes = RouterModule.forChild(routes);
