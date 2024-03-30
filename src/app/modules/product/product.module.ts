import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductDetailAboutComponent } from './components/product-detail-about/product-detail-about.component';
import { ProductDetailGalleryComponent } from './components/product-detail-gallery/product-detail-gallery.component';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductPageComponent,
    ListingPageComponent,
    ProductDetailGalleryComponent,
    ProductDetailAboutComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
