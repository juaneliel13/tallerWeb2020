import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Department} from '../models/department'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  selectedDepartment: Department;
  //departments: Department[];
  readonly URL_API= "http://localhost:3000/api/department";
  constructor(private http: HttpClient) {
    this.selectedDepartment=new Department();
   }

  getDepartments() {
    return this.http.get(this.URL_API)
  }

  postDepartment(Department:Department) {
    return this.http.post(this.URL_API,Department);
  }

  putDepartment(Department:Department){
    return this.http.put(this.URL_API + `/${Department._id}`,Department);
  }

  deleteDepartment(_id: String){
    return this.http.delete(this.URL_API + `${_id}`)
  }
}
