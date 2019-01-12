import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  instagrams: any = [
      {
      url: 'https://www.instagram.com/beleaf_design/',
      name: '#naturefriendlydesign'
    },
    {
      url: 'https://www.instagram.com/beleaf_design/',
      name: '#ecofriendlydesign'
    },
    {
      url: 'https://www.instagram.com/beleaf_design/',
      name: '#localdesign'
    },
    {
      url: 'https://www.instagram.com/beleaf_design/',
      name: '#beleafdesign'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
