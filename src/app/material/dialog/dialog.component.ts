import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  ValidatorFn,
  Validator,
  FormGroup,
  FormControl,
  NG_VALIDATORS
} from '@angular/forms'
export interface DialogData {
  operation: string;
  data: [string];
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<DialogComponent>, ) { }

  addupForm: FormGroup;

  ngOnInit(){
    this.addupForm = new FormGroup({
    name: new FormControl(),
    password : new FormControl (),
    username: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    gender: new FormControl() ,
    hireDate: new FormControl(),

    })
  } 

  public delete() {
    this.close('delete')
  }
  public add() {
    this.close('add')
  }

  public close(type: string) {
    if (type === 'delete') { // delete
      this.data['operation'] = 'deleted'
      this.dialogRef.close({
        data: this.data
      });
    }
    else if (type === 'add') { // add
      this.dialogRef.close({
        data: {
          'name': this.addupForm.value.name,
          'password': this.addupForm.value.password,
          'username': this.addupForm.value.username,
          'email': this.addupForm.value.email,
          'phone': this.addupForm.value.phone,
          'gender': this.addupForm.value.gender,
          'operation':'added'

        }
      });
    }
    else { // close
      this.dialogRef.close({
        data: null,
        operation: 'closed'

      });
    }
  }
  
}
