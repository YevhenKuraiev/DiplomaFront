import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CategoryModel } from '../../models/categoryModel';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './adminCategories.component.html',
  styleUrls: ['./adminCategories.component.css'],
  providers: [HttpService]
})
export class AdminCategoriesComponent implements OnInit {

  editCategoryForm: FormGroup;
  addCategoryForm: FormGroup;

  showEditCategory = false;

  imageData: any;
  categories: CategoryModel[] = [];

  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;

  constructor(private httpService: HttpService) {
    this.editCategoryForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[А-Я][а-яА-Я]{2,}')
      ]),
    });
    this.addCategoryForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[А-Я][а-яА-Я]{2,}')
      ]),
    });
  }

  ngOnInit(): void {
    this.httpService.getData('categories').subscribe((data: CategoryModel[]) => this.categories = data);
  }

  getCategories() {
    if (this.pageEvent) {
      return this.categories.slice(
        (this.pageEvent.pageIndex * this.pageEvent.pageSize),
        (this.pageEvent.pageIndex * this.pageEvent.pageSize + this.pageEvent.pageSize));
    } else {
      return this.categories.slice(0, this.pageSize);
    }
  }

}
