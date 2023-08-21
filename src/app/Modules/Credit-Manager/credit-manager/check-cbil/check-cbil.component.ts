import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CIBIL } from 'app/ApplicatioFormClassess/CIBIL/cibil';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
@Component({
  selector: 'app-check-cbil',
  templateUrl: './check-cbil.component.html',
  styleUrls: ['./check-cbil.component.scss']
})
export class CheckCBILComponent implements OnInit {
cbil1:CIBIL={
  cibilId: 0,
  pancard: ''
}

  cibil:any
  constructor(private com :CommonserviceService,private active:ActivatedRoute) {

    this.active.paramMap.subscribe(s=>  
    this.cbil1.pancard=s.get("id") 
      )
      console.log(this.cbil1)
   }

  ngOnInit(): void {
this.com.getCIBIL(this.cbil1).subscribe((data:any)=>{
  this.cibil=data
})
  }
}
