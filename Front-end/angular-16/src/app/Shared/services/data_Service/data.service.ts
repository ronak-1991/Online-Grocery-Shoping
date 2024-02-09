import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl=environment.baseurl
  allCategory=environment.all_category
  allProduct=environment.all_product
  AddProduct = environment.newProduct
  updateProduct = environment.updateProduct
  productById=environment.productById
  encryption=environment.encryption;
  AddCategoryAPI =environment.AddCategory;



  constructor(private http:HttpClient) { }

getCategory(){

 try {
  return this.http.get(this.baseUrl + this.allCategory,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
 } catch (error:any) {
  return throwError(() => new Error(error))
 }
}

AddCategory(body:any){
  try {
    return this.http.post(this.baseUrl + this.AddCategoryAPI,body,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
   } catch (error:any) {
    return throwError(() => new Error(error))
   }
}


getAllProduct(){
  try {
    return this.http.get(this.baseUrl + this.allProduct ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
  } catch (error:any) {
    return throwError(() => new Error(error));
  }
}

NewProduct(body:any){
  try {
    return this.http.post(this.baseUrl + this.AddProduct,body,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
  } catch (error:any) {
    return throwError(() => new Error(error));
  }

}

UpdateProduct(body:any){
  try {
    return this.http.put(this.baseUrl + this.updateProduct,body,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
  } catch (error:any) {
    return throwError(() => new Error(error));
  }

}


getProductById(encryption:any){
  try {
    return this.http.get(this.baseUrl + this.productById ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','product_id': encryption,})})
  } catch (error:any) {
    return throwError(() => new Error(error));
  }
}


Encryption(id:any){
  try {
    return this.http.get<any>(this.baseUrl+this.encryption,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','id':id})})
  } catch (error:any) {
    return throwError(() => new Error(error))
  }
}

}
