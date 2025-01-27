import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup | any;

  isLogged = this.authService.isAuthenticated.value;

  constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController
	) {}

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]   
		});
	}
  //email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
  //password: ['cityslicka', [Validators.required, Validators.minLength(6)]]

	async login() {
		const loading = await this.loadingController.create();
		await loading.present();

    console.log("Atum1" + this.credentials.value);
		this.authService.login(this.credentials.value).subscribe(
			async (res) => {
				await loading.dismiss();
				this.router.navigateByUrl('/cupoes', { replaceUrl: true });
			},
			async (res) => {
				await loading.dismiss();
				const alert = await this.alertController.create({
					header: 'Login failed',
					message: res.error.error,
					buttons: ['OK']
				});

				await alert.present();
			}
		);
	}

	// Easy access for form fields
	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

  openPage = function () {
		window.location.href = '../home';
	};


  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/home', { replaceUrl: true });
	}

}

//https://www.postman.com/solar-moon-717210/workspace/reqres-api/documentation/13353731-c5c207fd-99de-45a6-8283-edd5ad2b8c2b
