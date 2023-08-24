import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
@Component({
  selector: 'app-viewsingle-application',
  templateUrl: './viewsingle-application.component.html',
  styleUrls: ['./viewsingle-application.component.scss']
})
export class ViewsingleApplicationComponent implements OnInit {
  applications:any
  appId:number
  constructor(public com :CommonserviceService,private active:ActivatedRoute) {

    this.active.paramMap.subscribe(s=>  
    this.appId=Number(s.get("id")) 
      )
   }

  ngOnInit(): void {
this.com.viewform(this.appId).subscribe((data:any)=>{
this.com.Application=data
})
  }

}
