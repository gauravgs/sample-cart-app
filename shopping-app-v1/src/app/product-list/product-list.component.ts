import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  ngOnInit() {
    this.products = [
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
    // this.productService.getProducts().subscribe(
    //   (data) => {
    //     this.products = data;
    //   },
    //   (error) => {
    //     console.error('Error fetching products', error);
    //   }
    // );
  }

  addToCart(product: any) {
    // Assuming cartService is another service that handles cart operations
    // this.cartService.addToCart(product);
    console.log('Added to cart:', product);
  }
}
