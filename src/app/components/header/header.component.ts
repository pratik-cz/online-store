import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated$: any;
  cartItemCount:number=0
  categories:any=[]
  constructor(private tokenService: TokenService, private route: Router,private cartService:CartService,private cs:CategoryService) {
    this.isAuthenticated$ = this.tokenService.isAuthentication;
    this.cartService.cartCount.subscribe(x=>{
      this.cartItemCount=x;
    })
  }

  onLogout() {
    this.tokenService.removeToken();
    this.route.navigate([''])
  }

  ngOnInit(): void {
    this.cs.getCategories().subscribe(res=>{
      this.categories=res;
    })
  }

}
