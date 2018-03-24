import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserComponent,
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
