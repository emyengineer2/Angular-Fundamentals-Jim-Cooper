import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart : IProduct[] = [];
  constructor(private http: HttpClient) { }

  add(product: IProduct) {
    this.cart.push(product);
    this .http.post('/api/cart', product).subscribe({
      next: (response) => console.log('Product added to cart on server:', response),
      error: (error) => console.error('Error adding product to cart on server:', error)
    });
    console.log(`Product ${product.name} added to cart. Cart now has ${this.cart.length} items.`);
  }

}
