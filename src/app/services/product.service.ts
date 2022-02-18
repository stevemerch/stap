import { Injectable } from '@angular/core';
import { PRODUCTS, PRODUCT_SCHEMA } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: PRODUCT_SCHEMA[] = [];

  constructor() { }
  getProducts(){
    return PRODUCTS;
  }

  addToCart(product: PRODUCT_SCHEMA) {
    if (product.quantity > 0){
      this.items.push(product);
    }
    console.log(JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
