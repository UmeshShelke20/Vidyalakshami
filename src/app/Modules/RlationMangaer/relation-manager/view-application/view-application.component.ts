import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonserviceService } from 'app/CommonService/commonservice.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.scss']
})
export class ViewApplicationComponent implements OnInit {
applications:any
  constructor(private com :CommonserviceService,private router:Router) { }

  ngOnInit(): void {
    this.com.getAllApplication().subscribe((data:any)=>{
      this.applications=data
    })
  }
viewCompleteForm(n:number){
this.router.navigateByUrl("role/rema/viewform/"+n)
}

}
