import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {

  // CLASS PROPERTIES
  images: FirebaseListObservable<any[]>;
  image: FirebaseObjectObservable<any[]>;


  // CONSTRUCTOR()
  constructor(
    private db: AngularFireDatabase
  ) { }


  // CLASS METHODS
  getImages() {
    this.images = this.db.list('/images') as FirebaseListObservable<Image[]>;
    return this.images;
  }

  getImageInfo(id) {
    this.image = this.db.object('/images/' + id) as FirebaseObjectObservable<Image>;
    return this.image;
  }

}

interface Image {
  $key?: string;
  image?: string;
  owner?: string;
  path?: string;
  title?: string;
}
