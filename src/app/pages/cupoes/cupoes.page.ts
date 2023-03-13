import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-cupoes',
	templateUrl: './cupoes.page.html',
	styleUrls: ['./cupoes.page.scss'],
})
export class CupoesPage implements OnInit {

	cupoes: any = [];
	highlights: any = [];

	catSlideOpts = {
		slidesPerView: 3.5,
		spaceBetween: 10,
		slidesOffsetBefore: 11,
		freeMode: true
	};

	highlightSlideOpts = {
		slidesPerView: 1.05,
		spaceBetween: 10,
		centeredSlides: true,
		loop: true
	};



	constructor(
		private authService: AuthenticationService,
		private http: HttpClient,
		private loadingController: LoadingController,
		private alertController: AlertController
	) { }

	ngOnInit() {
		this.http.get('../../../assets/database/db-cupom.json').subscribe((res: any) => {
			this.cupoes = res.cupoes;
			this.highlights = res.highlights;
		});
	}

	credentials: FormGroup | any;

	testSeLogado() {
		console.log(this.authService.isAuthenticated.value);
	}

}
