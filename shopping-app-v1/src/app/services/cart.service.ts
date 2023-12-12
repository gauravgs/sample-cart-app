import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = {};
  private totalPrice = 0;

  // order number endpoint
  private checkoutApiUrl = 'http://127.0.0.1:8000/checkout';
  private getDiscountCodesApiUrl = 'http://127.0.0.1:8000/discount_codes';

  constructor(private http: HttpClient) {}

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

    for (var item in this.cart) {
      price += parseInt(this.cart[item]['price']);
    }

    console.log(price);

    this.totalPrice = price;

    return {
      price: price,
    };
  }

  getDiscountCodes() {
    const data = this.http.get<any>(this.getDiscountCodesApiUrl);
    return data;
  }

  checkOut(discount_code: string): Observable<any> {
    // constructing the cart data model
    let payload = {
      amount: this.totalPrice,
      item_count: Object.keys(this.cart).length,
      discount_code: discount_code,
    };

    const data = this.http.post<any>(this.checkoutApiUrl, payload);
    console.log(data);
    return data;
  }


}
