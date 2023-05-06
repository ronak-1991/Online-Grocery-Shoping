import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseurl = environment.baseurl;
  userRegister = environment.user_register;
  userLogin = "/customer/login";
  change_Password=environment.change_pass;
  get_user_details=environment.get_user_details
  edit_user_details=environment.edit_user_details
 adminRegi=environment.adminRegistration
 adminLogin=environment.adminLogin

  constructor(private http: HttpClient, private router: Router) { }
  
  postRegistrationData(data: UserModel) {
  
      return this.http.post(this.baseurl + this.userRegister, data);
    
  }
  
  postLoginData(body: any) {
    try {
    return this.http.post(this.baseurl + this.userLogin, body);
  } catch (error:any) {
    return throwError(() => new Error(error));
  }
  }

  getToken(){
    return  localStorage.getItem('access_token');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  changePassword(data:any){
    try {
    return this.http.put(this.baseurl + this.change_Password,data)
  } catch (error:any) {
    return throwError(() => new Error(error));
  }
  }

getUserDetails(){
  try {
  return this.http.get(this.baseurl + this.get_user_details,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
} catch (error:any) {
  return throwError(() => new Error(error));
}
}

updateUserDetails(data:any){
  try {
    return this.http.put(this.baseurl + this.edit_user_details,data)
  } catch (error:any) {
    return throwError(() => new Error(error));
  }
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
