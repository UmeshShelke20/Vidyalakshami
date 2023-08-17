import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';

const routes:Routes=[
{
  path:'',component:SidenavComponent,
}
]
@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[SidenavComponent]
})
export class SidebarModule { }
