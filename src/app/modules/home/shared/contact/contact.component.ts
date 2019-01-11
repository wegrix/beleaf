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

  // Utils for modal
  edited = false;
  success = false;

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

  // Opens Modal
  openModal() {
    this.edited = true;
    this.success = !!(this.name && (typeof this.name !== 'undefined' && this.name.length >= 3)
      && EmailValidator.validate(this.email) && this.subject && this.message);
  }
  // Closes Modal
  closeModal() {
    this.edited = false;
  }

  enableButton() {
      this.enabled = true;
  }

  emailMessage(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      this.openModal();
      this.formReset();
    });
  }
}
