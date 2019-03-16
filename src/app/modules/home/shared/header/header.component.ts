import { Component, OnInit } from '@angular/core';
import { Header } from './header';
import { AuthService } from '../../../authentication/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  show = false;
  dropdown = false;
  user: any;
  header: Header[] = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/',
      name: 'Tienda'
    },
    {
      url: '/',
      name: 'Novedades'
    },
    {
      url: '/',
      name: 'Blog'
    },
  ];

  constructor(
    public authentication: AuthService
  ) { }

  ngOnInit() {
  }

  showX() {
    this.show = !this.show;
  }

  signOut() {
    this.authentication.signOut();
  }
}
