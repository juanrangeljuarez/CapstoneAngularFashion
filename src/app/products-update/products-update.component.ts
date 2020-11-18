import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {
  product: Product;
  productRef = new FormGroup({
    _id: new FormControl(),
    code: new FormControl(),
    name: new FormControl(),
    details: new FormControl(),
    image: new FormControl(),
    price: new FormControl()

  });
  result: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      this.productService.getProductById(id).subscribe(data=>this.product=data);
    });
  }

  updateProduct(prodId): void{
     this.productService.updateProduct(prodId, this.productRef.value).subscribe(data=>this.result=data.msg)
  }

}
