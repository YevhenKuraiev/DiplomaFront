import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CategoryModel } from '../../models/categoryModel';
import { FormControl, Validators, FormGroup } from '@angular/forms';

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
  categories: CategoryModel;

  constructor(private httpService: HttpService) {
    this.editCategoryForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[А-Я][а-яА-Я]+')
      ]),
    });
    this.addCategoryForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[А-Я][а-яА-Я]+')
      ]),
    });
  }

  ngOnInit(): void {
    this.httpService.getData('categories').subscribe((data: CategoryModel) => this.categories = data);
  }

}
