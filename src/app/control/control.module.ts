import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ManageComponent } from './manage/manage.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeComponent } from './theme/theme.component';
import { ThemeUpdateComponent } from './theme-update/theme-update.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    ManageComponent,
    ThemeComponent,
    ThemeUpdateComponent,
  ],
  imports: [
    CommonModule,
    ControlRoutingModule,
    SharedModule
  ]
})
export class ControlModule { }
