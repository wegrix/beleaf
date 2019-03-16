import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    uid: '',
    email: '',
    password: ''
  };

  rememberUser = true;

  userError: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.user.email = localStorage.getItem('user.email');
    this.user.password = localStorage.getItem('user.password');
  }

  signIn() {
    this.auth.customSignIn(this.user.email, this.user.password).catch(e => {
      this.userError = e;
    });
  }

  googleSignIn() {
    this.auth.googleSignin('Subscriber');
  }

  facebookSignIn() {
    this.auth.facebookSignin('Subscriber');
  }

  passwordReset() {
    this.auth.passwordReset(this.user.email);
  }

  saveLogin() {
    if (this.rememberUser) {
      localStorage.setItem('user.email', this.user.email);
      localStorage.setItem('user.password', this.user.password);
    } else {
      localStorage.clear();
      this.user.email = '';
      this.user.password = '';
    }
  }

  deleteLogin() {
    localStorage.clear();
  }

}
