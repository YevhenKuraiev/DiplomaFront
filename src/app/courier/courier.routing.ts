import { ErrorComponent } from './../error/error.component';
import { AuthCourierComponent } from './authCourier/authCourier.component';
import { CourierComponent } from './courier.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'courier',
    component: CourierComponent,
  },
  {
    path: 'auth',
    component: AuthCourierComponent,
  }
  ,
  {
    path: 'error',
    component: ErrorComponent,
  }
];

export const CourierRoutes = RouterModule.forChild(routes);
