import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Eligibility } from 'app/Model/eligibility';
import { Enquiry } from 'app/Model/enquiry';
import { CIBIL } from 'app/ApplicatioFormClassess/CIBIL/cibil';
import { Application } from 'app/ApplicatioFormClassess/Application/application';
import { BankDetails } from 'app/ApplicatioFormClassess/BankDetails/bank-details';
import { EducationDetails } from 'app/ApplicatioFormClassess/EducationDetails/education-details';
import { EducationPrevHistory } from 'app/ApplicatioFormClassess/EducationPrevHistory/education-prev-history';
import { EnquiryPersonalDetails } from 'app/ApplicatioFormClassess/EnquiryPersonalDetails/enquiry-personal-details';
import { GaurantorDetails } from 'app/ApplicatioFormClassess/GaurantorDetails/gaurantor-details';
import { Document } from 'app/ApplicatioFormClassess/Document/document';
import { Address } from 'app/ApplicatioFormClassess/Address/address';
import { PreviousLoanDetails } from 'app/ApplicatioFormClassess/PreviousLoanDetails/previous-loan-details';
import { College } from 'app/ApplicatioFormClassess/College/college';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  constructor(private http:HttpClient) { }
  address:Address={
    id: 0,
    district: '',
    citypin: 0,
    state: '',
    city: '',
    landmark: '',
    blockno: 0
  }
  college:College={
    collegeId: 0,
    collegeName: '',
    collegeEmail: '',
    collegeMobile: 0,
    collegeaddress: new Address
  }
  educationDetails:EducationDetails={
    eid: 0,
    type: '',
    country: '',
    duration: '',
    fees: 0,
    institutename: '',
    college: this.college
  }
peEn:EnquiryPersonalDetails={
  eid: 0,
  ename: '',
  edob: '',
  egender: '',
  ecategory: '',
  eemail: '',
  emobile: 0,
  annualfamilyincome: 0,
  loanrangeAmount: 0,
  address: this.address
}
bankDetails:BankDetails={
  bankid: 0,
  bankAccNo: 0,
  accHolderName: '',
  bankname: '',
  bankIFSC: '',
  branchName: ''
}
previousLoanDetails:PreviousLoanDetails={
  pldid: 0,
  previousLoanAmount: 0,
  previousLoanTenure: '',
  previousLoanpaidAmount: 0,
  previousLoanremainingAmount: 0,
  previousLoanStatus: '',
  previousLoanRemark: '',
  bankdetails: this. bankDetails
}
gaurantorDetails:GaurantorDetails={
  gid: 0,
  gname: '',
  gdob: '',
  ggender: '',
  gemail: '',
  gmobile: 0,
  occupation: '',
  panno: '',
  relationWithStudent: '',
  address: this.address,
  previousloandetils: this.previousLoanDetails
}

educationPrevHistory:EducationPrevHistory={
  pcId: 0,
  previouscourse: '',
  year: 0,
  percentage: 0,
  institute: ''
}
document:Document={
  docId: 0,
  aadhar: [],
  pan: [],
  casteCert: [],
  incomeCert: [],
  bankStatement: [],
  admissionCert: [],
  feeStruct: []
}
  Application:Application={
    applicationId: 0,
    application_Status:"",
    enquiryPersonalDetails:this.peEn,
    gaurantorDetails: this. gaurantorDetails,
    educationDetails: this.educationDetails,
    educationPrevHistory: this. educationPrevHistory,
    documents: this. document,
    studentbankDetails: this.bankDetails
  }
  
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

    viewform(n:number):Observable<Application>{
      return this.http.get<Application>(this.url+"viewform/"+n)
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
