import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(public router:ActivatedRoute) { 
    this.router.paramMap.subscribe((params:ParamMap)=>{
      const locail = (params.get('id'))
    })
  }

  ngOnInit() {
  }

}
