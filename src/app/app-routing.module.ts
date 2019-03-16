import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/authentication/auth.guard';

// Components
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './modules/authentication/signup/signup.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { DashboardComponent } from './modules/authentication/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'dashboard/user/:id', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
