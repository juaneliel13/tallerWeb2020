import { Component, OnInit } from '@angular/core';

import {DepartmentService} from '../../services/department.service'
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { Department } from 'src/app/models/department';

declare var M: any;

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  providers: [DepartmentService]

})
export class DepartmentsComponent implements OnInit {

  data:any;
  constructor(public departmentService:DepartmentService) { }

  ngOnInit(){
    this.getDepartment();
  }

  addDepartment(form: NgForm) {
    if(form.value._id){
      this.departmentService.putDepartment(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({html:'Updated Succesfully'});
        this.getDepartment();
      });
    }else{
      this.departmentService.postDepartment(form.value)
      .subscribe(res=>{
        console.log(form.value);
        this.resetForm(form);
        
        M.toast({html:'Save Succesfully'});
        this.getDepartment();
      });
    }
  }

  getDepartment(){
    this.departmentService.getDepartments()
    .subscribe(res=>{
      this.departmentService.departments=res;
      this.data=Object.values(this.departmentService.departments);
      console.log(this.data);
    });
  }

  editDepartment(department:Department){
    this.departmentService.selectedDepartment = department;

  }

  deleteDepartment(_id: String){
    this.departmentService.deleteDepartment(_id)
    .subscribe(res=>{
      M.toast({html:'Deleted Succesfully'});
      this.getDepartment();
    });
    
  }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.departmentService.selectedDepartment=new Department();
    }
  }
}
