import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';
import { Modal } from '../modal/modal.model';
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

    modal: Modal;

    success = false;
    edited = true;


  constructor(public _contact: ContactService) { }


  ngOnInit() {
  }

  openModal() {
    if (validator.isEmail(this.contact.email)) {
      this.success = true;
      this.modal = {
        header: 'MENSAJE ENVIADO',
        message: 'satisfactoriamente',
        footer: 'Pronto estaremos en contacto',
        image: '../../../../../assets/icons/ios-mail-open.svg',
      };
    } else {
      this.success = false;
      this.modal = {
        header: 'MENSAJE NO ENVIADO',
        message: '',
        footer: '¡Oops!',
        image: '../../../../../assets/icons/ios-close.svg',
      };
    }
  }

  emailMessage(form: any): void {
    this._contact.sendEmail(form).subscribe(() => {
      this.openModal();
      this.form.reset();
    });
  }
}
