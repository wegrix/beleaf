import { Component, OnInit } from '@angular/core';
import { Header } from './header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  show = false;
  header: Header[];

  constructor() { }

  ngOnInit() {
    this.header = [
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
  }

  showX() {
    this.show = !this.show;
  }

}
