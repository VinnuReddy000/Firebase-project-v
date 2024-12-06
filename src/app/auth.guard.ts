import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.fireauth.authState.toPromise().then(user => {
      if (user) {
        return true; // User is authenticated
      } else {
        this.router.navigate(['/login']); // Redirect to login
        return false;
      }
    });
  }
}