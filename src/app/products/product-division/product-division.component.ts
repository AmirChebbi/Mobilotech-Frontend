import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {ProductQuickviewComponent} from "../product-quickview/product-quickview.component";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-division',
  standalone: true,
  imports: [
    NgIf,
    ProductQuickviewComponent
  ],
  templateUrl: './product-division.component.html',
  styleUrl: './product-division.component.css'
})
export class ProductDivisionComponent {
  constructor(public productService: ProductService) {}

  @Input() leftPosition?: number=0;


  inWishList : boolean = false;

  toWishList(){
    this.inWishList=!this.inWishList;
  }
}
