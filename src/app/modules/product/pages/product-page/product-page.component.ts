import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Shoes } from '../../../../core/models/Shoes.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  private subscription!: Subscription;
  public singleShoe!: Shoes;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getSingleShoesInfo();
  }

  getSingleShoesInfo(): void {
    const productId = this.route.snapshot.paramMap.get('id')!;
    this.subscription = this.productService
      .getSingleShoes(productId)
      .subscribe((response) => {
        this.singleShoe = response;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
