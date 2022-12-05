import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vendordetails } from './vendordetails';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  vendorObs = new Subject<Vendordetails>();
  vd?:Vendordetails;
  setVendor(vendor:Vendordetails){
     this.vd=vendor;
     this.vendorObs.next(vendor);
  }
}
