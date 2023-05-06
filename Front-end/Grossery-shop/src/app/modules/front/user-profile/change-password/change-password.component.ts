import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  constructor(private authservice:AuthService){}
  ngOnInit(){
    window.scroll(0,0)
    
  }
  changePassword:FormGroup = new FormGroup({
    oldPassword: new FormControl("",[Validators.required]),
    newPassword: new FormControl("",[Validators.required]),
    conformPassword: new FormControl("",[Validators.required])
  });


   passwordMatchValidator() {
    const password = this.changePassword.get('newPassword');
    const conformPassword = this.changePassword.get('conformPassword');
    return password === conformPassword ? null : { mismatch: true };
  }

  onSave(data:any){
    if(this.changePassword.valid){
      this.authservice.changePassword(data).subscribe(res=>{
        console.log(res)
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
