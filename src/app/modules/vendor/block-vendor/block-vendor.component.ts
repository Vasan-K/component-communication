import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Vendordetails } from 'src/app/vendordetails';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  sharedVendor!:Vendordetails 
  constructor(private shared:SharedService) { }

  
  ngOnInit(): void {
      this.shared.vendorObs.subscribe((d)=>{
        this.sharedVendor=d;
      })
  }

}
