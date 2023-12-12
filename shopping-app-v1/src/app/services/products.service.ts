import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // product list endpoint
  private apiUrl = 'http://127.0.0.1:8000/products';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const data = this.http.get<any>(this.apiUrl);
    console.log(data);
    return data;
  }
}
