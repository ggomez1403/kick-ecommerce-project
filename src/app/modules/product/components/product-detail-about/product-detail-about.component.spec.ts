import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailAboutComponent } from './product-detail-about.component';

describe('ProductDetailAboutComponent', () => {
  let component: ProductDetailAboutComponent;
  let fixture: ComponentFixture<ProductDetailAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
