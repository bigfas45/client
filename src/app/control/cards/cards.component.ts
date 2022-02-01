import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() title= '';
  @Input() icon= '';
  @Input() info= '';
  @Input() select= '';
  @Input() link =''
  constructor() { }

  ngOnInit(): void {
  }

}
