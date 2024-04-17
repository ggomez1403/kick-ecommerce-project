import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductRoutingModule } from './product-routing.module';
import { NewDropsPageComponent } from './pages/new-drops-page/new-drops-page.component';

@NgModule({
  declarations: [ProductPageComponent, ListingPageComponent, NewDropsPageComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
