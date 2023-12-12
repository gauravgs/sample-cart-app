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
    console.warn(this.cart);
  }

  getCart() {
    let cartItems = Object.entries(this.cart).map(([key, value]) => {
      return {
        product_id: key,
        ...this.cart[key],
      };
    });
    console.log(cartItems);
    return cartItems;
  }

  getOrderSummary() {
    let price = 0;
    console.log('DATA');

    for (var item in this.cart) {
      price += this.cart[item]['price'];
    }

    console.log(price);
    return {
      price: price,
    };
  }

  checkOut() {
    console.log(this.cart);
  }
}
