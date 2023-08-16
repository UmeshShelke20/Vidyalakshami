import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes:Routes=[]

@NgModule({
  declarations: [
    TopbarComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),NgbModule
  ],
  exports:[TopbarComponent]
})
export class TopbarModule { }
