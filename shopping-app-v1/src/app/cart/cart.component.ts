import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

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
  orderSuccessful: boolean = true;
  orderSummary: any;

  constructor(private cartService: CartService, private router: Router) {}

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
        this.orderSuccessful = true;
        this.orderSummary = response;
      },
      (error) => {
        console.error('Checkout failed:', error);
        if ((error['status_code'] = 400)) {
          this.orderSuccessful = false;
        }
      }
    );
  }

  cleanup() {
    if (this.orderSuccessful) {
      window.location.reload();
    }
    // else, let the user retry without/with a new coupon code
  }
}
