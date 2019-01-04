import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company';
import { CompanyService } from 'src/app/service/company.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

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
    }
  }

}
