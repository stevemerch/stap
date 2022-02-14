import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'; 
import {MatRadioModule} from '@angular/material/radio'; 
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';




import 'hammerjs';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FourComponent } from './four/four.component';
import { ItemModalComponent } from './item-modal/item-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    FourComponent,
    ItemModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home',  component: HomeComponent },
      { path: 'about',     component: AboutComponent },
      { path: 'shop',     component: ShopComponent },
      { path: 'contact',     component: ContactComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', pathMatch: 'full', component: FourComponent }
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
    {
      provide: MatDialogRef,
      useValue: {}
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
