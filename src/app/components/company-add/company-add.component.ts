import { Company } from './../../company';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../../service/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  constructor(private comapnyService: CompanyService, private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({
      'id': '',
      'name': '',
      'address': '',
      'contact': '',
      'email': ''});
   }

  ngOnInit() {
  }
  saveCompany(company: Company){
    if (company.id) {
      this.comapnyService.updateCompany(company);
    } else {
      this.comapnyService.createCompany(company);
    }
  }
}
