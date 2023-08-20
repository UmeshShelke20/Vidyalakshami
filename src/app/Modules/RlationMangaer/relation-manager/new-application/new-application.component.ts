import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonserviceService } from 'app/CommonService/commonservice.service';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.scss']
})
export class NewApplicationComponent implements OnInit {
 
  application:any;

  constructor(private com:CommonserviceService) { }
  bankdetails=new FormGroup({
    bankid:new FormControl('',[Validators.required]),
    bankAccNo:new FormControl('',[Validators.required]),
    accHolderName:new FormControl('',[Validators.required]),
    bankname:new FormControl('',[Validators.required]),
    bankIFSC:new FormControl('',[Validators.required]),
    branchName:new FormControl('',[Validators.required]),

  })

  College=new FormGroup({
    collegeId:new FormControl('',[Validators.required]),
    collegeName:new FormControl('',[Validators.required]),
    collegeEmail:new FormControl('',[Validators.required]),
    collegeMobile:new FormControl('',[Validators.required]),
    collegeaddress:new FormGroup({
      id:new FormControl('',[Validators.required]),
      district:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      landmark:new FormControl('',[Validators.required]),
      blockno:new FormControl('',[Validators.required]),
      citypin:new FormControl('',[Validators.required]),
      })
  })

  ngOnInit(): void {
this.application=new FormGroup({
  applicationId:new FormControl('',[Validators.required]),
  enquiryPersonalDetails:new FormGroup({
    eid:new FormControl('',[Validators.required]),	
    ename:new FormControl('',[Validators.required]),
    edob:new FormControl('',[Validators.required]),
    egender:new FormControl('',[Validators.required]),
    ecategory:new FormControl('',[Validators.required]),
    eemail:new FormControl('',[Validators.required]),
    emobile:new FormControl('',[Validators.required]),
    address:new FormGroup({
      id:new FormControl('',[Validators.required]),
      district:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      landmark:new FormControl('',[Validators.required]),
      blockno:new FormControl('',[Validators.required]),
      citypin:new FormControl('',[Validators.required])
      })
  })
  ,
  gaurantorDetails: new FormGroup({
    gid:new FormControl('',[Validators.required]),
    gname:new FormControl('',[Validators.required]),
	gdob:new FormControl('',[Validators.required]),
	ggender:new FormControl('',[Validators.required]),
	gemail:new FormControl('',[Validators.required]),
	gmobile:new FormControl('',[Validators.required]),
	occupation:new FormControl('',[Validators.required]),
    panno:new FormControl('',[Validators.required]),
	relationWithStudent:new FormControl('',[Validators.required]),
  address:new FormGroup({
    id:new FormControl('',[Validators.required]),
    district:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    landmark:new FormControl('',[Validators.required]),
    blockno:new FormControl('',[Validators.required]),
    citypin:new FormControl('',[Validators.required]),
    }),
	previousloandetils:this.PreviousLoanDetails

  }),
   educationDetails: new FormGroup({
    eid:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    duration:new FormControl('',[Validators.required]),
    fees :new FormControl('',[Validators.required]),
    institutename:new FormControl('',[Validators.required]),
    college:this.College

   })
   ,
   studentbankDetails: new FormGroup({
    bankid:new FormControl('',[Validators.required]),
    bankAccNo:new FormControl('',[Validators.required]),
      accHolderName:new FormControl('',[Validators.required]),
      bankname:new FormControl('',[Validators.required]),
    bankIFSC:new FormControl('',[Validators.required]),
    branchName:new FormControl('',[Validators.required]),
   }),
   educationPrevHistory: new FormGroup({
    pcId:new FormControl('',[Validators.required]),
    previouscourse:new FormControl('',[Validators.required]),
    year:new FormControl('',[Validators.required]),
    percentage:new FormControl('',[Validators.required]),
    institute:new FormControl('',[Validators.required]),
   })
})
}

//documents = new FormGroup({
  // aadhar:new FormControl('',[Validators.required]),

  // pan:new FormControl('',[Validators.required]),
  
  // casteCert:new FormControl('',[Validators.required]),
  
  // incomeCert:new FormControl('',[Validators.required]),
  
  // bankStatement:new FormControl('',[Validators.required]),
  
  // admissionCert:new FormControl('',[Validators.required]),
  
  // feeStruct:new FormControl('',[Validators.required]),
//});

// address=new FormGroup({
//   id:new FormControl('',[Validators.required]),
//   district:new FormControl('',[Validators.required]),
//   state:new FormControl('',[Validators.required]),
//   city:new FormControl('',[Validators.required]),
//   landmark:new FormControl('',[Validators.required]),
//   blockno:new FormControl('',[Validators.required]),
//   });

  CIBIL=new FormGroup({
    cibilId:new FormControl('',[Validators.required]),
    pancard:new FormControl('',[Validators.required]),
  });

  PreviousLoanDetails=new FormGroup({
    pldid: new FormControl('',[Validators.required]),
    previousLoanAmount:new FormControl('',[Validators.required]),
    previousLoanTenure:new FormControl('',[Validators.required]),
    previousLoanpaidAmount:new FormControl('',[Validators.required]),
    previousLoanremainingAmount:new FormControl('',[Validators.required]),
    previousLoanStatus:new FormControl('',[Validators.required]),
    previousLoanRemark:new FormControl('',[Validators.required]),
    bankdetails:this.bankdetails

  });
  aadhar:any
  reder= new FileReader();
  imageSrc1:any
  onSelectfile1(e:any){
this.aadhar=e.target.files[0];
const file=e.target.files[0];
this.reder.onload=a=>this.imageSrc1=this.reder.result;
this.reder.readAsDataURL(file);
  }

  pan:any
  imageSrc2:any

   onSelectfile2(e:any){
this.pan=e.target.files[0];
const file=e.target.files[0];
this.reder.onload=a=>this.imageSrc2=this.reder.result;
this.reder.readAsDataURL(file);
  }

  casteCert:any
  imageSrc3:any
  onSelectfile3(e:any){
    this.casteCert=e.target.files[0];
    const file=e.target.files[0];
    this.reder.onload=a=>this.imageSrc3=this.reder.result;
    this.reder.readAsDataURL(file);
      } 
      incomeCert:any
      imageSrc4:any
      onSelectfile4(e:any){
        this.incomeCert=e.target.files[0];
        const file=e.target.files[0];
        this.reder.onload=a=>this.imageSrc4=this.reder.result;
        this.reder.readAsDataURL(file);
          } 
          bankStatement:any
          imageSrc5:any
      onSelectfile5(e:any){
        this.bankStatement=e.target.files[0];
        const file=e.target.files[0];
        this.reder.onload=a=>this.imageSrc5=this.reder.result;
        this.reder.readAsDataURL(file);
          } 

          admissionCert:any
          imageSrc6:any
      onSelectfile6(e:any){
        this.admissionCert=e.target.files[0];
        const file=e.target.files[0];
        this.reder.onload=a=>this.imageSrc6=this.reder.result;
        this.reder.readAsDataURL(file);
          } 

          feeStruct:any
          imageSrc7:any
          onSelectfile7(e:any){
            this.feeStruct=e.target.files[0];
            const file=e.target.files[0];
            this.reder.onload=a=>this.imageSrc7=this.reder.result;
            this.reder.readAsDataURL(file);
              }
  saveInfo() {
    
    console.log(this.application.value);

    console.log(this.feeStruct);
     const document1=JSON.stringify(this.application.value);

      const application1 = new FormData();
      application1.append('aadhar',this.aadhar);
      application1.append('pan',this.pan);
      application1.append('casteCert',this.casteCert);
       application1.append('incomeCert',this.incomeCert);
       application1.append('bankStatement',this.bankStatement);
       application1.append('admissionCert',this.admissionCert);
       application1.append('feeStruct',this.feeStruct);
       application1.append("doc",document1);
     // this.com.application(application1).subscribe({});

      // console.log(application1);
      this.com.application(application1).pipe(catchError(this.handleError)).subscribe(response => {
        console.log(response,"Send Mail mananger");
        alert(response) ;
        window.location.reload();
      });
    }
    
    private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      alert('An error occurred:'+ error.error)
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      alert(`Please fillup complete form ${error.status}, Fails to Submit: `+ error.error)
      console.error(
        `Please fillup complete form ${error.status}, Fails to Submit: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
    }

}
