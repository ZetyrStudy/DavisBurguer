import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    email: '',
    password: '',

  };

  type: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  changeType() {
    this.type = !this.type;
  }

  goToForget() {

  }

  goToHome() {

  }

  goToFacebook(){

  }

  goTotwitter(){
    
  }

  goTogoogle(){
    
  }

  touchLogin(){

  }

  faceLogin() {

  }

  goToRegister() {
    
  }

}
