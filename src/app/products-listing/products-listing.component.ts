import { Component } from '@angular/core';
import {CategoryComponent} from "../category/category.component";
import {ProductDivisionComponent} from "../product-division/product-division.component";

@Component({
  selector: 'app-products-listing',
  standalone: true,
  imports: [
    CategoryComponent,
    ProductDivisionComponent
  ],
  templateUrl: './products-listing.component.html',
  styleUrl: './products-listing.component.css'
})
export class ProductsListingComponent {

}
