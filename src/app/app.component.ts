import { CompanyService } from './service/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title : "Welcome to my Task 2"
  companies : any[]=[];
  constructor(private comapnyService: CompanyService) { }

  ngOnInit() {
    this.comapnyService.getCompanies().subscribe((data : any[])=>{
      console.log(data);
      this.companies=data;
    })
  }

}

