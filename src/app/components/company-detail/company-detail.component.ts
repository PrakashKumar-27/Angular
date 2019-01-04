import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  constructor(private comapnyService: CompanyService, private _formBuilder: FormBuilder) {
  }
    ngOnInit() {
  }
  getCompany(id: number){
    if (id) {
      this.comapnyService.getCompany(id);
    }
  }

}
