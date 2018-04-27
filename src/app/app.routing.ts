import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'courier',
    loadChildren: './courier/courier.module#CourierModule'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
