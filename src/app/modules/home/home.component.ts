import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  constructor(private _SEO: SeoService) { 
    this._SEO.generateTags({
      title: 'Beleaf - Diseño y Talento Local',
      description: 'Beleafdesign is a startup company based in Colombia that wants to inspire designers to create more work and be able to profit from it.',
      image: "https://beleaf.herokuapp.com/assets/images/home/banner/design.png",
      slug: ''
    })

  }

  ngOnInit() {
  }

}
