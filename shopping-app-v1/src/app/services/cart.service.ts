import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = {};

  constructor() {}

  addToCart(product: any): void {
    this.cart[product['product_id']] = product;
    console.warn(this.cart);
  }

  removeFromCart(product: any): void {
    delete this.cart[product['product_id']];
  }

  checkOut() {
    console.log(this.cart);
  }
}
