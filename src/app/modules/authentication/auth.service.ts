import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';

// RXJS
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // User Model
  user: Observable<User>;

  // Custom user auth
  private displayName: string;
  private role: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router,
    private datePipe: DatePipe
  ) {
    // Basically we are saying that if the use exists get the user from the db and if not return nothing
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  // Give custom role on save
  defineRole(role: string): void {
    this.role = role;
  }
  // Give custom name on save
  defineName(name: string): void {
    this.displayName = name;
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard/user/' + this.afAuth.auth.currentUser.uid]);
  }

  // Sign up with email and password
  async customSignup(
    email: string,
    password: any,
    displayName: string,
    role?: string
  ) {
    this.defineName(displayName);
    this.defineRole(role);

    await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        this.storeData(credential.user);
        credential.user.updateProfile({
          displayName: this.displayName,
          photoURL: '',
        });
        this.navigateDashboard();
      });
  }

  // Sign up with google
  async googleSignin(role?: string) {
    this.defineRole(role);
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.navigateDashboard();
    return this.storeData(credential.user);
  }

  // Sign up with facebook
  async facebookSignin(role?: string) {
    this.defineRole(role);
    const provider = new auth.FacebookAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.navigateDashboard();
    return this.storeData(credential.user);
  }

  // Sign in with email and password
  async customSignIn(email: string, password: any) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.navigateDashboard();
  }

  // Get User doc by uid
  async getUser(user: any) {
    return this.afStore.doc<User>(`users/${user.uid}`);
  }

  async passwordReset(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email);
  }

  async storeData(user: any) {

    const userDoc = await this.getUser(user);

    const data: User = {
      uid: user.uid,
      displayName: user.displayName || this.displayName,
      email: user.email,
      photoURL: user.photoURL || 'https://picsum.photos/200/300/?random',
      role: user.role ? user.role : this.role,
      joinedOn: this.datePipe.transform(new Date())
    };

    return await userDoc.set(data, { merge: true });
  }


  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
