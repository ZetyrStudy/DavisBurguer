import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Produto } from 'src/assets/database/db-produto.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  productList: any[] = [];
  categoryId: string | any;


  constructor(public router:ActivatedRoute, private http: HttpClient, private productService: ProductService) { 
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.categoryId = (params.get('id'))
    })
  }


  ngOnInit() {
    this.http.get('../../../assets/database/db-produto.json')
    .subscribe((res: any) => {
      this.productList = res.produto;
      console.log(res.produto + "linha 33")
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
