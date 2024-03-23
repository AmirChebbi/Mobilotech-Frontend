import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css'
})
export class ShoppingCartPageComponent {
  items = [1,2,3,4,5]
}
