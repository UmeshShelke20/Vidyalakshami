import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonserviceService } from 'app/CommonService/commonservice.service';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss']
})
export class ViewformComponent implements OnInit {
  applications:any
  appId:number
  constructor(private com :CommonserviceService,private active:ActivatedRoute) {

    this.active.paramMap.subscribe(s=>  
    this.appId=Number(s.get("id")) 
      )
   }

  ngOnInit(): void {
//     this.com.getAllApplication().subscribe((data:any)=>{
//       this.applications=data
//     })
// console.log(this.appId)

  }

}
