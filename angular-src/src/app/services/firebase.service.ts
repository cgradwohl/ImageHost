import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  images: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getImages() {
    this.images = this.db.list('/images') as FirebaseListObservable<Images[]>;
    return this.images;
  }

}

interface Images{
  $key?: string;
  image?: string;
  owner?: string;
  path?: string;
  title?: string;
}
