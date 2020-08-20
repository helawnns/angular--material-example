import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// my components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

import {MatInputModule} from '@angular/material/input';

// add material to module
import { MaterialModule } from './material/material.module';

//add service
import { EmployeeService } from './shared/employee.service';

//add forms module
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
// add animaitons for material 
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,  
    ListEmployeesComponent  
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule ,
    MaterialModule , 
    MatInputModule
 
   

  ],
  providers: [ EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
