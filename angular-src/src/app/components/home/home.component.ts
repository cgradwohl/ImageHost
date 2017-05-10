import { Component, OnInit } from '@angular/core';

import { GoogleAuthService } from '../../services/google-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private googleAuth: GoogleAuthService
  ) { }

  login() {
    this.googleAuth.login();
  }

  ngOnInit() {
  }

}
