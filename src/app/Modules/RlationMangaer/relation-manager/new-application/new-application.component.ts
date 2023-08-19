import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupName, FormControl } from '@angular/forms';
import { Address } from 'app/ApplicatioFormClassess/Address/address';
@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.scss']
})
export class NewApplicationComponent implements OnInit {
  title = 'StepperForm';
  application:any;

  constructor() { }
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
  // studentbankDetails: new FormGroup({

  // }),

  // documents : new FormGroup({

  // }),
  // educationPrevHistory: new FormGroup({

  // })
})
}

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
  

  saveInfo() {
    console.log(this.application.value);
  }


}
