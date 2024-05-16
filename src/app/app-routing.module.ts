import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuestGuard } from './guards/guest.guard';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[GuestGuard]},
  {path:'signup',component:SignupComponent,canActivate:[GuestGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'products/category/:catName',component:ProductCategoryComponent,canActivate:[AuthGuard]},
  {path:'product-detail/:id',component:ProductDetailComponent,canActivate:[AuthGuard]},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
