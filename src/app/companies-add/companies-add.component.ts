import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-companies-add',
  templateUrl: './companies-add.component.html',
  styleUrls: ['./companies-add.component.css']
})
export class CompaniesAddComponent implements OnInit {
  companyRef = new FormGroup({
    _id: new FormControl(),
    name: new FormControl()
  });
  company: Company;
  result: string;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  storeCompanyDetails(): void{
      this.companyService.addCompany(this.companyRef.value).subscribe(data=>this.result=data.msg)
  }

}
