import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any
  relatedProducts: any;
  
  constructor(private route: ActivatedRoute, private ps: ProductService,private cartService:CartService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      window.scrollTo(0, 0);
      const id = params.get('id');
      this.ps.getProduct(id).subscribe(res => {
        this.product = res
        this.ps.getRelatedProducts(this.product.category).subscribe((prod:any)=>{
          this.relatedProducts=prod.filter((x:any)=>x.id!=this.product.id);
        })
      })
    })
  }
  addToCart(item:any){
    this.cartService.addItem(item);
  }
}
