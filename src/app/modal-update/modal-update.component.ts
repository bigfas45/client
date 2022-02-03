import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ControlService } from '../control/control.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";



@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {
  @Input() controlData : any;

  controlForm = new FormGroup({
    appName: new FormControl(this.data.dataKey.appName, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    appURL: new FormControl(this.data.dataKey.appURL, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100),
    ]),
    appMenuName: new FormControl(this.data.dataKey.appMenuName, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100),
    ]),
    appRoute: new FormControl(this.data.dataKey.appRoute, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100),
    ]),
  })
  constructor(private controlService: ControlService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
  
  }

  onSubmit(){
    if (this.controlForm.invalid) {
      return;
    }

    this.controlService.controlUpdate(this.controlForm.value, this.data.dataKey.id).subscribe({
      next: () => {
        this.dialog.closeAll();
       
      },
      error: ({error}) => {
       if (error.appName || error.appURL || error.appURL ) {
         this.controlForm.setErrors({credentials: true})
       }
      }
    })

  
  }
}
