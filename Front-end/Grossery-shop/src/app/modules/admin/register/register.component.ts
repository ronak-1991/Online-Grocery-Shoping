import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMessage:any
  constructor(private router: Router,private authservice:AuthService,
    private toastr:ToastrService) { }


  ngOnInit(){
    window.scroll(0,0)
  }
  registrationForm = new FormGroup({
    first_name : new FormControl("",[Validators.required]),
    last_name : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(16)])

  })
 

  onSubmit(){
    const data:any=this.registrationForm.value
    // if(this.registrationForm.valid){
      this.authservice.postAdminRegistrationData(data).subscribe((res:any)=>{
        console.log(res)
    },(error) => {
      // if (error.status === 400) {
        console.log(error)
        this.errorMessage = error.error.message;
        this.toastr.error(this.errorMessage)
      // }
    })  
    
    console.log(data)
   //this.router.navigate(['/']);
    // }
    }


  get first_name(){
    return this.registrationForm.get('first_name')
  }
  get last_name(){
    return this.registrationForm.get('last_name')
  }
  get email(){
    return this.registrationForm.get('email')
  }
 
  get password(){
    return this.registrationForm.get('password')
  }

}