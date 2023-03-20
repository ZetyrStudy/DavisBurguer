import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/assets/database/db-usuario.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';

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
    private fb: FormBuilder,
    private ps: ProductService
  ) { }

  ngOnInit() {
    this.cadastro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      //nome: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      telefone: ['', [Validators.required, Validators.minLength(8)]],
      cep: ['', [Validators.required, Validators.minLength(8)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.createForm();
  }

  private createForm() {
    this.cadastro = new FormGroup({
      email: new FormControl(''),
      cpf: new FormControl(''),
      telefone: new FormControl(''),
      cep: new FormControl(''),
      senha: new FormControl('')

    })
  }

  cadastroUsuario() {
    console.log("Cadastro: " + this.cadastro);

    this.ps.submitForm(this.cadastro.value)
      .subscribe((data: any) => {
        console.log('Form sumbmetido!');
      },
        (error: HttpErrorResponse) => {
          console.log('Form error!')
        });

  }

}

/*
return this.http.post<Usuario>('../../assets/database/db-usuario.json', cadastroUsuario).toPromise().then((data : any) => {
      console.log(data);
      this.json = JSON.stringify(data.json);
    });
*/