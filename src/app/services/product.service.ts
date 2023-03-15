import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = '../../../assets/database/db-produto.json';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.apiUrl}`);
  }
}
