import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
errorMessage:any;
  userDetails: any;
  constructor(private authservice:AuthService, private toastr:ToastrService){}

  ngOnInit(){
    window.scroll(0,0)
    this.getuser()
  }

  profileDetails = new FormGroup({
    first_name:new FormControl("",[Validators.required]),
    last_name:new FormControl("",[Validators.required]),
    primary_email:new FormControl(""),
    primary_mobile_number:new FormControl(""),
    secondary_email:new FormControl(""),
    secondary_mobile_number:new FormControl(""),
    date_of_birth:new FormControl(""),
    password: new FormControl("",[Validators.required])
    });

    get first_name(){
      return this.profileDetails.get('first_name')
    }
    get last_name(){
      return this.profileDetails.get('last_name')
    }
    get email(){
      return this.profileDetails.get('email')
    }
    get contact_number(){
      return this.profileDetails.get('contact_number')
    }

    get password(){
      return this.profileDetails.get('password')
    }


onSave(data:any){
  this.authservice.updateUserDetails(data).subscribe((res:any)=>{
    console.log(res)
this.errorMessage =res.message
  },
  (error) => {
    if (error.status === 400) {
      this.errorMessage = error.error.message;
      this.toastr.error(this.errorMessage)
    }})

}

getuser(){
  this.authservice.getUserDetails().subscribe((res:any)=>{
      this.userDetails = res.data;
      console.log(this.userDetails);
      this.profileDetails.setValue({
       first_name: this.userDetails.first_name || "",
       last_name:this.userDetails.last_name || '',
       primary_mobile_number: this.userDetails.primary_mobile_number || '',
       primary_email:this.userDetails.primary_email || '',
       secondary_mobile_number: "",
       secondary_email: "",
       date_of_birth:"",
       password: "",
      })
   console.log(res)
   
  },(error) => {
      this.errorMessage = error.error.message;
    
    })
}


  }


