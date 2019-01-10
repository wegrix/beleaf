import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  show = true;

  constructor() { }

  ngOnInit() {
  }

  showX() {
    this.show = !this.show;
  }

}
