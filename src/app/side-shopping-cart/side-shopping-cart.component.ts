import { Component } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-side-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './side-shopping-cart.component.html',
  styleUrl: './side-shopping-cart.component.css'
})
export class SideShoppingCartComponent {

  constructor(public productService:ProductService) {
  }
}
