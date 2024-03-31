import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductPageComponent, ListingPageComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
