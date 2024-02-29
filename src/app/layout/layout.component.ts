import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, HostListener } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from "@angular/router";
@Component({
  selector: "app-layout",
  standalone: true,
  imports: [MatIconModule, HeaderComponent, FooterComponent],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
  animations: [
    trigger('scrollAnimation', [
        state('show', style({ transform: 'translateY(0)' })),
        state('hide', style({ transform: 'translateY(-120%)' })),
        transition('show => hide', animate('500ms ease-out')),
        transition('hide => show', animate('500ms ease-in'))
    ]),
    
    
]
})
export class LayoutComponent {
  scrollDirection: 'show' | 'hide' = 'show';
  admin:any
  constructor(private router:Router){
    this.admin = JSON.parse(localStorage.getItem("admin") || '[]') ;
    console.log('this.admin: ', this.admin);
    window.scroll({
      top:0,
      left:0
    })
  }
  cardData:any=[
    {
    label  : "1"
  },
    {
    label  : "1"
  },
    {
    label  : "1"
  },
    {
    label  : "1"
  },
    {
    label  : "1"
  },
    {
    label  : "1"
  },
    {
    label  : "1"
  },
    {
    label  : "1"
  },
    {
    label  : "1"
  },
    {
    label  : "1"
  },
]
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
      // Adjust the value as needed
      this.scrollDirection = window.scrollY > 100 ? 'hide' : 'show';
  }

  productDetails(){

  }
}
