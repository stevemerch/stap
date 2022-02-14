import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent implements OnInit {

  qty: number;
  images: Array<string>;
  sizes: Array<string>;
  

  constructor(
    public dialogRef: MatDialogRef<ItemModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.qty = data.item.quantity;
    this.images = data.item.images;
    this.sizes = data.item.sizes;
   }
  ngOnInit(): void {
    this.dialogRef.beforeClosed().subscribe(() => this.dialogRef.close({ event: 'close', data: this.qty }));
  }
  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.qty });
    this.dialogRef
  }

}
