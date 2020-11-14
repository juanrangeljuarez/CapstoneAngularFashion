import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from "../models/company";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // URL to web api
  private companyUrl = 'http://localhost:5000/api/companies';
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  getCompanyById(id: any): Observable<Company> {
    return this.http.get<Company>(`${this.companyUrl}/${id}`);
  }

  addCompany(companyRef): Observable<any> {
    //console.log("Company" + company);
   // return this.http.post<any>(this.companyUrl, company, httpOptions);
    return this.http.post(this.companyUrl,companyRef);
  }

  updateCompanyById(company: Company, id: any): Observable<Company> {
    return this.http.put<Company>(`${this.companyUrl}/${id}`, company, httpOptions);
  }

  deleteCompanyById(id: any): Observable<Company> {
    return this.http.delete<Company>(`${this.companyUrl}/${id}`);
  }

}