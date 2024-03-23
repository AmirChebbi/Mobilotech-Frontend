import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideWishlistComponent } from './side-wishlist.component';

describe('SideWishlistComponent', () => {
  let component: SideWishlistComponent;
  let fixture: ComponentFixture<SideWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideWishlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
