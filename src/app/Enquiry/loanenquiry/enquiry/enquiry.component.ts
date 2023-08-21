import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
enquiry:any
  constructor(private com:CommonserviceService) { }

  ngOnInit(): void {
    this.enquiry=new FormGroup({
      enquiryid:new FormControl('',[Validators.required]),	
      name:new FormControl('',[Validators.required]),
      dob:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required]),
      aadhar:new FormControl('',[Validators.required]),
      annualfamilyincome:new FormControl('',[Validators.required]),
      loanrangeAmount:new FormControl('',[Validators.required]),
      enquiryStatus:new FormControl('',[Validators.required]),
      educationtype:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      pancard:new FormControl('',[Validators.required]),

    })
  }

  get e(){
    return this.enquiry.controls
  }
  onSubmit(){
    this.com.enquirySubmit(this.enquiry.value).pipe(catchError(this.handleError)).subscribe(response => {
      console.log(response,"Enquiry mananger");
      alert(response) ;
      window.location.reload();
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
