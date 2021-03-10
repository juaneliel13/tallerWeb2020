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
  valor1=null;
  valor2=null;
  resultado=null;
  opcion1=false;
  opcion2=false;
  opcion3=false;
  opcion4=false;
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
      this.departmentService.putDepartment(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({html:'Updated Succesfully'});
        this.getDepartment();
      });
    }
    }else{
      if(form.value.item!=null && form.value.item!=""){
        
      this.departmentService.postDepartment(form.value)
      .subscribe(res=>{
        console.log(form.value);
        this.resetForm(form);
        M.toast({html:'Save Succesfully'});
        this.getDepartment();
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
