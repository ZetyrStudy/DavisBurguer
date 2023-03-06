import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  showLocationDetail = false;

  // show or hide a location string later
	onScroll(ev: any) {
		const offset = ev.detail.scrollTop;
		this.showLocationDetail = offset > 40;
	}

}
