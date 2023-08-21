import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationalManagerComponent } from './operational-manager/operational-manager.component';
import { AllnewApplicationComponent } from './allnew-application/allnew-application.component';
import { AllSanctionApplicationComponent } from './all-sanction-application/all-sanction-application.component';
import { ViewFullApplicationComponent } from './view-full-application/view-full-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'operational',component:OperationalManagerComponent},
  {path:'allnewapp',component:AllnewApplicationComponent},
  {path:'allsacapp',component:AllSanctionApplicationComponent},
  {path:'viewfullapp',component:ViewFullApplicationComponent},
]

@NgModule({
  declarations: [
    OperationalManagerComponent,
    AllnewApplicationComponent,
    AllSanctionApplicationComponent,
    ViewFullApplicationComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,MatRippleModule,MatTooltipModule,MatSelectModule,MatStepperModule,
    MatCardModule
  ]
})
export class OperationalManagerModule { }
