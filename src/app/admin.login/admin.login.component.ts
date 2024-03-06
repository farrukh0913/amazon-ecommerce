import { Component } from '@angular/core';
import { AdminLogin } from '../model/admin';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../services/requestService';

@Component({
  selector: 'app-admin.login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.login.component.html',
  styleUrl: './admin.login.component.scss'
})
export class AdminLoginComponent {
  login: AdminLogin = new AdminLogin();
  constructor(private router: Router,
    private requestService: RequestService) { }

  appLogin(value: any) {
    this.requestService.adminLogin(value).subscribe(res => {
      if (res) {
        localStorage.setItem("admin", JSON.stringify(res.data));
        this.router.navigate(['dashboard']);
      }
    }, (err) => {
      alert("Invalid email or password")
    })

  }
}
