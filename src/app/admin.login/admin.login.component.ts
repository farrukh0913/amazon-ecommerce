import { Component } from '@angular/core';
import { AdminLogin } from '../model/admin';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin.login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.login.component.html',
  styleUrl: './admin.login.component.scss'
})
export class AdminLoginComponent {
  login:AdminLogin = new AdminLogin();
  constructor(private router:Router){}

  appLogin(value:any){
    localStorage.setItem("admin",value);
    this.router.navigate(['dashboard']);
  }
}
