import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cupoens',
  templateUrl: './cupoens.page.html',
  styleUrls: ['./cupoens.page.scss'],
})
export class CupoensPage implements OnInit {
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


  
  constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get('../../../assets/database/db-cupom.json').subscribe((res: any) => {
			this.cupoes = res.cupoes;
			this.highlights = res.highlights;
		});

}
}
