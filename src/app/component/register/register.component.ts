import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  email:string='';
  password:string='';

  constructor(private auth : AuthService){}

  ngOnInit(): void {
      
  }
  register(){

    if (this.password==''){
      alert('Please enter Email');
      return;
    }
    if (this.password==''){
      alert('Please enter Password');
      return;
    }
    this.auth.register(this.email,this.password);
    this.email='';
    this.password='';

  }


}
