import { Injectable } from '@angular/core';
import { Employee } from 'src/app/shared/employee';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) {}

    
  
      addEmployee(employee: Employee){
        return this.http.post(this.baseUrl , employee);
      }
  
      findAll(){
        return this.http.get(this.baseUrl + '/all' );
      }
  
      updateEmployee(employee : Employee){
        return this.http.put( this.baseUrl, employee);
      }
     deleteEmployee(id : any){
       return this.http.delete(this.baseUrl + '/delete/' + id);
     }
}

  
  
  


