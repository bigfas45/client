import { Component, OnInit, Input } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  @Input() themes = [] as any

  constructor(private controlService: ControlService) { 
    this.fetchControl()
  }

  ngOnInit(): void {
  }


  fetchControl(){
    this.controlService.controlGetTheme().subscribe((response: any) => {
       this.themes = response

    })
  }


  openUpdateDialog(id: any){

  }


}
