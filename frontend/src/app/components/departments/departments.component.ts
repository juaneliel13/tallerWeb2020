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
  amenities:any;
  constructor(public departmentService:DepartmentService) { }

  ngOnInit(){
    this.getDepartment();
  }

  addDepartment(form: NgForm) {
    if(form.value._id){
      if(form.value.item==""){
      M.toast({html:'Enter name'});
      }
      else{
        form.value.checkin=(<HTMLInputElement>document.getElementById("checkin")).value;
        form.value.checkout=(<HTMLInputElement>document.getElementById("checkout")).value;
        this.departmentService.putDepartment(form.value)
        .subscribe(res=>{
          this.resetForm(form);
          M.toast({html:'Updated Succesfully'});
          console.log((<HTMLInputElement>document.getElementById("autocomplete-input")).value);
          if((<HTMLInputElement>document.getElementById("autocomplete-input")).value==null || (<HTMLInputElement>document.getElementById("autocomplete-input")).value!="")
            this.getDepartment();
          else
            this.updateDepartmentsByCity();  
        });
    }
    }else{
      form.value.checkin=(<HTMLInputElement>document.getElementById("checkin")).value;
      form.value.checkout=(<HTMLInputElement>document.getElementById("checkout")).value;
      if(form.value.item!=null && form.value.item!=""){
      this.departmentService.postDepartment(form.value)
      .subscribe(res=>{
        console.log(form.value);
        this.resetForm(form);
        M.toast({html:'Save Succesfully'});
        console.log((<HTMLInputElement>document.getElementById("autocomplete-input")).value);
        if((<HTMLInputElement>document.getElementById("autocomplete-input")).value==null || (<HTMLInputElement>document.getElementById("autocomplete-input")).value=="")
            this.getDepartment();
          else
            this.updateDepartmentsByCity();
      });
    
    }
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
      if((<HTMLInputElement>document.getElementById("autocomplete-input")).value==null || (<HTMLInputElement>document.getElementById("autocomplete-input")).value=="")
      this.getDepartment();
    else
      this.updateDepartmentsByCity();
    });
    
  }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.departmentService.selectedDepartment=new Department();
    }
  }

  updateDepartmentsByCity(){
    var x = (<HTMLInputElement>document.getElementById("autocomplete-input")).value;
    this.departmentService.findDepartmentsByCity(x)
    .subscribe(res=>{
      this.departmentService.departments=res;
      this.data=Object.values(this.departmentService.departments);
      console.log(x);
    });
  }

  
}