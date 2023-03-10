import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }


  ngOnInit() {
  }

  openPage = function () {
		window.location.href = '../home';
	};

}

//https://auth0.com/blog/adding-auth0-to-an-ionic-angular-app-using-auth-connect/