import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = '../../../assets/database/db-produto.json';


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.apiUrl}`);
  }

  submitForm(data: any): Observable<any> {
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = { headers: headers }

    return this.http.post<any>(this.apiUrl, data, options);

  }

}