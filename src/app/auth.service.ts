import { Injectable, Inject } from '@angular/core';
import { IUser } from './core/userInterface';
import { LocalStorage } from './core/injection-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | undefined;

  get isLogged(): boolean { 
    return !!this.user
  };

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) {
    try {
      const localStorageUser = this.localStorage.getItem('email') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }
   }

  login(email: string, password: string): void {
    this.user = {
      email
    };

    this.localStorage.setItem('email', email);
  }

  logout(): void {
    this.user = undefined;
    this.localStorage.removeItem('email');
  }

}
