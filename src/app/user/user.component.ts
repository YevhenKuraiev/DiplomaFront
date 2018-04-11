import { HttpService } from './../services/http.service';
import { Category } from './../models/categoryModel';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  categories: Category;
  constructor(private httpService: HttpService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.httpService.getData('categories').subscribe((data: Category) => this.categories = data);
  }

  openCart(): void {
    const dialogRef = this.dialog.open(CartComponent);
  }

}
