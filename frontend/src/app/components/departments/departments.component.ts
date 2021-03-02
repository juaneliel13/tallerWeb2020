import { Component, OnInit } from '@angular/core';

import {DepartmentService} from '../../services/department.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  providers: [DepartmentService]

})
export class DepartmentsComponent implements OnInit {

  constructor(public departmentService:DepartmentService) { }

  ngOnInit(): void {
  }

  addDepartment(form: NgForm) {
    console.log(form.value);
  }

}
