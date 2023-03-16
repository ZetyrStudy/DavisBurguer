import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/assets/database/db-usuario.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastro: FormGroup | any;

  type: boolean = true;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder
    ) { }

    ngOnInit() {
      this.cadastro = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        nome: ['', [Validators.required, Validators.minLength(6)]],
        cpf: ['', [Validators.required, Validators.minLength(11)]],
        telefone: ['', [Validators.required, Validators.minLength(8)]],
        cep: ['', [Validators.required, Validators.minLength(8)]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
      });
    }

  goToHome(){

  }

  changeType() {
    this.type = !this.type;
  }

  cadastroUsuario(){
    console.log("Cadastro: " + this.cadastro);
    return this.http.post<Usuario>('../../assets/database/db-usuario.json', this.cadastro);
  }

}
