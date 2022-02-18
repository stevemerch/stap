import { Injectable } from '@angular/core';
import { PRODUCTS, PRODUCT_SCHEMA, ITEM } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: ITEM[] = [];

  constructor() { }
  getProducts(){
    return PRODUCTS;
  }

  addToCart(product: PRODUCT_SCHEMA, selectedsize: string) {
    const item: ITEM = new ITEM();
    item.id = product.id;
    item.name = product.name;
    item.quantity = product.quantity;
    item.size = selectedsize;
    this.items.push(item);
    
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
