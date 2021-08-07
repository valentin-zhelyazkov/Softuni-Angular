import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string;
  counter: number;

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {
    this.username = '';
    this.counter = 0;
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then(res => {
      this.username = res?.email ? res.email : '';
    })
  }

  deleteUser(): void {
    this.afAuth.currentUser.then(res => {
      res?.delete();
      this.authService.logout();
      this.router.navigate(['/']);
    })
  }

}
