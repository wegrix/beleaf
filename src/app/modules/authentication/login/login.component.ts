import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { SeoService } from 'src/app/seo.service';


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

  constructor(public auth: AuthService, private _SEO: SeoService) { }

  ngOnInit() {
    this.user.email = localStorage.getItem('user.email');
    this.user.password = localStorage.getItem('user.password');
    this._SEO.generateTags({
      title: 'Beleaf - Login',
      description: 'Accede a tu cuenta utilizando Google o Facebook',
      image: "https://beleaf.herokuapp.com/assets/images/home/banner/design.png",
      slug: 'login'
    })
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
