import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs";
import * as firebase from 'firebase/app';

@Injectable()
export class SignInService {
  user: Observable<firebase.User>;

  constructor(private af: AngularFireDatabase, private auth: AngularFireAuth) {
    this.user = auth.authState;
  }

  getAllItems() {
    // return this.af.list('/users');
  }

  createNewUser(email, pass) {
    this.auth.auth.createUserWithEmailAndPassword(email, pass)
  }

  loginUser(email, pass) {
    this.auth.auth.signInWithEmailAndPassword(email, pass);
  }

  logoutUser() {
    this.auth.auth.signOut();
  }
}