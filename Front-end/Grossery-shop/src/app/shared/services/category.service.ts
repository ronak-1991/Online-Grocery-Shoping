import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl=environment.baseurl
  allCategory=environment.all_category
  constructor(private http:HttpClient) { }

getCategory(){

 try {
  return this.http.get(this.baseUrl + this.allCategory,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
 } catch (error:any) {
  return throwError(() => new Error(error))
 }
}

}
