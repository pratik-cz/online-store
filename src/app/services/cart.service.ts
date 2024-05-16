import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = [];
  cartCount: BehaviorSubject<number> = new BehaviorSubject(0)
  cartTotal: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private loader:LoaderService) {
    this.cart = this.jsonParse(localStorage.getItem('cart')) || [];
    this.itemCount()
  }
  addItem(item: any) {
    if (this.checkItemExist(item) === -1) {
      this.cart.push({ ...item, count: 1 });
      this.saveItem();
    } else {
      this.cart.forEach((element: any) => {
        if (element.id === item.id) {
          element.count += 1;
          this.saveItem();
        }
      });
    }
  }
  saveItem() {
    this.loader.loader.next(true)
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.itemCount()
    this.getTotal();
    setTimeout(()=>{this.loader.loader.next(false)},1000)
  }
  removeItem(id: any) {
    this.cart = this.cart.filter((x: any) => x.id != id)
    this.saveItem();
  }
  updateItem(operation: string, id: string) {
    if (operation == '+') {
      this.cart.forEach((x: any) => { if (x.id == id) { x.count += 1 } })
    } else if (operation == '-') {
      this.cart.forEach((x: any) => { if (x.id == id) { x.count -= 1 } })
    }
    this.saveItem();
  }
  removeAll() { }
  checkItemExist(item: any) {
    return this.cart.findIndex((x: any) => x.id === item.id);
  }
  itemCount() {
    this.cartCount.next(this.cart.reduce((total: any, obj: any) => { return total + +obj.count }, 0));
  }
  getTotal() {
    this.cartTotal.next(this.cart.reduce((total: any, obj: any) => { return total + +(obj.price * obj.count) }, 0))
  }
  jsonParse(item: any) { return JSON.parse(item) }

}
