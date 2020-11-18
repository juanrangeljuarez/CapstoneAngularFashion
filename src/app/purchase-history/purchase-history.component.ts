import { Component, OnInit } from '@angular/core';
import { Checkout } from "../models/checkout";
import { CheckoutService } from './../services/checkout.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  checkouts: Checkout[];
  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getPurchaseHistory().subscribe(result => {
      this.checkouts = result;
    });
  }


}
