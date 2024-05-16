import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any = [];
  total = 0;
  constructor(private cartService: CartService) {
    this.cartService.getTotal();
    this.cartService.cartTotal.subscribe(x=>{
      this.total=x;
    })
  }
  ngOnInit(): void {
    this.cart = this.cartService.cart;
    
    // this.total = this.cartService.cartTotal;
  }
  removeCartItem(id: number) {
    this.cartService.removeItem(id);
    this.cart = this.cartService.cart;
    
  }
  updateCart(op: string,item:any) {
    this.cartService.updateItem(op,item.id);
  }
}
