import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
