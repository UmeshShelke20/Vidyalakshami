import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss']
})
export class EnquiriesComponent implements OnInit {
  constructor( private com:CommonserviceService) { }
  allEnquiry:any;
    ngOnInit(): void {
  this.com.viewAllEnquiry().pipe(catchError(this.handleError)).subscribe(response => {
  this.allEnquiry=response;
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
