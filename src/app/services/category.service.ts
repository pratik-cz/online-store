import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private URL = "https://fakestoreapi.com/products/"
  constructor(private http: HttpClient) { }
  getCategories() {
     return this.http.get(this.URL+"categories");
  }
  getProductCategory(catName:string) {
    return this.http.get(this.URL+"category/"+catName);
 }
}
