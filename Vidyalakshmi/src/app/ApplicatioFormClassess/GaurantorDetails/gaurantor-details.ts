import { Address } from "../Address/address";
import { PreviousLoanDetails } from "../PreviousLoanDetails/previous-loan-details";

export class GaurantorDetails {
    gid:number;
    gname:string;
	gdob:string;
	ggender:string;
	gemail:string;
	gmobile:number;
	occupation:string;
    panno:string;
	relationWithStudent:string;
    address:Address ;
    previousloandetils:PreviousLoanDetails;
}


