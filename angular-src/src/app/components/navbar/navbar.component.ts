import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // CLASS PROPERTIES
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    console.log('BEFORE LOGIN', this.afAuth.auth);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log('AFTER LOGIN', this.afAuth.auth);

  }

  logout() {
    console.log('BEFORE LOGOUT', this.afAuth.auth);
    this.afAuth.auth.signOut();
    console.log('AFTER LOGOUT', this.afAuth.auth);
  }


  ngOnInit() {
  }

}
