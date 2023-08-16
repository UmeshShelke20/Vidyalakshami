import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'studentdash',component:StudentsComponent}
]

@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
  ,exports:[StudentsComponent]
})
export class StudentModule { }
