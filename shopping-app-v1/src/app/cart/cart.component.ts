import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice = 0;
  discount = 0;
  cartItems: any[] = [];

  removeItem(i: number) {}

  ngOnInit() {
    this.cartItems = [
      {
        name: 'iPhone 15',
        originalPrice: 600,
        description: 'This is a new iPhone.',
      },
      {
        name: 'iPhone 14',
        originalPrice: 500,
        description: 'This is an old iPhone.',
      },
      {
        name: 'iPhone 15',
        originalPrice: 600,
        description: 'This is a new iPhone.',
      },
      {
        name: 'iPhone 14',
        originalPrice: 500,
        description: 'This is an old iPhone.',
      },
      {
        name: 'iPhone 15',
        originalPrice: 600,
        description: 'This is a new iPhone.',
      },
      {
        name: 'iPhone 14',
        originalPrice: 500,
        description: 'This is an old iPhone.',
      },
    ];
  }
}
