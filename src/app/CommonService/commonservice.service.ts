import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Eligibility } from 'app/Model/eligibility';
import { Enquiry } from 'app/Model/enquiry';
import { CIBIL } from 'app/ApplicatioFormClassess/CIBIL/cibil';
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

   viewAllEnquiry(){
    return this.http.get(this.url+"viewAllEnquiry")
   }
   application(e:any):Observable<any>{
    return this.http.post<any>(this.url+"saveApplicationDetails", e,{responseType:'text' as 'json'})
    }

    getAllApplication(){
      return this.http.get(this.url+"getAllApplication")
    }

    viewform(n:number){
      return this.http.get(this.url+"viewform/"+n)
    }
    getCIBIL(cibil:CIBIL){
    return this.http.post(this.url+"checkCibil/",cibil,{responseType:'text'as 'json'})
    }
    
    getpanno(n:number){
    return this.http.get(this.url+"pan/"+n)
    }
    vewNewEnquiry(){
      return this.http.get(this.url+"vewNewEnquiry")
    }
accepEnquiry(n:Enquiry){
return this.http.put( this.url+"accepEnquiry/",n ,{responseType:'text'as 'json'});
}

rejectEnquiry(n:Enquiry){
return this.http.put(this.url+"rejectEnquiry/",n ,{responseType:'text'as 'json'} )
}
vewAcceptedEnquiry(){
return this.http.get(this.url+"vewAcceptedEnquiry")
}
getEnquiryByid(n:number){
  return this.http.get(this.url+"getEnquiryByid/"+n)
}
getPendingApplication(){
return this.http.get(this.url+"getallpendingApplication")
}
}
