import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {AuthenticationPageComponent} from "./authentication-page/authentication-page.component";
import {CategoryOverviewComponent} from "./category-overview/category-overview.component";
import {ProductsListingComponent} from "./products-listing/products-listing.component";
import {ProductDescriptionComponent} from "./product-description/product-description.component";
import {ShoppingCartPageComponent} from "./shopping-cart-page/shopping-cart-page.component";

const routes: Routes = [
  {
    path:  '',
    component: HomePageComponent,
    title: "Mobilotech"
  },
  {
    path: 'authentication',
    component: AuthenticationPageComponent,
  },
  {
    path:'description',
    component:ProductDescriptionComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'categories',
    component: CategoryOverviewComponent
  },
  {
    path:'products',
    component: ProductsListingComponent
  },
  {
    path:'cart',
    component:ShoppingCartPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
export default routes;
