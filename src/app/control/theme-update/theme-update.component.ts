import { Component, OnInit, Input } from '@angular/core';
import { ControlService } from '../control.service';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-theme-update',
  templateUrl: './theme-update.component.html',
  styleUrls: ['./theme-update.component.css']
})
export class ThemeUpdateComponent implements OnInit {
  id:any = "";

  themeDataSet: any[] = []

  themeFormGroup: FormGroup = new FormGroup({});

  @Input() data = [] as any
  @Input() dataKey = [] as any

  @Input() dataWhite = [] as any
  @Input() dataWhiteKey = [] as any

  constructor(
    private controlService: ControlService,
     private route:ActivatedRoute,
     private fb: FormBuilder
    ) {
   
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchControlById(this.id)
  }

  fetchControlById(id: any){
    let data: any[] = []
    this.controlService.controlTheme(id).subscribe((res: any) =>{

      for (let darkTheme in res.style["html[data-theme='dark']"]) {
        const tempValue = {name: darkTheme, dark: res.style["html[data-theme='dark']"][darkTheme]}
        data.push(tempValue)
      }
      
      data.forEach(dataObject => {
        for (let lightTheme in res.style["html[data-theme='white']"]) {
          if (dataObject.name === lightTheme) {
            dataObject.light = res.style["html[data-theme='dark']"][lightTheme]
          }
        }
      })
      this.themeDataSet = data
      


        // // black
        // this.data = res.style["html[data-theme='dark']"];
        // this.dataKey = Object.keys(this.data)

        // // white
        // this.dataWhite = res.style["html[data-theme='white']"];
        // this.dataWhiteKey = Object.keys(this.dataWhite)

        // console.log( this.dataWhite);
      },
    )
  }

  setForm(): void {
    this.themeFormGroup = this.fb.group({
      name: ['', Validators.required],
      dark: ['', Validators.required],
      light: ['', Validators.required],
    })
  }


}
