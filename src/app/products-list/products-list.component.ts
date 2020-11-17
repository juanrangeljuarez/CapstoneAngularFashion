import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from './../services/product.service';
import { Product } from './../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  result: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>this.products=data);
  }

  loadProductsList(): void{
    this.productService.getProducts().subscribe(data=>this.products=data);
  }

  deleteProduct(prodId){
     this.productService.deleteProductById(prodId).subscribe(data=>this.result=data.msg);
  }

}
