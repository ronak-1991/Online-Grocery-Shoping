import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage!:string;
  constructor(private router: Router, private authservice:AuthService,
    private toastr:ToastrService) { }


ngOnInit(){
  window.scroll(0,0)
}

  loginData = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  onSubmit() {
    let body=this.loginData.value
    if(this.loginData.valid){
    this.authservice.postLoginData(body).subscribe((res:any)=>{
      localStorage.setItem('access_token',res.data.token);
      console.log(res)
      console.log(res.data)
      if(res){
        this.router.navigate(['']);
      }
    },
    (error) => {
      if (error.status === 400) {
        this.errorMessage = error.error.message;
        this.toastr.error(this.errorMessage)
      }
    })
    
      console.log(this.loginData.get('username'));
    }
  
}


  get username() {
    return this.loginData.get('username');
  }

  get password() {
    return this.loginData.get('password');
  }


}
