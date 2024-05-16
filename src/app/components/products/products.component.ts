import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any = [];
  defaultProducts: any = [];
  cardType: 'grid' | 'list' = 'grid';
  sortType:'def'|'lth'|'htl'='def';
  constructor(private ps: ProductService,private cartService:CartService) { }
  ngOnInit(): void {
    this.ps.loadProducts().subscribe(res => {
      this.defaultProducts = res;
      this.products=[...this.defaultProducts]
    })
  }
  setCardType(val:'grid' | 'list'){
    this.cardType=val;
  }
  sortProducts(val:'def'|'lth'|'htl'){
    this.sortType=val;
   if(val==='lth'){
    this.products=this.products.sort((a:any,b:any)=>{
      return +a.price- +b.price ;
    })
   }else if(val==='htl'){
    this.products=this.products.sort((a:any,b:any)=>{
      return +b.price- +a.price ;
    })
   }else{
    this.products=[...this.defaultProducts]
   }
  }
  addToCart(item:any){
    this.cartService.addItem(item);
  }

}
