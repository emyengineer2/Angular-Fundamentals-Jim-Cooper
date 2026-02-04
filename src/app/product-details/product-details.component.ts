import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
 @Input() product!: IProduct;
 @Output() buy = new EventEmitter<IProduct>(); 
  cart : IProduct[] = [];

 getImageUrl(product: IProduct) {
  if(!product) return '';
    return '/assets/images/robot-parts/'+ product.imageName
  }
   getDiscountedClasses(product: IProduct){
    if(product.discount > 0) return 'strikethrough';
    else return '';   
  }

buyButtonClicked(product: IProduct) {
    this.buy.emit(product);
  }
}
