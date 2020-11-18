import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Company } from './../models/company';
import { CompanyService } from './../services/company.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: Product;
  company: Company;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      this.productService.getProductById(id).subscribe(data=>this.product=data);
      
      
      
    
    });
    // var millisecondsToWait = 5000;
    // setTimeout(function() {
    //   var companyId = this.product[0].company;
    // //  companyId = companyId.replace('$','');
    //   console.log("CompanyId"+companyId);
    // }, millisecondsToWait);
    // // var companyId = this.product[0].company;
    // console.log("CompanyID");
  }

  getCompany(): void{
      var companyId = this.product[0].company;
      this.companyService.getCompanyById(companyId).subscribe(data=>this.company=data);
  }
  getCompanyName(): string{
    return this.company?.name;

  }


}
