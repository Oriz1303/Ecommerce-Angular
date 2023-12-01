import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    StartRatingComponent,
    CartItemsComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StartRatingComponent,
    CartItemsComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ],
})
export class SharedModule {}
