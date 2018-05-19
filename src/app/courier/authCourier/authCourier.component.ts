import { Router } from '@angular/router';
import { ErrorComponent } from './../../error/error.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../../services/http.service';
import { Injectable, OnInit, Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatDialog } from '@angular/material';
import { SuccessOrderComponent } from '../../user/SuccessOrder/SuccessOrder.component';
import { Observable } from 'rxjs/Rx';
import { JWTModel } from '../../models/jwtModel';

@Injectable()

@Component({
  selector: 'app-auth-courier',
  templateUrl: './authCourier.component.html',
  styleUrls: ['./authCourier.component.css']
})
export class AuthCourierComponent implements OnInit {
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();
  private loggedIn = false;
  authForm: FormGroup;
  email: string;
  password: string;
  auth_token: string;
  constructor(private httpService: HttpService, private formBuilder: FormBuilder,
    public dialog: MatDialog, private router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    this._authNavStatusSource.next(this.loggedIn);
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const AuthModel = {
    email : this.email,
    password : this.password,
    };
    return this.httpService.postData('auth', AuthModel)
      .subscribe((result: JWTModel) => {
        localStorage.setItem('auth_token', result.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        this.authForm.reset();
        this.dialog.closeAll();
        this.dialog.open(SuccessOrderComponent);
        if (result) {
          this.router.navigate(['courier']);
       }
      }, error => {
        console.log(error);
        this.dialog.open(ErrorComponent);
      },
    );
}

}
