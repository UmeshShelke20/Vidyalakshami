import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[
  {path:'eligibility',component:EligibilityComponent}
]


@NgModule({
  declarations: [
    EligibilityComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class CheckeligibilityModule { }
