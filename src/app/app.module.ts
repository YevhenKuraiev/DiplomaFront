import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
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
],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

