import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class GoogleAuthService {

  // CLASS PROPERTIES
  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService
  ) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return true;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show('You have successfully logged out!', {cssClass: 'alert-success'});
  }

}
