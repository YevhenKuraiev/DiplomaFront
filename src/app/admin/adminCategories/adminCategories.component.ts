import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Category } from '../../models/categoryModel';
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
  categories: Category[] = [];

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
    this.httpService.getData('categories').subscribe((data: Category[]) => this.categories = data);
  }

  sliceCategories() {
    if (this.pageEvent) {
      return this.categories.slice(
        (this.pageEvent.pageIndex * this.pageEvent.pageSize),
        (this.pageEvent.pageIndex * this.pageEvent.pageSize + this.pageEvent.pageSize));
    } else {
      return this.categories.slice(0, this.pageSize);
    }
  }

  postCategory() {
    this.httpService.postData('categories', { name: this.addCategoryForm.get('name').value });
  }

  getKey(index: number, category: Category) {

  }

}
