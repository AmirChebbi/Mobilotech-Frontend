import {Component, inject} from '@angular/core';
import {ProductService} from "../products/product.service";

@Component({
  selector: 'app-side-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './side-wishlist.component.html',
  styleUrl: './side-wishlist.component.css'
})
export class SideWishlistComponent {

  constructor(public productService: ProductService) {
  }
}
