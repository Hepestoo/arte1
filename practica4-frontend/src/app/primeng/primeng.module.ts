import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule
  ],
  exports:[
    ButtonModule,
    PasswordModule
  ]
})
export class PrimengModule { }
