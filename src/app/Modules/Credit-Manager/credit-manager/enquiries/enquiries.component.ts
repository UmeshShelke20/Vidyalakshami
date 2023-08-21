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
 
    ngOnInit(): void {
  this.com.vewNewEnquiry().pipe(catchError(this.handleError)).subscribe(response => {
  this.allEnquiry=response;
  });
    }
    checkCIBIL(n:string){
      this.router.navigateByUrl("role/crema/ckeckcbil/"+n)
    }
    acceptEn(n:number){
this.com.accepEnquiry(n).pipe(catchError(this.handleError)).subscribe(response => {
  alert( response);
  });
  }
rejectEn(n:number){
 this.com.rejectEnquiry(n).pipe(catchError(this.handleError)).subscribe(response => {
  alert( response);
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
