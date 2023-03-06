import { HttpClient } from '@angular/common/http';
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren
} from '@angular/core';
import { IonContent, IonList, IonSlides, isPlatform } from '@ionic/angular';
import { Produto } from 'src/assets/database/db-produto.interface';


@Component({
	selector: 'app-detalhes',
	templateUrl: './detalhes.page.html',
	styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit, AfterViewInit {
	data: any = null;
	produto: Produto[] | any;

	opts: any = {
		freeMode: true,
		slidesPerView: 2.6,
		slidesOffsetBefore: 30,
		slidesOffsetAfter: 100
	};

	activeCategory: any = 0;
	@ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef> | any;
	listElements: any = [];
	@ViewChild(IonSlides) slides: IonSlides | any;
	@ViewChild(IonContent) content: IonContent | any;
	categorySlidesVisible = false;

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http
			.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/1.json')
			.subscribe((res2: any) => {
				this.data = res2;
				console.log(res2);
			});

		this.http
			.get('../../../assets/database/db-produto.json')
			.subscribe((res: any) => {
				this.produto = res.produto;
				console.log("atum" + res.produto);

				console.log("1" + this.produto.nome);

				console.log("3" + this.produto[0].nome);
				console.log("5" + this.produto[0][0]);
			});

	}

	// Get all list viewchildren when ready
	ngAfterViewInit() {
		this.lists.changes.subscribe((_: any) => {
			this.listElements = this.lists.toArray();
		});
	}

	// Handle click on a button within slides
	// Automatically scroll to viewchild
	selectCategory(index: any) {
		const child = this.listElements[index].nativeElement;
		this.content.scrollToPoint(0, child.offsetTop - 120, 1000);
	}

	// Listen to ion-content scroll output
	// Set currently visible active section
	onScroll(ev: any) {
		const offset = ev.detail.scrollTop;
		this.categorySlidesVisible = offset > 500;

		for (let i = 0; i < this.listElements.length; i++) {
			const item = this.listElements[i].nativeElement;
			if (this.isElementInViewport(item)) {
				this.activeCategory = i;
				this.slides.slideTo(i);
				break;
			}
		}
	}

	isElementInViewport(el: any) {
		const rect = el.getBoundingClientRect();

		return (
			rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}
}