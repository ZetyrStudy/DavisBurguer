import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastro = {
    email: '',
    nome: '',
    cpf: '',
    telefone: '',
    cep: '',
    senha: ''
  };

  type: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  goToHome(){

  }

  changeType() {
    this.type = !this.type;
  }

}
