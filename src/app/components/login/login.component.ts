import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  error: any;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,private loaderService:LoaderService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.onLogin(this.loginForm.value).subscribe(
        (res) => {
          this.router.navigate(['/dashboard'])
        },
        (err) => {
          // console.log(err)
          if(err.status==404 ||  err.status==400  || err.status==405){
            this.loaderService.loader.next(false)
            console.log(err.error)
            this.error=err.error.message;
          }
          // alert("Invalid user")
        }
      )
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
