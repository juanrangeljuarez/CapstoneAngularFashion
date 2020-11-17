import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCustomerComponent } from './product-customer.component';

describe('ProductCustomerComponent', () => {
  let component: ProductCustomerComponent;
  let fixture: ComponentFixture<ProductCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
