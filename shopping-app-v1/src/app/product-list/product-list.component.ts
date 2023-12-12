import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  responseData: any;
  constructor(
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    console.log('Inside oninit');
    this.productsService.getData().subscribe((data) => {
      // Assign the fetched data to the responseData variable
      this.products = data;
      // debug logs
      console.log(this.products);

      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i]['product_id'] in this.cartService.cart) {
          this.products[i]['is_in_cart'] = true;
        } else {
          this.products[i]['is_in_cart'] = false;
        }
      }
    });
  }

  addToCart(product: any) {
    // cartService is another service that handles cart operations
    this.cartService.addToCart(product);
    product['is_in_cart'] = true;
    console.log('Added to cart:', product);
  }

  removeFromCart(product: any) {
    // cartService is another service that handles cart operations
    this.cartService.removeFromCart(product);
    product['is_in_cart'] = false;
    console.log('Removed from cart:', product);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
