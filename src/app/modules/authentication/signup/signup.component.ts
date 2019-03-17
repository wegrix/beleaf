import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { SeoService } from 'src/app/seo.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = {
    uid: '',
    email: '',
    role: '',
  };

  userError: any;

  /*roles = [
    { name: 'Developer', code: 'Dev' },
    { name: 'Designer', code: 'Des' },
    { name: 'Animation', code: 'Anim' }
  ];*/

  show = false;

  constructor(public auth: AuthService, private _SEO: SeoService) {
  }

  ngOnInit() {
  }

  signUp() {
    if (this.user.password === this.user.confirmPassword) {
      this.auth.customSignup(this.user.email, this.user.password, this.user.displayName, this.user.role)
        .catch(e => {
          this.userError = e;
        });
    }
  }

  googleSignUp() {
    this.auth.googleSignin();
  }

  facebookSignUp() {
    this.auth.facebookSignin();
  }

}
