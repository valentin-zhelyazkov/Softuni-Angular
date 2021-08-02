import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string;

  constructor(private afAuth: AngularFireAuth) { 
    this.username = '';
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then(res => {
      this.username = res?.email ? res.email : '';
    })
  }

}
