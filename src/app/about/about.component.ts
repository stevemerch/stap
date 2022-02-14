import { Component, OnInit } from '@angular/core';
import { ABOUT, ABOUT_SCHEMA } from '../shared/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: ABOUT_SCHEMA[] = ABOUT;

  constructor() { }

  ngOnInit(): void {
  }

}
