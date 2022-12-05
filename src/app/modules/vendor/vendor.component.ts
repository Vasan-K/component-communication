import { Component, OnInit } from '@angular/core';
import { Vendordetails } from 'src/app/vendordetails';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  public ivendor : Vendordetails = {} as Vendordetails;

  constructor() { }

  vendorlist : Vendordetails[]=[
    {name:"James", age:21 ,city:"Mumbai"},
    {name:"Anuv", age:25 ,city:"Pune"},
    {name:"Prateek", age:23 ,city:"Chennai"},
    {name:"Nayank", age:27 ,city:"Hyderabad"},
];
  ngOnInit(): void {
  }

}
