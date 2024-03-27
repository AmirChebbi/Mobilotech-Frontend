import {Component, Input, Output} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-quickview',
  standalone: true,
  imports: [],
  templateUrl: './product-quickview.component.html',
  styleUrl: './product-quickview.component.css'
})
export class ProductQuickviewComponent {
  constructor(public productService:ProductService) {}

  isQuickViewed:boolean = this.productService.getIsQuickViewd;
}
