import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
import { Enquiry } from 'app/Model/enquiry';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss']
})
export class EnquiriesComponent implements OnInit {
  constructor( private com:CommonserviceService,public router:Router) { }
  allEnquiry:any;
 en:Enquiry={
   enquiryid: 0,
   name: '',
   dob: '',
   gender: '',
   category: '',
   email: '',
   mobile: 0,
   aadhar: 0,
   annualfamilyincome: 0,
   loanrangeAmount: 0,
   enquiryStatus: '',
   educationtype: '',
   city: '',
   pancard: ''
 }
ngOnInit(): void {
  this.com.vewNewEnquiry().pipe(catchError(this.handleError)).subscribe(response => {
  this.allEnquiry=response;
  });
    }
checkCIBIL(n:string){
      this.router.navigateByUrl("role/crema/ckeckcbil/"+n)
    }
    acceptEn(n:number){
      this.en.enquiryid=n
this.com.accepEnquiry(this.en).pipe(catchError(this.handleError)).subscribe(response => {
  alert( response);
  window.location.reload();
  });
  }
rejectEn(n:number){
  this.en.enquiryid=n
 this.com.rejectEnquiry(this.en).pipe(catchError(this.handleError)).subscribe(response => {
  alert( response);
  window.location.reload();
  });
}
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert( error.error)
      console.error( error.error);
    } else {
     
      alert(error.error)
      console.error(
        `${error.status},`, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
