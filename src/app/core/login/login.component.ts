import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
    this.firebaseErrorMessage = '';
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.firebaseErrorMessage = 'Username or password is invalid';
      return;
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then((res) => {
        if (res == null) {
           
          this.router.navigate(['/']);
        } else {
         
          this.firebaseErrorMessage = res.message;
        }
      })
  };
}
