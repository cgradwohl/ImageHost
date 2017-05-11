import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  id: any;
  image: any;
  imageURL: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // GET IMAGE ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getImageInfo(this.id).subscribe( image => {
      this.image = image;


      // Strorage Referenece
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.image.path);

      storageRef.child(this.image.path).getDownloadURL().then((url) => {
        this.imageURL = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }

}
