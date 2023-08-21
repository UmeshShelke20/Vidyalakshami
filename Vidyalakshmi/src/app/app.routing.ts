import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminlayoutComponent } from './AdminLayout/adminlayout/adminlayout.component';
import { AdminModule } from './Modules/Admin/admin/admin.module';
import { StudentModule } from './Modules/Students/student/student.module';
import { HomeComponent } from './home/home.component';
import { CheckeligibilityModule } from './CheckEligibility/checkeligibility/checkeligibility.module';
import { LoanenquiryModule } from './Enquiry/loanenquiry/loanenquiry.module';
import { LoginModule } from './login/login/login.module';
import { RelationManagerModule } from './Modules/RlationMangaer/relation-manager/relation-manager.module';
import { CreditManagerModule } from './Modules/Credit-Manager/credit-manager/credit-manager.module';


const routes: Routes =[
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent,children:[
    {path:'check',loadChildren:()=>CheckeligibilityModule},
    {path:'reg',loadChildren:()=>LoanenquiryModule},
    {path: 'log',loadChildren:()=> LoginModule},
  ]},
  
  {path:'role', component:AdminlayoutComponent,children:[
     {path:'admin',loadChildren:()=>AdminModule},
     {path:'stu',loadChildren:()=>StudentModule},
     {path:'rema',loadChildren:()=>RelationManagerModule},
     {path:'crema',loadChildren:()=>CreditManagerModule},
  ]}

];

@NgModule({
  imports: [
    CommonModule, 
    AdminModule,
    StudentModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
