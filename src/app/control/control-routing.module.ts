import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeUpdateComponent } from './theme-update/theme-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'control', component: ManageComponent},
  {path: 'theme',  component: ThemeComponent},
  {path: 'theme/:id',  component: ThemeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
