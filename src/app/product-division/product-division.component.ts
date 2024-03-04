import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product-division',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './product-division.component.html',
  styleUrl: './product-division.component.css'
})
export class ProductDivisionComponent {
  inWishList : boolean = false;

  toWishList(){
    this.inWishList=!this.inWishList;
  }
}
