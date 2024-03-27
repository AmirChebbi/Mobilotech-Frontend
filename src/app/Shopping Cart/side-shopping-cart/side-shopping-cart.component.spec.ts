import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideShoppingCartComponent } from './side-shopping-cart.component';

describe('SideShoppingCartComponent', () => {
  let component: SideShoppingCartComponent;
  let fixture: ComponentFixture<SideShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideShoppingCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
