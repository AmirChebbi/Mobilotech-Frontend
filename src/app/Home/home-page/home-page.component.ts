import { Component } from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {SlideComponent} from "../slide/slide.component";
import {CategoryComponent} from "../../Categor/category/category.component";
import {elementAt} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FooterComponent} from "../footer/footer.component";
import {ProductService} from "../../products/product.service";
import {NgIf} from "@angular/common";
import {ProductQuickviewComponent} from "../../products/product-quickview/product-quickview.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet, SlideComponent, CategoryComponent, FooterComponent, NgIf, ProductQuickviewComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0%), opacity(0)'
      })),
      state('out', style({
        transform: 'translateX(100%), opacity(100%)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]})

export class HomePageComponent {

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entriy) => {
      if (entriy.isIntersecting) {
        entriy.target.classList.add('category-l2');
      } else {
        entriy.target.classList.remove('category-l2');
      }
    });
  });

  isVisible :boolean = false;
  categoryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entriy) => {
      if (entriy.isIntersecting) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    });
  });
  hiddenCategory:any = document.getElementsByClassName('category-l2');

  hiddenElements:any = document.querySelectorAll('.hidden').forEach((element) => this.observer.observe(element))

  constructor(public productService : ProductService) {}



}
