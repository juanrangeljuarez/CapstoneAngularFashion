import { Component, OnInit } from '@angular/core';

import { ProductService } from './../services/product.service';
import { Product } from './../models/product';

@Component({
  selector: 'app-product-customer',
  templateUrl: './product-customer.component.html',
  styleUrls: ['./product-customer.component.css']
})
export class ProductCustomerComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>this.products=data);
  }

}
