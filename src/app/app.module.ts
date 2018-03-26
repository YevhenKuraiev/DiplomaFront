import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AppRoutes } from './app.routing';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        UserModule,
        AdminModule,
        AppRoutes
    ],
    declarations: [
        AppComponent,
],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

