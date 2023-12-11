import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  responseData: any;
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    console.log('Inside oninit');
    this.productsService.getData().subscribe((data) => {
      // Assign the fetched data to the responseData variable
      this.products = data;
      // debug logs
      console.log(this.products);
    });
  }

  addToCart(product: any) {
    // Assuming cartService is another service that handles cart operations
    // this.cartService.addToCart(product);
    console.log('Added to cart:', product);
  }
}
