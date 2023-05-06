import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseurl=environment.baseurl
  allProduct=environment.all_product 
  productByCategoryId=environment.AllProduct_by_categoryId 
  productById=environment.productById

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/fea_product'
  getProduct(): Observable<any[]> {
   return this.http.get<any[]>(this.url)
  }

getAllProduct(){
  try {
    return this.http.get(this.baseurl + this.allProduct ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
  } catch (error:any) {
    return throwError(() => new Error(error));
  }
}

getProductByCategoryId(encryption:string){
  try {
    return this.http.get(this.baseurl + this.productByCategoryId ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','category_id': encryption,})})
  } catch (error:any) {
    return throwError(() => new Error(error));
  }
}

getProductById(encryption:any){
  try {
    return this.http.get(this.baseurl + this.productById ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','product_id': encryption,})})
  } catch (error:any) {
    return throwError(() => new Error(error));
  }
}

}
