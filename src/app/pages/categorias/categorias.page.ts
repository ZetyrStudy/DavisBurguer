import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Produto } from 'src/assets/database/db-produto.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

	produto: Produto[] | any;
  categoriaId: string | any;

  constructor(public router:ActivatedRoute, private http: HttpClient) { 
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.categoriaId = (params.get('id'))
      console.log(params.get('id'))
    })
  }

  featuredSlideOpts = {
		slidesPerView: 1.2,
		spaceBetween: 10,
		freeMode: true
	};

  ngOnInit() {
    this.http.get('../../../assets/database/db-produto.json')
    .subscribe((res: any) => {
      this.produto = res.produto;
    });
  }

  openPage = function (input: any) {
		window.location.href = '../detalhes/' + input;
	};

}
