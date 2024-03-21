import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _isQuickViewd: boolean = false;

  private _isAuthenticated:boolean =true;

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

}
