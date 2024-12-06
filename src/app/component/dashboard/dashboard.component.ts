import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private auth :AuthService,private fireauth: AngularFireAuth, private router: Router){

  }

  ngOnInit(): void {
    this.fireauth.authState.subscribe(user => {
      if (!user) {
        // User is not authenticated, show the login page
        this.router.navigate(['/login']);
      }
    });      
  }

  logout(){
    this.auth.Logout();
  }
}
