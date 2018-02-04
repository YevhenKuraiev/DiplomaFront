import { HttpModule } from '@angular/http';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SearchFilterPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: 'registration', component: RegistrationComponent }
];

@NgModule({
    imports: [

        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        RegistrationComponent,
        SearchFilterPipe
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

