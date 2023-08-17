import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.scss']
})
export class ViewEnquiryComponent implements OnInit {

  constructor( private com:CommonserviceService) { }
allEnquiry:any;
  ngOnInit(): void {
this.com.viewAllEnquiry().pipe(catchError(this.handleError)).subscribe(response => {
this.allEnquiry=response;
 // console.log(response,"HomeComtroller mananger");
 // alert(response) ;
 // window.location.reload();
});
  }

  
private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    alert( error.error)
    console.error( error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    alert(error.error)
    console.error(
      `${error.status},`, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
}
