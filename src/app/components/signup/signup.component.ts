import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }
  onSubmit() {
    if (this.signupForm.valid) {
      // console.log(this.signupForm.value);
      this.authService.onSignup(this.signupForm.value).subscribe(res=>{
        this.router.navigate(['/'])
      })
    } else {
      this.signupForm.markAllAsTouched()
    }
  }
}
