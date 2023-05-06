import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseurl = environment.baseurl;
  post_Address=environment.user_Address
  delete_Address=environment.delete_address
  update_Address=environment.update_address

  constructor(private http: HttpClient, private router: Router) { }
  postAddress(address:any){
    try {
      return this.http.post(this.baseurl + this.post_Address,address)
    } catch (error:any) {
      return throwError(() => new Error(error));
    }
  }

  deleteAddress(id:any){
    try {
      return this.http.delete(this.baseurl + this.delete_Address, 
        {headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning','Access-Control-Allow-Origin': '*','address_id': id,}),
      })
    } catch (error:any) {
      return throwError(() => new Error(error));
    }
  }

  updateAddress(id:string,data:any){
    try {
      return this.http.put(this.baseurl + this.update_Address, data,
        {headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning','Access-Control-Allow-Origin': '*','address_id': id,}),
      })
    } catch (error:any) {
      return throwError(() => new Error(error));
    }
  } 
  }

