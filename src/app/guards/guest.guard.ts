import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(private tokenService:TokenService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const tokenService = inject(TokenService);
    // const router = inject(Router);
    this.tokenService.isAuthentication.subscribe(val => {
      if (val) {
        this.router.navigate(['dashboard']);
      }
    })
    return true;
  }

}
