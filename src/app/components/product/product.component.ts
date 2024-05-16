import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;
  @Input() cardType: 'grid' | 'list' = 'list'
  @Output('addToCartEvent') addToCartEvent=new EventEmitter<any>();
  addToCart(item:any){
     this.addToCartEvent.emit(item);
  }
}
