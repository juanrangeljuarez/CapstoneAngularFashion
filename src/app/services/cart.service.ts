import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Cart } from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl = 'http://localhost:5000/api/cart';
  constructor(private http: HttpClient) { }

  addToCart(cartRef): Observable<any>{
    return this.http.post(this.cartUrl,cartRef);
  }

}
