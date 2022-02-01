import { Component, OnInit,Input } from '@angular/core';
import { ControlService } from '../control.service';
import { ModalComponent } from 'src/app/modal/modal.component';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  @Input() controls = [] as any


  
  constructor(private controlService: ControlService, public dialog: MatDialog) { 
    this.fetchControl()
  }


  ngOnInit(): void {
    
  }

   fetchControl(){
    this.controlService.control().subscribe((response) => {
      this.controls = response
    })
  }



  openDialog(){
    const newControl = this.dialog.open(ModalComponent, {
      height: '400px',
      width: '500px',
    });

    newControl.afterClosed().subscribe((res: any) => {
      this.fetchControl();
    })
  }


}
