import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckoutService } from './../services/checkout.service';
import { CartService } from './../services/cart.service';
import { AuthService } from '../auth/auth.service.js';
import { Router } from '@angular/router';


import { Item } from '../models/Item';
import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Checkout } from './../models/checkout';
//import { Cart } from './../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;
  productOriginal: Product;
  flagCart: boolean;
  flagCheckout: boolean;
  flagAtLeastOne: boolean;
  result: string;
  checkout: Checkout = new Checkout;
  checkoutRef = new FormGroup({
	  total: new FormControl(),
	  username: new FormControl()

  });

  cartRef = new FormGroup({
	  product: new FormControl(),
	  quantity: new FormControl()
  });
  

  constructor(
    private activatedRoute: ActivatedRoute,
		private productService: ProductService,
		private checoutService: CheckoutService,
		private cartService: CartService,
		private auth: AuthService
  ) { }

  ngOnInit(): void {
	this.flagCheckout = false;
	this.flagCart = false;
	this.flagAtLeastOne = false;
    this.activatedRoute.params.subscribe(params => {
		var id = params['id'];
		if(typeof id !== "undefined"){
			this.productService.getProductById(id).subscribe(data=>this.productOriginal=data);
			this.flagAtLeastOne = true;
		}
	});

    
  }

  startCart(): void{
	if(this.flagAtLeastOne || localStorage.getItem('cart')  != null){
		this.activatedRoute.params.subscribe(params => {
			this.flagCart = true;
			var id = params['id'];
			//console.log(this.productOriginal);
				if (id) {
						var item: Item = {
							product: this.productOriginal,
							quantity: 1
				};
				
				if (localStorage.getItem('cart') == null) {
							let cart: any = [];
							cart.push(JSON.stringify(item));
							localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
							cart[i] = cart[i].replace('[','');
							cart[i] = cart[i].replace(']','');
							let item: Item = JSON.parse(cart[i]);
							if (item.product?._id == id) {
									index = i;
									break;
							}
					}
					if (index == -1) {
							cart.push(JSON.stringify(item));
							localStorage.setItem('cart', JSON.stringify(cart));
					} else {
							cart[index] = cart[index].replace('[','');
							cart[index] = cart[index].replace(']','');
	
							let item: Item = JSON.parse(cart[index]);
							item.quantity += 1;
							cart[index] = JSON.stringify(item);
							localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
				} else {
						this.loadCart();
				}
			});
	}
  }

  loadCart(): void {
    this.total = 0;
		this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			cart[i] = cart[i].replace('[','');
			cart[i] = cart[i].replace(']','');
			let item = JSON.parse(cart[i]);
					this.items.push({
					product: item.product,
					quantity: item.quantity
      	});
			this.total += item.product?.price * item.quantity;
		}
  }
  
  

  remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			cart[i] = cart[i].replace('[','');
			cart[i] = cart[i].replace(']','');
			let item: Item = JSON.parse(cart[i]);
			if (item.product._id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
		
	}

	cartInfo:any;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		this.cartInfo= cart;
		this.checkoutRef.setValue({total:this.total, username: this.auth.getUsername()});
		this.checoutService.addCheckoout(this.checkoutRef.value).subscribe(data=>this.result=data.msg);	
		for (var i = 0; i < cart.length; i++) {
			console.log(cart[i]);
			let item: Item = JSON.parse(cart[i]);
			this.cartRef.setValue({product:item.product._id, quantity: item.quantity});
			this.cartService.addToCart(this.cartRef.value).subscribe(data=>this.result=data.msg);	

		}

		this.flagCheckout = true;
	}

	testCart(): void{
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			console.log(cart[i]);
			let item: Item = JSON.parse(cart[i]);

		}

	}

}
