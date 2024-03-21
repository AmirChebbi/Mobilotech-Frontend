import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _isQuickViewd: boolean = false;

  constructor() { }

  get getIsQuickViewd(): boolean {
    return this._isQuickViewd;
  }

  setIsQuickViewd(value: boolean) {
    this._isQuickViewd = value;
  }

}
