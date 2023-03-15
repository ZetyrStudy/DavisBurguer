import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  productList: any[] = [];
  categoryId: string | any;
  highlights: any = [];
  categories: any = [];

  constructor(public router:ActivatedRoute, private http: HttpClient, private productService: ProductService) { 
  }

  ngOnInit() {
    this.http.get('../../../assets/database/db-produto.json')
    .subscribe((res: any) => {
      this.productList = res.produto;
    });

    this.http.get('../../../assets/database/db-categoria.json').subscribe((res: any) => {
			this.categories = res.categories;
			this.highlights = res.highlights;
		});

  }

  openPage = function (input: any) {
		window.location.href = '../detalhes/' + input;
	};

  filterProductsByCategory(categoryName: string) {
    if (!categoryName) {
      // se não houver nome de categoria informado, retornamos todos os produtos
      return this.productList;
    }
  
    return this.productList.filter(product => {
      // para cada produto, verificamos se a propriedade category possui o nome da categoria informada
      return product.categoria === categoryName;
    });
  }
}
