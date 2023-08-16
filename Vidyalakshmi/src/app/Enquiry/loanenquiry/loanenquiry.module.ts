import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'enquiry',component:EnquiryComponent}
]

@NgModule({
  declarations: [
    EnquiryComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class LoanenquiryModule { }
