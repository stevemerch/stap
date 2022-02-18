import { Component, OnInit, Optional, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent implements OnInit {


  qty: number;
  images: Array<string>;
  sizes: Array<string>;
  displayedName: string;
  selectedValue: any;
  price: number;
  rating: number;

  faShop = faShoppingBag;
  faCart = faShoppingCart;

  

  constructor(
    public dialogRef: MatDialogRef<ItemModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.qty = data.item.quantity;
    this.images = data.item.images;
    this.sizes = data.item.sizes;
    this.price = data.item.price;
    this.displayedName = data.item.displayedName;
    this.rating = this.data.rating;
   }

  ngOnInit(): void {
    this.dialogRef.beforeClosed().subscribe(() => this.closeDialog());
  }
  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.qty });
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
  AddToCart(){}
  BuyNow(){}
}
