import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealationManagerComponent } from './realation-manager/realation-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { ViewformComponent } from './viewForm/viewform/viewform.component';
const routes:Routes=[
  {path:'relationManager',component:RealationManagerComponent},
  {path:'viewEnquiry',component:ViewEnquiryComponent},
  {path:'newApplication',component:NewApplicationComponent},
  {path:'viewApplication',component:ViewApplicationComponent},
  {path:'viewform/:id',component:ViewformComponent}
]

@NgModule({
  declarations: [
    RealationManagerComponent,
    ViewEnquiryComponent,
    NewApplicationComponent,
    ViewApplicationComponent,
    ViewformComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,MatRippleModule,MatTooltipModule,MatSelectModule,MatStepperModule,
    MatCardModule
  ]
})
export class RelationManagerModule { }
