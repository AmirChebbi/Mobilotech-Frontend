import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDivisionComponent } from './product-division.component';

describe('ProductDivisionComponent', () => {
  let component: ProductDivisionComponent;
  let fixture: ComponentFixture<ProductDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDivisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
