import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router) {}
  username: string='';
  password:string='';
  ngOnInit() {}
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    
    if (u.username === 'opma' && u.password === 'opma') {
      console.log('in opma');
      sessionStorage.setItem('role', 'opma');
      this.router.navigateByUrl("role/opma/operational");
    }
    if (u.username === 'rema' && u.password === 'rema') {
      console.log('in rema');
      sessionStorage.setItem('role', 'rema');
      this.router.navigateByUrl("role/rema/relationManager");
    }
    if (u.username === 'crema' && u.password === 'crema') {
      console.log('in crema');
      sessionStorage.setItem('role', 'crema');
      this.router.navigateByUrl("role/crema/creditManager");
    }

    if (u.username === 'admin' && u.password === 'admin') {
      console.log('in admin');
      sessionStorage.setItem('role', 'admin');
      this.router.navigateByUrl("role/admin/admindash");
    }
    if (u.username === 'stu' && u.password === 'stu') {
      console.log('in stu');
      sessionStorage.setItem('role', 'stu');
      this.router.navigateByUrl("role/stu/studentdash");
    }
    if (u.username === 'library' && u.password === 'library') {
     
      sessionStorage.setItem('role', 'library');
      this.router.navigateByUrl("role/library/librarydash");
    }
    if (u.username === 'account' && u.password === 'account') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'account');
      this.router.navigateByUrl("role/account/accountdash");
    }
    if (u.username === 'principal' && u.password === 'principal') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'principal');
      this.router.navigateByUrl("role/principal/principaldash");
    }
    if (u.username === 'hr' && u.password === 'hr') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'hr');
      this.router.navigateByUrl("role/hr/hrdash");
    }
    
  }
  signup(u) {
    console.log("signup");
  }
}
