import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class LoginModule { }
