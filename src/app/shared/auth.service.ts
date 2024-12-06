import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private fireauth : AngularFireAuth) {}
  
  // login method

  login(email:string,password:string){
  this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
    localStorage.setItem('token','true');
    this.router.navigate(['/dashboard'])
  },err => {
    alert('Something went wrong');
    this.router.navigate(['/login']);
  })
}

  // registration method

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registation sucessful');
      this.router.navigate(['/login']);
    },err=>{
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // signout method

  Logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['login'])
    },err=>{
      alert(err.message);
    })
  }
}
