import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice = 0;
  discount = 0;
  cartItems: any = {};
  discountCoupon: string = '';
  order_num = 0;
  applicableCoupons = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log('Getting cart items!');
    this.refreshOrders();
    console.log(this.cartItems);
  }

  removeItem(i: number) {
    let product = this.cartItems[i];
    this.cartService.removeFromCart(product);
    // refresh the cart
    this.refreshOrders();
  }

  refreshOrders() {
    this.cartItems = this.cartService.getCart();
    let orderSummary = this.cartService.getOrderSummary();
    this.totalPrice = orderSummary['price'];
    this.cartService.getDiscountCodes().subscribe((data) => {
      this.applicableCoupons = data.map((coupon: any) => coupon.code);
    });
  }

  checkout() {
    this.cartService.checkOut(this.discountCoupon).subscribe(
      (response) => {
        console.log('Checkout successful!', response);
        // Handle successful checkout response
        alert('Checkout Successul!' + JSON.stringify(response));
        this.cartService.cleanup();
      },
      (error) => {
        console.error('Checkout failed:', error);
        alert('Checkout Unsuccessful! ' + error);
        this.cartService.cleanup();
      }
    );
  }
}
