import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupName, FormControl } from '@angular/forms';
@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.scss']
})
export class NewApplicationComponent implements OnInit {
  title = 'StepperForm';
  application:any;

  CregForm: any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
this.application=new FormGroup({
  applicationId:new FormControl('',[Validators.required]),
  enquiryDetails:new FormGroup({


  }),
  gaurantor: new FormGroup({


  }),
  education: new FormGroup({


  })
  ,
  studentbankDetails: new FormGroup({

  }),

  document : new FormGroup({

  }),
  educationalPrevHistory: new FormGroup({

  })
})





,
    this.CregForm = this.fb.group({
      customerId: ['', [Validators.required]],
      customerName: ['', [Validators.required]],
      customerDateOfBirth: ['', [Validators.required]],
  
      address: this.fb.group({
        permanentAddressId: [],
        areaname: [],
        cityname: [],
      }),

      profession: this.fb.group({
        professionId: [],
        professionType: [],
        professionSalary: [],

      })
    })
  }

  saveInfo() {

    console.log(this.CregForm.value);

  }
}
