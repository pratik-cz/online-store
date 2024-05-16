import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService: TokenService, private http: HttpClient) { }
  onLogin(data: any) {
    return this.http.post('http://localhost:5000/users/signin', data).pipe(
      map((response: any) => {
        if (response) {
          this.tokenService.setToken(response.token)
        }
        return response;
      })
    )
  }
  onSignup(data: any) {
    return this.http.post('http://localhost:5000/users/signup', data).pipe(
      map((response: any) => {
        if (response) {
          this.tokenService.setToken(response.token)
        }
        return response;
      })
    )
  }
}
