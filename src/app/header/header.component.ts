import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AdminLogin } from '../model/admin';
import { RequestService } from '../services/requestService';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('scrollAnimation', [
        state('show', style({ transform: 'translateY(0)' })),
        state('hide', style({ transform: 'translateY(-120%)' })),
        transition('show => hide', animate('500ms ease-out')),
        transition('hide => show', animate('500ms ease-in'))
    ]),
    
    
]
})
export class HeaderComponent {
  selectedItem:string = 'Home'
  scrollDirection: 'show' | 'hide' = 'show';
  email: string = "info@grafixdesirez.com";
  admin:any
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
  constructor(private router:Router){
    this.admin = localStorage.getItem("admin")
  }
  @HostListener('window:scroll', ['$event'])

  slectedValue(value:any){
    this.selectedItem = value.label
    this.router.navigate([`${value.path}`])
      }

      openSocial(link:any){
        window.open(`${link}`)
      }

      adminLogin(){
        this.router.navigate(['adminLogin']);
      }

      logout(){
        localStorage.clear();
        window.location.reload()

      }
}
