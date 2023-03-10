import { ParallaxDirective } from 'src/app/directives/parallax.directive';
import { HideHeaderDirective } from 'src/app/directives/hide-header.directive';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/assets/database/db-produto.interface';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	categories: any = [];
	highlights: any = [];
	produto: Produto[] | any;

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

	featuredSlideOpts = {
		slidesPerView: 1.2,
		spaceBetween: 10,
		freeMode: true
	};

	showLocationDetail = false;

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get('../../../assets/database/db.json').subscribe((res: any) => {
			this.categories = res.categories;
			this.highlights = res.highlights;
		});

		this.http.get('../../../assets/database/db-produto.json')
			.subscribe((res: any) => {
				this.produto = res.produto;
			});
	}

	// Dummy refresher function
	doRefresh(ev: any) {
		setTimeout(() => {
			ev.target.complete();
		}, 2000);
	}
	// show or hide a location string later
	onScroll(ev: any) {
		const offset = ev.detail.scrollTop;
		this.showLocationDetail = offset > 40;
	}

	openPage = function (input: any) {
		window.location.href = '../detalhes/' + input;
	};
}