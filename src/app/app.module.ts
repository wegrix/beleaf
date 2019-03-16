import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { SignupComponent } from './modules/authentication/signup/signup.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/home/shared/contact/contact.component';
import { FooterComponent } from './modules/home/shared/footer/footer.component';
import { HeaderComponent } from './modules/home/shared/header/header.component';
import { ModalComponent } from './modules/home/shared/modal/modal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContactService } from './modules/home/shared/contact/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import { DashboardComponent } from './modules/authentication/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './modules/authentication/shared/header/dashboard-header.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DashboardMainLinksComponent } from './modules/authentication/dashboard/dashboard-main-links/dashboard-main-links.component';
import { BlogComponent } from './modules/authentication/dashboard/blog/blog.component';
import { PublicityComponent } from './modules/authentication/dashboard/publicity/publicity.component';
import { NotificationsComponent } from './modules/authentication/dashboard/notifications/notifications.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardMainLinksComponent,
    BlogComponent,
    PublicityComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    ImageCropperModule,
  ],
  providers: [
    ContactService,
    DatePipe,
    ContactService,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: StorageBucket, useValue: 'gs://beleaf-designs.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
