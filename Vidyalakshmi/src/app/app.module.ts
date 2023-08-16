import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AdminlayoutComponent } from './AdminLayout/adminlayout/adminlayout.component';
import { SidebarModule } from './SideBar/sidebar/sidebar.module';
import { TopbarModule } from './TopBar/topbar/topbar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FootermoduleModule } from './footerModule/footermodule/footermodule.module';
import { FixedPluginModule } from './fixedplugin/fixedplugin.module';
import { HRComponent } from './Modules/Admin/hr/hr.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,FormsModule,SidebarModule,TopbarModule, NgbModule,FootermoduleModule,FixedPluginModule,
  ],
  declarations: [
    AppComponent,LoginComponent, AdminlayoutComponent, HRComponent,HomeComponent
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
