import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/seo.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-beleafdesign';
  constructor(private _SEO: SeoService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
      .subscribe((event) => {
        this._SEO.updateTitle(event['title']);
        this._SEO.updateOgUrl(event['ogUrl']);
        this._SEO.updateOgUrl(event['image']);
        //Updating Description tag dynamically with title
        this._SEO.updateDescription(event['title'] + event['description'])
      });
  }

}
