import { Component, OnInit } from '@angular/core';
import { Menu } from 'app/Model/menu';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/relationManager',     title: 'Relation Manager',         icon:'nc-bank',       class: '' },
  { path: '/admin',     title: 'Admindash',         icon:'nc-bank',       class: '' },
  { path: '/stu',         title: 'studentdash',             icon:'nc-diamond',    class: '' },
  { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
  { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
  { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
  { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
  { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
  { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' }
  
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public menuItems: any[];
  role: string;
  constructor() {}

  ngOnInit() {
   
    this.menuItems = Menu.menu;
    console.log(this.menuItems);
    this.role = sessionStorage.getItem("role");
    console.log(this.role, "admin dashbord");
  }

}
