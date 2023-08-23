import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'app/CommonService/commonservice.service';

@Component({
  selector: 'app-allnew-application',
  templateUrl: './allnew-application.component.html',
  styleUrls: ['./allnew-application.component.scss']
})
export class AllnewApplicationComponent implements OnInit {
  applications:any
  constructor(private com:CommonserviceService,private router:Router) { }

  ngOnInit(): void {
    this.com.getPendingApplication().subscribe((data:any)=>{
      this.applications=data
    });
  }
  viewCompleteForm(n:number){
    this.router.navigateByUrl("role/crema/viewsingle/"+n)
    }
}
