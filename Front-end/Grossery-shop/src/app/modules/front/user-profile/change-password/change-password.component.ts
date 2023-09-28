import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  errorMessage:any
  constructor(private authservice:AuthService, private toastr:ToastrService){}
  ngOnInit(){
    window.scroll(0,0)
    
  }
  changePassword:FormGroup = new FormGroup({
    oldPassword: new FormControl("",[Validators.required]),
    newPassword: new FormControl("",[Validators.required])
    // conformPassword: new FormControl("",[Validators.required])
  });


   passwordMatchValidator() {
    const password = this.changePassword.get('newPassword');
    const conformPassword = this.changePassword.get('conformPassword');
    return password === conformPassword ? null : { mismatch: true };
  }

  onSave(data:any){
    if(this.changePassword.valid){
      console.log(data);
      
      this.authservice.changePassword(data).subscribe(res=>{
        

        this.toastr.success("changed password Succsessdully")
        console.log(res)
      },
      (error) => {
        if (error.status === 400) {
          this.errorMessage = error.error.message;
          this.toastr.error(this.errorMessage)
        } 
      })
    }

  }
  get oldPassword(){
    return this.changePassword.get('oldPassword')
  }
  get newPassword(){
    return this.changePassword.get('newPassword')
  }
  get conformPassword(){
    return this.changePassword.get('conformPassword')
  }


}
