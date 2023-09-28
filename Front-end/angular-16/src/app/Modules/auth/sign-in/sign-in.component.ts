import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  errorMessage!:string;
  constructor(private router: Router, private authservice:AuthService) { }


ngOnInit(){
  window.scroll(0,0)
}

  loginData = new FormGroup({
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  onSubmit() {
    
    if(this.loginData.valid){
    this.authservice.postAdminLoginData(this.loginData.value).subscribe((res:any)=>{
      localStorage.setItem('access_token',res.data.authToken);
      if(res){
        this.router.navigate(['/home']);
      }
    },
    (error: { status: number; error: { message: string; }; }) => {
      if (error.status === 400) {
        this.errorMessage = error.error.message;
     
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
