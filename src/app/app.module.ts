import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { AuthModule } from './modules/auth/auth.module';
import { CartModule } from './modules/cart/cart.module';
import { HomeModule } from './modules/home/home.module';
import { MyPurchasesModule } from './modules/my-purchases/my-purchases.module';
import { ProductModule } from './modules/product/product.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AuthModule,
    ProductModule,
    CartModule,
    AboutUsModule,
    HttpClientModule,
    MyPurchasesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
