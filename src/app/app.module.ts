import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    CompanyAddComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
