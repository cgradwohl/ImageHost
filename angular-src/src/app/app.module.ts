// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageComponent } from './components/image/image.component';
import { AddimageComponent } from './components/addimage/addimage.component';
import { EditimageComponent } from './components/editimage/editimage.component';
import { ImagesComponent } from './components/images/images.component';

// SERVICES
import { FirebaseService } from './services/firebase.service';

// FIREBASE CONFIG
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDdMUGMDC_PtgNytNYgFpuooFo_9vQPuJg',
    authDomain: 'imagehostdb-9f725.firebaseapp.com',
    databaseURL: 'https://imagehostdb-9f725.firebaseio.com',
    projectId: 'imagehostdb-9f725',
    storageBucket: 'imagehostdb-9f725.appspot.com',
    messagingSenderId: '318473746818'
  }
};


// NG ROUTER CONFIG
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'addimage', component: AddimageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ImageComponent,
    AddimageComponent,
    EditimageComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
