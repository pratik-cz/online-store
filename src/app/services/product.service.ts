import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private URL="https://fakestoreapi.com/products"
  constructor(private http:HttpClient) { }
  loadProducts(){
   return this.http.get(this.URL);
  }
  getProduct(id:any){
    return this.http.get(this.URL+"/"+id);
  }

  getRelatedProducts(category:string){
    return this.http.get(this.URL+"/category/"+category);
  }


}
