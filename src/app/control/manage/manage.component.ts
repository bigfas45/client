import { Component, OnInit,Input, Output } from '@angular/core';
import { ControlService } from '../control.service';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ModalUpdateComponent } from 'src/app/modal-update/modal-update.component';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  @Input() controls = [] as any

  @Input() controlById = [] as any

  @Input() id:any
  
  constructor(private controlService: ControlService, public dialog: MatDialog) { 
    this.fetchControl();
 
  
  }


  ngOnInit() {
    
  }

   fetchControl(){
    this.controlService.control().subscribe((response) => {
      this.controls = response
    })
  }





  openDialog(){
    const newControl = this.dialog.open(ModalComponent, {
      height: '450px',
      width: '500px',
    });

    newControl.afterClosed().subscribe((res: any) => {
      this.fetchControl();
    })
  }

  openUpdateDialog(control: any){


 
  
    const newControl = this.dialog.open(ModalUpdateComponent, {
      height: '450px',
      width: '500px',
      data:{
        dataKey: control
      }
    });

    newControl.afterClosed().subscribe((res: any) => {
      this.fetchControl();
    })
  }


}
