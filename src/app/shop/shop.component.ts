import { Component, OnInit} from '@angular/core';
import { PRODUCTS, PRODUCT_SCHEMA} from '../shared/products';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { ItemModalComponent } from '../item-modal/item-modal.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})


export class ShopComponent implements OnInit {
  
  faShop = faShoppingBag;

  products: PRODUCT_SCHEMA[] = PRODUCTS; 

  constructor(
    public dialog: MatDialog
    ) { }
  
  ngOnInit(): void {
  }

  AddToCart(){}
  openModal(id:number): void {
    const dialogRef = this.dialog.open(ItemModalComponent, {
      data: {item: this.products[id]}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.products[id].quantity = result.data;
    });
  }

}
