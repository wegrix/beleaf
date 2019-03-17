import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/authentication/auth.guard';

// Components
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './modules/authentication/signup/signup.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { DashboardComponent } from './modules/authentication/dashboard/dashboard.component';
import { MetaGuard } from 'ng2-meta';



const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full', canActivate: [MetaGuard], data: {
      meta: {
        title: 'Beleaf - Diseño y Talento Local',
        description: 'Beleafdesign is a startup company based in Colombia'
          + ' that wants to inspire designers to create more work and be able to profit from it.',
        'og:image': 'https://beleaf.herokuapp.com/assets/images/home/banner/design.png',
      }
    }
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [MetaGuard], data: {
      meta: {
        title: 'Beleaf - Accede a tu cuenta',
        description: 'Accede a tu cuenta utilizando Google o Facebook',
        ogUrl: 'https://beleaf.herokuapp.com/login',
        'og:image': 'https://beleaf.herokuapp.com/assets/images/home/banner/design.png',
      }
    }
  },
  {
    path: 'signup', component: SignupComponent, pathMatch: 'full', data: {
      meta: {
        title: 'Beleaf - Crea una cuenta ahora',
        description: 'Crea una cuenta donde puedas vender o comprar productos.',
        ogUrl: 'https://beleaf.herokuapp.com/signup',
        'og:image': 'https://beleaf.herokuapp.com/assets/images/home/banner/design.png',
      }
    }
  },
  { path: 'dashboard/user/:id', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
