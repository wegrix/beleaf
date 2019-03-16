import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PublicityService } from './publicity.service';
import { Notifications } from './publicity.model';

@Component({
  selector: 'app-dashboard-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.scss']
})
export class PublicityComponent implements OnInit {

  notification: Notifications;

  price: number;

  publicityAds: any;


  constructor(
    private _adNotification: PublicityService,
    private authenticated: AngularFireAuth
  ) { }

  ngOnInit() {
    this.publicityAds = [{
      tier: 'Bronce',
      week: 1,
      weeks: 2,
      months: 1,
      price: '100,000'
    },
    {
      tier: 'Plata',
      week: 1,
      weeks: 2,
      months: 1,
      price: '180,000'
    },
    {
      tier: 'Oro',
      week: 1,
      weeks: 2,
      months: 1,
      price: '300,000'
    }];
  }

  sendAdNotification(price: any): void {

    this.notification = {
      name: this.authenticated.auth.currentUser.displayName,
      email: this.authenticated.auth.currentUser.email,
      price: price
    };

    this._adNotification.sendAdNotification(this.notification).subscribe((data) =>
      console.log(data));
  }

}
