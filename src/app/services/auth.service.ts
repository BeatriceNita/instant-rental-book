import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated: boolean = false;

  login(username: string, password: string){
    (username === 'b98' && password === 'b98') ? this.isAuthenticated = true : this.isAuthenticated = false;

    localStorage.setItem('isAuthenticated', this.isAuthenticated ? "true" : "false");
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
  }
}
