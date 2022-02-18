import { Component, OnInit, Optional, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product.service';
import { PRODUCT_SCHEMA} from '../shared/products';



@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent implements OnInit {

  id: number;
  products: PRODUCT_SCHEMA[] = [];
  product: PRODUCT_SCHEMA;


  selectedSize: string = "";


  faShop = faShoppingBag;
  faCart = faShoppingCart;

  

  constructor(
    public dialogRef: MatDialogRef<ItemModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService
  ) { this.id = data.item.id  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
    this.product = this.products[this.id];
  }

  closeDialog() {
    this.dialogRef.close();
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;


  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  addToCart(product: PRODUCT_SCHEMA) {
    this.productService.addToCart(product, this.selectedSize);
    window.alert('Your product has been added to the cart!');
  }
  buyNow(){}
}
