import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/shared/employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],

})
export class EmployeeComponent implements OnInit {
  constructor( public service : EmployeeService) { }

    /*employee : Employee = new Employee();
    submitted = false;


  ngOnInit() {
    this.submitted=false;
  }
  
  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
   /* password : new FormControl (['', [Validators.required, Validators.minLength(8)]]),*/
   /* password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),

    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('1') ,
    hireDate: new FormControl(''),

    contractid : new FormControl('1') 
  });
   
  saveEmploye(saveEmploye){
    this.employee= new Employee();

    this.employee.name=this.FullName.value;
    this.employee.password=this.Password.value;
    this.employee.username=this.Username.value;
    this.employee.email=this.Email.value;
    this.employee.phone=this.Phone.value;
    this.employee.gender=this.Gender.value;
    this.employee.hireDate=this.HireDate.value;
    this.employee.gender=this.Contract.value;



    this.submitted= true;

    this.save();
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  
  }


   
  save() {  
    this.service.addEmployee(this.employee)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.employee = new Employee();  
  }  
  get FullName(){  
    return this.form.get('name');  
  }  
  
  get Password(){
    return this.form.get('password');  
  }
  get Username(){  
    return this.form.get('username');  
  } 
  
  get Email(){  
    return this.form.get('email');  
  }  
  get Phone(){
    return this.form.get('phone');
  }
  get Gender(){
    return this.form.get('gender') ;
  }
  get HireDate(){
    return this.form.get('hireDate');
  }

  get Contract(){
    return this.form.get('contractid');
  }
  
  addStudentForm(){  
    this.submitted=false;  
    this.form.reset();  
  }  */
  ngOnInit() {}
}  



   
    
  

