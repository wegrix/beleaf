import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';
import { NgForm } from '@angular/forms';
import validator from 'validator';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  // Form

  @ViewChild('contactForm') form: NgForm;

  contact: Contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  success = false;
  edited = true;


  constructor(public _contact: ContactService) { }


  ngOnInit() {
  }

  openModal() {
    if (validator.isEmail(this.contact.email)) {
      this.success = true;
    } else {
      this.success = false;
    }
  }

  // Closes Modal
  closeModal() {
    this.edited = false;
  }


  emailMessage(form: any): void {
    this._contact.sendEmail(form).subscribe((data) => {
      this.openModal();
      this.form.reset();
    });
  }
}
