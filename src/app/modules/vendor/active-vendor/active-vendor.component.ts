import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
// import { Component, Input } from '@angular/core';
import { Vendordetails } from 'src/app/vendordetails';


@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private shared : SharedService) { }
  @Input() vendoractive :Vendordetails[]=[];
  @Output() public childEvent = new EventEmitter<Vendordetails>();

  selectedvendor:Vendordetails = {} as Vendordetails;
  onSelect(vendor:Vendordetails ):void {
    this.selectedvendor=vendor;
    console.log(this.selectedvendor);
    this.shared.setVendor(this.selectedvendor);
    this.childEvent.emit(this.selectedvendor);
  }
   
  ngOnInit(): void {
  }

}
