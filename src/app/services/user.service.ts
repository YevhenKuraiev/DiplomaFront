import { ErrorComponent } from './../error/error.component';
import { JWTModel } from './../models/jwtModel';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService extends BaseService {

    baseUrl = '';

    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();

    private loggedIn = false;

    constructor(private httpService: HttpService, private configService: ConfigService,
        public dialog: MatDialog) {
        super();
        this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        this._authNavStatusSource.next(this.loggedIn);
        this.baseUrl = configService.getApiURI();
    }

    login(email, password) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const AuthModel = {
            email: email,
            password: password,
        };
        return this.httpService.postData('auth', AuthModel).toPromise()
            .then((result: JWTModel) => {
                localStorage.setItem('auth_token', result.auth_token);
                this.loggedIn = true;
                this._authNavStatusSource.next(true);
            }, error => {
                console.log(error);
                this.dialog.open(ErrorComponent);
        });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}
