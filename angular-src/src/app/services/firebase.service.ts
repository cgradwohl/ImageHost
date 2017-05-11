import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  // CLASS PROPERTIES
  images: FirebaseListObservable<any[]>;
  image: FirebaseObjectObservable<any[]>;
  folder: any;

  // CONSTRUCTOR()
  constructor(
    private db: AngularFireDatabase) {
    this.images = this.db.list('/images') as FirebaseListObservable<Image[]>;
    this.folder = 'postedImages';
  }


  // CLASS METHODS
  getImages() {
    return this.images;
  }



  getImageInfo(id) {
    this.image = this.db.object('/images/' + id) as FirebaseObjectObservable<Image>;
    return this.image;
  }



  addImage(image) {

    this.images = this.db.list('/images') as FirebaseListObservable<Image[]>;

    // create root reference
    let storageRef = firebase.storage().ref();

    for ( let selectedFile of [(<HTMLInputElement>document.getElementById('imageField')).files[0]]) {
      let path = `/${this.folder}/${selectedFile.name}`;

      let iRef = storageRef.child(path);

      iRef.put(selectedFile).then((snapshot) => {
        image.image = selectedFile.name;
        image.path = path;
        console.log(image);
        return this.images.push(image);
      });
    }
  }



  updateImageInfo(id, image) {
    return this.images.update(id, image);
  }



  deleteImage(id) {
    return this.images.remove(id);
  }

}

interface Image {
  $key?: string;
  image?: string;
  author?: string;
  path?: string;
  title?: string;
}
