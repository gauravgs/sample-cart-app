import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  totalPrice = 0;
  discount = 0;
  cartItems = [];

  removeItem(i: number) {}
}
