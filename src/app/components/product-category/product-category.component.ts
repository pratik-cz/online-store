import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  catName: any;
  products: any;
  constructor(private cs: CategoryService, private route: ActivatedRoute,private cartService:CartService) {
   
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      this.catName = param.get('catName');
      this.cs.getProductCategory(this.catName).subscribe(res => {
        this.products = res
      })
    })
 
  }
  addToCart(item:any){
    this.cartService.addItem(item);
  }
}
