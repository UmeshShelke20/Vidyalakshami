import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckApplicationComponent } from './check-application/check-application.component';
import { CheckCBILComponent } from './check-cbil/check-cbil.component';
import { ViewAllApplicationComponent } from './view-all-application/view-all-application.component';
import { ViewsingleApplicationComponent } from './viewsingle-application/viewsingle-application.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { CreditManagerComponent } from './credit-manager/credit-manager.component';
const routes:Routes=[
  {path:'creditManager',component:CreditManagerComponent},
  {path:'checkapp',component:CheckApplicationComponent},
  {path:'ckeckcbil',component:CheckCBILComponent},
  {path:'viewAllApp',component:ViewAllApplicationComponent},
  {path:'viewsingle/:id',component:ViewsingleApplicationComponent}
]

@NgModule({
  declarations: [
    CheckApplicationComponent,
    CheckCBILComponent,
    ViewAllApplicationComponent,
    ViewsingleApplicationComponent,
    CreditManagerComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,MatRippleModule,MatTooltipModule,MatSelectModule,MatStepperModule,
    MatCardModule
  ]
})
export class CreditManagerModule { }
