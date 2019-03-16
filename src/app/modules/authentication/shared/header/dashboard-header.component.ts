import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  show = false;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  showX() {
    this.show = !this.show;
  }

}
