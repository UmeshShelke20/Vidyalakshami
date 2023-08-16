import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Eligibility } from 'app/Model/eligibility';
import { Enquiry } from 'app/Model/enquiry';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  constructor(private http:HttpClient) { }
  
  url:string="http://localhost:8081/"

  checkEligibility(el:Eligibility){
    return this.http.post(this.url+"checkme",el,{responseType:'text' as 'json'})
   }

   enquirySubmit(en:Enquiry){
    return this.http.post(this.url+"submitEnquiry",en,{responseType:'text' as 'json'})
   }

}
