import { Injectable } from '@angular/core';
import { User } from './user.model';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

// RXJS
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UpdateProfileService {
  user: Observable<User>;
  info: any;
  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
  }

  getUser() {
    const doc = this.afStore.doc<User>(`users/${this.afAuth.auth.currentUser.uid}`);
    return doc.get();
  }

  updateUser(user: any, data: any) {
    const doc = this.afStore.doc<User>(`users/${user.uid}`);
    doc.update({ data });
  }

}
