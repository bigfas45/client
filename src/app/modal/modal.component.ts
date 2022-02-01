import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ControlService } from '../control/control.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  controlForm = new FormGroup({
    appName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    appURL: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    appMenuName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  })

  constructor(private controlService: ControlService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.controlForm.invalid) {
      return;
    }

    this.controlService.controlADD(this.controlForm.value).subscribe({
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
