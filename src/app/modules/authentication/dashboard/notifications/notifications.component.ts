import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  publicityToolTip: Boolean;
  monthlyToolTip: Boolean;

  constructor() { }

  ngOnInit() {
  }


}
