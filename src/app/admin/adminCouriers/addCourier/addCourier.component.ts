import { ErrorComponent } from './../../../error/error.component';
import { CourierRegistrationModel } from './../../../models/courierRegistrationModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SuccessOrderComponent } from '../../../user/SuccessOrder/SuccessOrder.component';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-add-courier',
  templateUrl: './addCourier.component.html',
  providers: [HttpService],
  styleUrls: ['./addCourier.component.css']
})
export class AddCourierComponent implements OnInit {
  addingForm: FormGroup;
  address: string;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private httpService: HttpService) {
  }

  ngOnInit() {
    this.addingForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });

  }

  AddCourier() {
    if (this.addingForm.valid) {
      const courierModel = {
        email: this.addingForm.controls['email'].value,
        password: this.addingForm.controls['password'].value,
        firstName: this.addingForm.controls['firstName'].value,
        lastName: this.addingForm.controls['lastName'].value,
        phoneNumber: this.addingForm.controls['phoneNumber'].value,
      };
      this.httpService.postData('couriers', courierModel)
        .subscribe(response => {
          this.addingForm.reset();
          this.dialog.closeAll();
          this.dialog.open(SuccessOrderComponent);
          setTimeout(() => window.location.reload(), 1000);
        }, error => {
          this.dialog.open(ErrorComponent);
        });
    }
  }

}
