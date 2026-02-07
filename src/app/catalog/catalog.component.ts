import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  standalone: true,
  imports: [CommonModule /*, other imports */, ProductDetailsComponent]
})
export class CatalogComponent {

  products : any ;
  filter: string = '';
  cart : IProduct[] = [];
  //Another way to Inject the Service
  //private cartService: CartService= inject(CartService);

  constructor(private cartService: CartService, private productService: ProductService) {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

  }

  getFilteredProducts(){
    return this.filter === ''?this.products : this.products.filter((product: { category: string; }) => product?.category===this.filter);
  }
    
 addToCart(product: IProduct) {
    this.cartService.add(product);
  }

 

 
}
