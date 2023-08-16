import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import { RouterModule, Routes } from '@angular/router';
import { HRComponent } from '../hr/hr.component';

const routes:Routes=[
  {path:'admindash',component:AdmindashComponent},
  {path:'HR',component:HRComponent}
  
]

@NgModule({
  declarations: [
    AdmindashComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
  ,
  exports:[AdmindashComponent]
})
export class AdminModule { }
