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
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  onSubmit() {
    let body=this.loginData.value
    if(this.loginData.valid){
    this.authservice.postAdminLoginData(body).subscribe((res:any)=>{
      localStorage.setItem('access_token',res.data.authToken);
      console.log(res)
      console.log(res.data)
      if(res){
        this.router.navigate(['/admin/adminPanel']);
      }
    },
    (error) => {
      if (error.status === 400) {
        this.errorMessage = error.error.message;
        this.toastr.error(this.errorMessage)
      }
    })
    
      console.log(this.loginData.get('email'));
    }
  
}


  get email() {
    return this.loginData.get('email');
  }

  get password() {
    return this.loginData.get('password');
  }

}
