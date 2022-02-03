import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlModule } from './control/control.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ModalUpdateComponent } from './modal-update/modal-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, ModalUpdateComponent]
})
export class AppModule { }
