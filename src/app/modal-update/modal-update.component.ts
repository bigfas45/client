import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray ,FormBuilder} from '@angular/forms';
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
  @Input() controlData2 : any;
  controlFeaturesData : boolean = false;
 featureId: string = "";
 controlId: string = "";

  controlForm = new FormGroup({
    appName: new FormControl(this.data.dataKey.con.appName, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    appURL: new FormControl(this.data.dataKey.con.appURL, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100),
    ]),
    appMenuName: new FormControl(this.data.dataKey.con.appMenuName, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100),
    ]),
    appRoute: new FormControl(this.data.dataKey.con.appRoute, [
      Validators.minLength(4),
      Validators.maxLength(100),
    ]),

  });



  controlSubFeatureForm = new FormGroup({
    subFeatureName: new FormControl('', [
      Validators.required
    ]),
    subFeatureRoute: new FormControl('', [
      Validators.required
    ]),
  });









  constructor(private fb: FormBuilder ,private controlService: ControlService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  // this.controlData = this.data.dataKey.features
   this.controlId = this.data.dataKey.con.id;
 this.fetchAllControlFeatures(this.controlId)
  }




  onSubmit(){
    console.log(this.controlForm.value)
    if (this.controlForm.invalid) {
      return;
    }

    this.controlService.controlUpdate(this.controlForm.value, this.data.dataKey.con.id).subscribe({
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

  fetchControlFeatures(id: any){
    this.controlService.fetchFeatures(id).subscribe((response: any) => {
      this.controlSubFeatureForm.setValue({
        subFeatureName: response.subFeatureName,
        subFeatureRoute: response.subFeatureRoute
     });
     this.featureId = id
     this.controlFeaturesData = true;
    })
  }

  fetchAllControlFeatures(id: any){
    this.controlService.fetchAllSUbFeatureByControlId(id).subscribe((response: any) => {
     this.controlData2 = response
    })
  }


  onSubmitSubFeatureApp(){
    if (this.controlSubFeatureForm.invalid) {
      return;
    }
    this.controlService.controlFeaturesAdd(this.controlSubFeatureForm.value, this.data.dataKey.con.id).subscribe({
      next: (res) => {
        this.controlSubFeatureForm.reset();
        this.fetchAllControlFeatures(this.controlId)
      },
      error: ({error}) => {
       if (error.appName || error.appURL || error.appURL ) {
         this.controlForm.setErrors({credentials: true})
       }
      }
    })
  }


  GetSubControl(id: any){
    this.fetchControlFeatures(id);
  }



  updateSubControl(id: any){


    if (this.controlSubFeatureForm.invalid) {
      return;
    }

    if (this.controlFeaturesData) {
      this.controlService.controlSubFeaturesUpdate(this.controlSubFeatureForm.value, id).subscribe({
        next: (res) => {
        
          this.controlFeaturesData = false;
          this.controlSubFeatureForm.reset();
          this.fetchAllControlFeatures(this.controlId)
        },
        error: ({error}) => {
         if (error.appName || error.appURL || error.appURL ) {
           this.controlForm.setErrors({credentials: true})
         }
        }
      })
    }


  }
}
