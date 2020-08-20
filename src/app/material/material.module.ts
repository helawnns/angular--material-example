import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule} from '@angular/material/select';
import {MatInputModule } from '@angular/material/input';

import { MatNativeDateModule } from '@angular/material/core';
import { NotifierModule } from 'angular-notifier';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatToolbarModule} from '@angular/material/toolbar';
import { DialogComponent } from './dialog/dialog.component';

import { EditableTableComponent} from './editable-table/editable-table.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [DialogComponent, EditableTableComponent],
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatDialogModule,
    MatButtonModule, MatIconModule, MatGridListModule, MatSortModule, MatCardModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NotifierModule.withConfig({
      // Custom options in here
    }),
  ],


  exports : [ EditableTableComponent,
   
  ],
  entryComponents: [DialogComponent]

})
export class MaterialModule { }
