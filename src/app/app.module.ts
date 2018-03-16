import { DishesComponent } from './user/dishes/dishes.component';
import { UserModule } from './user/user.module';
import { UserComponent } from './user/user.component';
// import { AdminModule } from './admin/admin.module';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
// import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    { path: '', component: UserComponent},
    { path: 'user', component: UserComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        UserModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        DishesComponent,
        AdminComponent
],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

