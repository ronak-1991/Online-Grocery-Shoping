import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = environment.baseurl;

 adminRegi=environment.adminRegistration
 adminLogin=environment.adminLogin

  constructor(private http: HttpClient, private router: Router) { }
  


  getToken(){
    return  localStorage.getItem('access_token');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }


postAdminRegistrationData(data:any) {
  try {
    return this.http.post(this.baseurl + this.adminRegi, data);
    } catch (error:any) {
    return throwError(() => new Error(error));
    }

}

postAdminLoginData(body: any) {
try {
return this.http.post(this.baseurl + this.adminLogin, body);
} catch (error:any) {
return throwError(() => new Error(error));
}
}
}
