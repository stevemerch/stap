import { Component, OnInit} from '@angular/core';
import { PRODUCT_SCHEMA} from '../shared/products';
import { ProductService } from '../services/product.service';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { ItemModalComponent } from '../item-modal/item-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})


export class ShopComponent implements OnInit {

  products: PRODUCT_SCHEMA[] = [];
  
  faShop = faShoppingBag;

  constructor(
    public dialog: MatDialog, 
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: PRODUCT_SCHEMA) {
    this.productService.addToCart(product);
    this.products[product.id].added = true;
    window.alert('Your product has been added to the cart!');
  }

  openModal(id:number): void {
    const dialogRef = this.dialog.open(ItemModalComponent, {
      data: {item: this.products[id]}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.products[id].quantity = result.data;
    });
  }

}
