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
    address:this.address
  }),
  gaurantorDetails: new FormGroup({


  }),
  educationDetails: new FormGroup({


  })
  ,
  studentbankDetails: new FormGroup({

  }),

  documents : new FormGroup({

  }),
  educationPrevHistory: new FormGroup({

  })
})
}
address= new FormGroup({
  id:new FormControl('',[Validators.required]),
district:new FormControl('',[Validators.required]),
state:new FormControl('',[Validators.required]),
city:new FormControl('',[Validators.required]),
landmark:new FormControl('',[Validators.required]),
blockno:new FormControl('',[Validators.required]),
})

  saveInfo() {

    console.log(this.application.value);

  }
}
