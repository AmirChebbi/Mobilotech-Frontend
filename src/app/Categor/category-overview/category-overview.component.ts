import { Component } from '@angular/core';
import {CategoryComponent} from "../category/category.component";

@Component({
  selector: 'app-category-overview',
  standalone: true,
    imports: [
        CategoryComponent
    ],
  templateUrl: './category-overview.component.html',
  styleUrl: './category-overview.component.css'
})
export class CategoryOverviewComponent {

}
