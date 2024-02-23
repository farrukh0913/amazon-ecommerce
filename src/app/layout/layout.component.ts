import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, HostListener } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
@Component({
  selector: "app-layout",
  standalone: true,
  imports: [MatIconModule],
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
  email: string = "info@grafixdesirez.com";
  selectedItem:string = 'Home'
  scrollDirection: 'show' | 'hide' = 'show';
  layout: any = [
    {
      label: "Home",
    },
    {
      label: " Contact Us ",
    },
    {
      label: "About Us",
    },
    {
      label: "What We Do",
    },
  ];
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
  slectedValue(value:string){
this.selectedItem = value
  }
}
