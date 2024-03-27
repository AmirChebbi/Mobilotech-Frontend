import {Component} from '@angular/core';
import {ProductDivisionComponent} from "../../products/product-division/product-division.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    ProductDivisionComponent,
    NgForOf
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})

export class SlideComponent {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  leftPosition = 0;
  movementInterval: number = 825.5;
  maxLeftPosition: number = -825.5;
  minMovementInterval: number = 107;

  shiftLeft() {
    if (this.movementInterval >= this.minMovementInterval) {
      this.leftPosition -= 107;
      this.movementInterval -= 107;

      if (this.leftPosition < this.maxLeftPosition) {
        this.leftPosition = this.maxLeftPosition;
        this.movementInterval = this.minMovementInterval;
      }
    }
  }

  shiftRight() {
    if (this.movementInterval <= this.minMovementInterval * (this.items.length - 1)) {
      this.leftPosition += 107;
      this.movementInterval += 107;

      if (this.leftPosition > 0) {
        this.leftPosition = 0;
        this.movementInterval = this.minMovementInterval * (this.items.length - 1);
      }
    }
  }
}

