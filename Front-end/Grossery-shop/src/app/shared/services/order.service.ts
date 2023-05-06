import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl=environment.baseurl
  all_orders=environment.allOrder
  post_order=environment.addOrder
  constructor(private http:HttpClient) { }

  getAllOrders(){
    try {
      return this.http.get<any>(this.baseUrl+this.all_orders,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }

  // postAddress(data:any,id:any,p:any,o:any){
  //   try {
  //     return this.http.post(this.baseUrl + this.post_order ,data,  
  //       {headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning','Access-Control-Allow-Origin': '*',
  //       'delivery_address_id': id,'billing_address_id':id,'payment_status':p,'order_status':o}),
  //   })
  //   } catch (error:any) {
  //     return throwError(() => new Error(error));
  //   }
  // }

  postAddress(data:any,delivery_address_id:any,billing_address_id:any,payment_status:any,order_status:any){
    try {
      return this.http.post<any>(this.baseUrl+this.post_order,data,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*',"billing_address_id":billing_address_id,"delivery_address_id":delivery_address_id,"payment_status":payment_status,"order_status":order_status})})
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }

}
