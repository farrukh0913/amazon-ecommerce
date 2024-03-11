import { Component } from '@angular/core';
import { ContactUs } from '../model/contactus';
import { FormsModule, NgForm } from '@angular/forms';
import { RequestService } from '../services/requestService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUSComponent {
  contactUs: ContactUs =new ContactUs();
  constructor(private requestService: RequestService,
              private router:Router ){}

  sendMessage(form:NgForm){
    if(form.valid){
    this.requestService.submitFeedback(form.value).subscribe(res =>{
      if(res){
        this.router.navigate(['dashboard']);
      }
    })
    }
  }
}
