import { Component, OnInit } from '@angular/core';
import{ Employee} from 'src/app/shared/employee';
import { EmployeeService} from 'src/app/shared/employee.service'

export interface tableData{
  
    id: number;
    name: String;
    password: String;
    username: String;
    email: String;
    phone : number
    gender: String;  
    hireDate: String;
    contractid : number; 
}


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  constructor(private service : EmployeeService) { }
  public dataLoaded : boolean;
  public tableData : any
  public yourMessage = []
  ngOnInit(){
    this.get();
  }
  
  private get(){
    this.service.findAll().subscribe(data => {
      this.tableData = data;
      this.dataLoaded = true;
    });
  }
  private create (employee : Employee) {
      this.service.addEmployee(employee).subscribe(data => {
        this.get(); 
        
   });
  }
  private update(employee : Employee) {
    this.service.updateEmployee(employee).subscribe(data => {
     
    });
   }
  private delete(id: number) {
    this.service.deleteEmployee(id).subscribe(data => {
     
    }); 
  } 



  public action(row: any) {
    if (row.operation === 'added') {
      this.create(row);
      this.yourMessage.push('success', row.name + ' has been added successfully!')
      this.yourMessage = []
    }
    if (row.operation === 'updated') {
      this.update(row);
      this.yourMessage.push('success', row.name + ' has been updated successfully!')
      this.yourMessage = []
    }
    if (row.operation === 'deleted') {
      this.delete(row.id);
      this.yourMessage.push('success', ' has been deleted successfully!')
      this.yourMessage = []
    }

  }

    
      
      
}
