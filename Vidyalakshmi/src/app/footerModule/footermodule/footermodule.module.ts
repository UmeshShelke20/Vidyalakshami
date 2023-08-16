import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:FooterComponent}
]

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent]
})
export class FootermoduleModule { }
