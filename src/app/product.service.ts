import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  private _isQuickViewd: boolean = false;

  private _isAuthenticated:boolean =false;

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  constructor() { }

  get getIsQuickViewd(): boolean {
    return this._isQuickViewd;
  }

  setIsQuickViewd(value: boolean) {
    this._isQuickViewd = value;
  }


  private _sideShoppingCart:boolean=false;

  setSideShoppingCart(value: boolean) {
    this._sideShoppingCart=value;
  }
  get sideShoppingCart(): boolean {
    return this._sideShoppingCart;
  }

  private _sideWishList:boolean=false


  get sideWishList(): boolean {
    return this._sideWishList;
  }

  setSideWishList(value: boolean) {
    this._sideWishList = value;
  }
}
