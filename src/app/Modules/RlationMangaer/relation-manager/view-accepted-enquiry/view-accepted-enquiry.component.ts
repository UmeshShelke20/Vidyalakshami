import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-view-accepted-enquiry',
  templateUrl: './view-accepted-enquiry.component.html',
  styleUrls: ['./view-accepted-enquiry.component.scss']
})
export class ViewAcceptedEnquiryComponent implements OnInit {

  constructor( private com:CommonserviceService, private router:Router) { }
allEnquiry:any; 
  ngOnInit(): void {
this.com.vewAcceptedEnquiry().pipe(catchError(this.handleError)).subscribe(response => {
this.allEnquiry=response;
});
  }

  fillupform(n:number){
    this.router.navigateByUrl("role/rema/newApplication/"+n)
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
