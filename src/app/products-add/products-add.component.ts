import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from './../models/product';
import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  companies: Company[];
  productRef = new FormGroup({
    _id: new FormControl(),
    code: new FormControl(),
    name: new FormControl(),
    details: new FormControl(),
    image: new FormControl(),
    price: new FormControl(),
    company: new FormControl()
 
  });

  result: string;

  constructor(private productService: ProductService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
    })
  }

  storeProductDetails(): void{
    this.productService.addProduct(this.productRef.value).subscribe(data=>this.result=data.msg)
  }

}
