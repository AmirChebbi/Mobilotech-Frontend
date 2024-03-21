import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideShippingCartComponent } from './side-shipping-cart.component';

describe('SideShippingCartComponent', () => {
  let component: SideShippingCartComponent;
  let fixture: ComponentFixture<SideShippingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideShippingCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideShippingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
