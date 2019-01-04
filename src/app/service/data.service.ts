import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

 
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let companies = [
      { id:1 , name: "HCL Technologies", address : "ETA, Navalur", contact : "044 82145625", email : "office@hcl.com"},
      { id:2 , name: "Cognizant", address : "Campus, Shozhinganallur", contact : "044 82150000", email : "office@cognizant.com"}
    ];

    return {companies};
  }
}
