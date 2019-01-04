import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getCompanies(){
    return this.httpClient.get(this.SERVER_URL + 'companies');
  }

  public getCompany(CompanyId){
    return this.httpClient.get(`${this.SERVER_URL + 'companies'}/${CompanyId}`);
  }

  public createCompany(Company: {id: number, name: string, address: string, contact: string, email: string}){
    return this.httpClient.post(`${this.SERVER_URL}` + 'companies',Company)
  }

  public deleteCompany(CompanyId){
      return this.httpClient.delete(`${this.SERVER_URL + 'companies'}/${CompanyId}`)
  }
  public updateCompany(Company: {id: number, name: string, address: string, contact: string, email: string}){
      return this.httpClient.put(`${this.SERVER_URL + 'companies'}/${Company.id}`,Company)
  }
}
