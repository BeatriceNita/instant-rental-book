import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private router: Router){}

  getAuthStatus(): boolean {
    let auth: string | null = localStorage.getItem('isAuthenticated');

    if(auth === 'true') return true;

    return false;
  }

  login(username: string, password: string): Observable<any>{
    this.isAuthenticated = username === 'b98' && password === 'b98';
    localStorage.setItem('isAuthenticated', this.isAuthenticated ? 'true' : 'false');

    return of(this.isAuthenticated).pipe(
      delay(200),
      map(auth => {
          (auth) ? console.log('authentication was successful') : console.log('authentication failed')
      })
    )
  }

  logout(): Observable<any> {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    return of(this.isAuthenticated);
  }
}
