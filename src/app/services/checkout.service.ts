import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkout } from "../models/checkout";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  c = Checkout;

  private checkouttUrl = 'http://localhost:5000/api/checkouts';
  constructor(private http: HttpClient) { }

  getPurchaseHistory(): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(this.checkouttUrl);
  }

  addCheckoout(checkoutRef): Observable<any>{
    return this.http.post(this.checkouttUrl,checkoutRef);
  }


}
