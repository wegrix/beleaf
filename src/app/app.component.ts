import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/seo.service';
import { MetaService } from 'ng2-meta';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-beleafdesign';
  constructor(private metaService: MetaService) { }
  ngOnInit() {
  }

}
