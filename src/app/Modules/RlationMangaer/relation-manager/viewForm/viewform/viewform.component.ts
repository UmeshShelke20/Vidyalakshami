import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'app/ApplicatioFormClassess/Application/application';
import { BankDetails } from 'app/ApplicatioFormClassess/BankDetails/bank-details';
import { Document } from 'app/ApplicatioFormClassess/Document/document';
import { EducationDetails } from 'app/ApplicatioFormClassess/EducationDetails/education-details';
import { EducationPrevHistory } from 'app/ApplicatioFormClassess/EducationPrevHistory/education-prev-history';
import { EnquiryPersonalDetails } from 'app/ApplicatioFormClassess/EnquiryPersonalDetails/enquiry-personal-details';
import { GaurantorDetails } from 'app/ApplicatioFormClassess/GaurantorDetails/gaurantor-details';
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
this.com.viewform(this.appId).subscribe((data:Application)=>{
this.applications=Object.assign(data);
})
console.log(this.applications);
  }

}
