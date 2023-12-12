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
  }
}
