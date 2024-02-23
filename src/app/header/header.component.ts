import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  constructor(){}
  @HostListener('window:scroll', ['$event'])

  slectedValue(value:string){
    this.selectedItem = value
      }
}
