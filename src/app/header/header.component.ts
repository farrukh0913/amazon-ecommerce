import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedItem: string = 'Home'
  scrollDirection: 'show' | 'hide' = 'show';
  email: string = "info@grafixdesirez.com";
  admin: any
  layout: any = [
    {
      label: "Home",
      path: ""
    },
    {
      label: " Contact Us ",
      path: "contact"
    },
    {
      label: "About Us",
      path: "about"
    },
    {
      label: "What We Do",
      path: "whatwedo"
    },
  ];
  constructor(private router: Router) {
    this.admin = JSON.parse(localStorage.getItem("admin") || '[]')
  }
  slectedValue(value: any) {
    this.selectedItem = value.label
    this.router.navigate([`${value.path}`])
  }

  openSocial(link: any) {
    window.open(`${link}`)
  }

  adminLogin() {
    this.router.navigate(['adminLogin']);
  }

  logout() {
    this.router.navigate(['dashboard']);
    localStorage.clear();
    window.location.reload()
  }

  goToSupervisors() {
    this.router.navigate(['supervisorList']);
  }

  feedBack(){
    this.router.navigate(['feedBack']); 
  }
}
