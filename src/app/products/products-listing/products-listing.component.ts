import { Component } from '@angular/core';
import {CategoryComponent} from "../../Categor/category/category.component";
import {ProductDivisionComponent} from "../product-division/product-division.component";
import {FooterComponent} from "../../Home/footer/footer.component";
import {NgIf} from "@angular/common";
import {ProductQuickviewComponent} from "../product-quickview/product-quickview.component";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-products-listing',
  standalone: true,
    imports: [
        CategoryComponent,
        ProductDivisionComponent,
        FooterComponent,
        NgIf,
        ProductQuickviewComponent
    ],
  templateUrl: './products-listing.component.html',
  styleUrl: './products-listing.component.css'
})
export class ProductsListingComponent {
  isSideMenuVisible:boolean =false;
  isVisible:boolean =false;
  constructor(public productService: ProductService) {}
}
