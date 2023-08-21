import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonserviceService } from 'app/CommonService/commonservice.service';
@Component({
  selector: 'app-view-all-application',
  templateUrl: './view-all-application.component.html',
  styleUrls: ['./view-all-application.component.scss']
})
export class ViewAllApplicationComponent implements OnInit {
  applications:any
  constructor(private com :CommonserviceService,private router:Router) { }

  ngOnInit(): void {
    this.com.getAllApplication().subscribe((data:any)=>{
      this.applications=data
    })
  }
viewCompleteForm(n:number){
this.router.navigateByUrl("role/crema/viewsingle/"+n)
}
checkCIBIL(n:string){
  this.router.navigateByUrl("role/crema/ckeckcbil/"+n)
}
}
