import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cupoens',
  templateUrl: './cupoens.page.html',
  styleUrls: ['./cupoens.page.scss'],
})
export class CupoensPage implements OnInit {
  cupoes1: any = [];
  cupoes2: any = [];
  cupoes3: any = [];
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
		this.http.get('../../../assets/database/db-cupomtest.json').subscribe((res: any) => {
			this.cupoes1 = res.cupoes.catimperdiveis;
			this.cupoes2 = res.cupoes.catTop10;
			this.cupoes3 = res.cupoes.catBurguerbom;
			this.highlights = res.highlights;
		});

}
}
