import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  standalone: true,
  imports: [CommonModule /*, other imports */, ProductDetailsComponent, RouterLink, RouterLinkActive]
})
export class CatalogComponent {

  products : IProduct[] = [];
  filter: string = '';
  cart : IProduct[] = [];
  //Another way to Inject the Service
  //private cartService: CartService= inject(CartService);

  constructor(private cartService: CartService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngOnInit() {
    // this.productService.getProducts().subscribe(products => {
    //   this.products = products;
    // });
    //this.route.snapshot.params['filter'] ? this.filter = this.route.snapshot.params['filter'] : this.filter = '';
    this.route.queryParams.subscribe(params => {
      this.filter = params['filter'] || '';
    });
  }

  // getFilteredProducts(){
  //   return this.filter === ''?this.products : this.products.filter((product: { category: string; }) => product?.category===this.filter);
  // }
     getFilteredProducts(): IProduct[] {
    if (!this.products.length) {          // still loading
      return [];
    }
    if (!this.filter) {                   // no filter, return all
      return this.products;
    }
    return this.products.filter(
      prod => prod.category === this.filter
    );
  }
 addToCart(product: IProduct) {
    this.cartService.add(product);
    this.router.navigate(['/cart']);
  }

 

 
}
