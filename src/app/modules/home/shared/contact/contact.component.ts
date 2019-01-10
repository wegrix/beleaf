import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  // Form Variables

  name: string;
  email: string;
  subject: string;
  message: string;

  // Utils for modal
  edited = false;
  success = false;

  constructor() { }

  ngOnInit() {
  }

}
