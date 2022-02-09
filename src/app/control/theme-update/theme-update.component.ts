import { Component, OnInit, Input } from '@angular/core';
import { ControlService } from '../control.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-theme-update',
  templateUrl: './theme-update.component.html',
  styleUrls: ['./theme-update.component.css']
})
export class ThemeUpdateComponent implements OnInit {
  id:any = "";

  @Input() data = [] as any
  @Input() dataKey = [] as any

  @Input() dataWhite = [] as any
  @Input() dataWhiteKey = [] as any

  constructor(private controlService: ControlService, private route:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchControlById(this.id)

    
  }


  fetchControlById(id: any){
    this.controlService.controlTheme(id).subscribe({
      next: (response: any) =>{
        // black
        this.data = response.style["html[data-theme='dark']"];
        this.dataKey = Object.keys(this.data)

        // white
        this.dataWhite = response.style["html[data-theme='white']"];
        this.dataWhiteKey = Object.keys(this.dataWhite)

        console.log( this.dataWhite);
      },
    })
  }




}
