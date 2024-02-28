import { Component } from '@angular/core';
import { ContactUs } from '../model/contactus';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUSComponent {
  contactUs: ContactUs =new ContactUs();
  constructor(){}

  sendMessage(value:any){
    console.log(value);
  }
}
