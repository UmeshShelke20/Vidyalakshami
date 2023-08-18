import { BankDetails } from "../BankDetails/bank-details";
import { Document } from "../Document/document";
import { EducationDetails } from "../EducationDetails/education-details";
import { EducationPrevHistory } from "../EducationPrevHistory/education-prev-history";
import { EnquiryPersonalDetails } from "../EnquiryPersonalDetails/enquiry-personal-details";
import { GaurantorDetails } from "../GaurantorDetails/gaurantor-details";

export class Application {
    applicationId:number
	enquiryPersonalDetails: EnquiryPersonalDetails;
	gaurantorDetails:GaurantorDetails
	 educationDetails:EducationDetails
	 educationPrevHistory:EducationPrevHistory
	 documents:Document
	  studentbankDetails:BankDetails
}
