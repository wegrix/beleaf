import {Component, OnInit, ViewChild} from '@angular/core';
import { MessageService } from './message.service';
import * as EmailValidator from 'email-validator';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }
  // Form Variables
  name: string;
  email: string;
  subject: string;
  message: string;

  success = false;
  edited = false;

  modal: any = {
    header: '',
    message: '',
    footer: '',
    image: ''
  };
  // Utils for button
  enabled = false;

  @ViewChild('form') form: NgForm;

  ngOnInit() {
  }

  // Resets Form
  formReset() {
    setTimeout(() => {
      this.form.reset();
    }, 2000);
  }

  // Changes edited value for child component
  onEditChanged(edit) {
    this.edited = edit; // We are getting the edited value from the child component
  }

  // Opens Modal
  openModal() {

    if (this.name && (typeof this.name !== 'undefined' && this.name.length >= 3)
      && EmailValidator.validate(this.email) && this.subject && this.message) {

      this.success = true;
      this.edited = true;

      this.modal = {
        header: 'MENSAJE ENVIADO',
        message: 'satisfactoriamente',
        footer: 'Pronto estaremos en contacto',
        image: '../../../../../assets/icons/ios-mail-open.svg',
      };

    } else {

      this.success = false;
      this.edited = true;

      this.modal = {
        header: 'MENSAJE NO ENVIADO',
        message: '',
        footer: '¡Oops!',
        image: '../../../../../assets/icons/ios-close.svg',
      };

    }
  }

  enableButton() {
      this.enabled = true;
  }

  disableButton() {
    this.enabled = false;
  }

  emailMessage(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      this.openModal();
      this.formReset();
      this.disableButton();
    });
  }
}
