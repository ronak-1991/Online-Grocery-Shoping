import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  baseUrl=environment.baseurl
  encryption=environment.encryption;
  constructor(private http:HttpClient) { }

  Encryption(id:any){
    try {
      return this.http.get<any>(this.baseUrl+this.encryption,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','id':id})})
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }
}

