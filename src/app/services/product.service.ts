import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from "../models/company";
import { Product } from "../models/product";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product[] = [];

  private productUrl = 'http://localhost:5000/api/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getProductById(prodId): Observable<Product>{
    return this.http.get<Product>("http://localhost:5000/api/productById/"+prodId);
  }
  find(prodId): Observable<Product> {
    return this.http.get<Product>("http://localhost:5000/api/productById/"+prodId);
  }


  addProduct(productRef): Observable<any> {
    return this.http.post(this.productUrl,productRef);
  }

  updateProduct(prodId,productRef): Observable<any>{
    return this.http.put("http://localhost:5000/api/products/updateById/"+prodId,productRef);
  }

  deleteProductById(prodId):Observable<any>{
    return this.http.delete("http://localhost:5000/api/products/deleteById/"+prodId);
    //return this.http.delete<Company>(`${this.companyUrl}/${id}`);
  }
}
