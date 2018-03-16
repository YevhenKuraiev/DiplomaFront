import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DishesComponent } from './dishes/dishes.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    { path: 'admin', component: AdminComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        DishesComponent,
        AdminComponent
],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

