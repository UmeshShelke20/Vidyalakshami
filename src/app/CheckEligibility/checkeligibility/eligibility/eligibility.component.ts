import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.scss']
})
export class EligibilityComponent implements OnInit {

  constructor( private com:CommonserviceService) { }
eligibility:any
  ngOnInit(): void {

    this.eligibility=new FormGroup({
      nationality:new FormControl('',[Validators.required]),
	category:new FormControl('',[Validators.required]),
	age:new FormControl('',[Validators.required]),
	income:new FormControl('',[Validators.required]),
	coursetype:new FormControl('',[Validators.required]),
	duration:new FormControl('',[Validators.required]),
	coursefee:new FormControl('',[Validators.required]),
	contributionamount:new FormControl('',[Validators.required]),
	requiredloanamount:new FormControl('',[Validators.required]),
    })
  }
  get e(){
    return this.eligibility.controls
  }

  check(){
this.com.checkEligibility(this.eligibility.value).pipe(catchError(this.handleError)).subscribe(response => {
  console.log(response,"HomeComtroller mananger");
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
