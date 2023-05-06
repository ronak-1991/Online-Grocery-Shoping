import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  errorMessage:any
  constructor(private router: Router,private authservice:AuthService,
    private toastr:ToastrService) { }


  ngOnInit(){
    window.scroll(0,0)
  }
  registrationForm = new FormGroup({
    username: new FormControl("",[Validators.required]),
    first_name : new FormControl("",[Validators.required]),
    last_name : new FormControl("",[Validators.required]),
    primary_email : new FormControl("",[Validators.required,Validators.email]),
    primary_mobile_number : new FormControl("",[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    password : new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(16)])

  })
 

  onSubmit(){
    const data:any=this.registrationForm.value
    if(this.registrationForm.valid){
      this.authservice.postRegistrationData(data).subscribe((res:any)=>{
        console.log(res)
    },(error) => {
      if (error.status === 400) {
        this.errorMessage = error.error.message;
        this.toastr.error(this.errorMessage)
      }
    })  
    
    console.log(data)
   //this.router.navigate(['/']);
    }
    
  }
  get username(){
    return this.registrationForm.get('username')
  }
  get first_name(){
    return this.registrationForm.get('first_name')
  }
  get last_name(){
    return this.registrationForm.get('last_name')
  }
  get primary_email(){
    return this.registrationForm.get('primary_email')
  }
  get primary_mobile_number(){
    return this.registrationForm.get('primary_mobile_number')
  }
  get password(){
    return this.registrationForm.get('password')
  }
}
