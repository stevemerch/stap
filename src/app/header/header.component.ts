import { Component, OnInit } from '@angular/core';
import { faHome, faInfo, faShoppingBag, faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faHome = faHome;
  faInfo = faInfo;
  faShop = faShoppingBag;
  faAddress = faAddressCard;
}
