import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-editimage',
  templateUrl: './editimage.component.html',
  styleUrls: ['./editimage.component.css']
})
export class EditimageComponent implements OnInit {
  id: any;
  title: any;
  author: any;


  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getImageInfo(this.id).subscribe(image => {
      this.author = image['title'];
      this.author = image['author'];
    });
  }

  onEditSubmit() {
    let newImageData = {
      title: this.title,
      author: this.author
    }

    this.firebaseService.updateImageInfo(this.id, newImageData);

    this.router.navigate(['/images']);
  }


}
