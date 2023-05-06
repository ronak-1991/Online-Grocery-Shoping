import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from 'src/app/shared/services/address.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';


@Component({
  selector: 'app-mange-address',
  templateUrl: './mange-address.component.html',
  styleUrls: ['./mange-address.component.scss']
})
export class MangeAddressComponent {
  errorMessage:any;
  address:any;
  encryptionCode:any;
  addressId:any;
  showUpdatebtn=false;
  constructor(private addressservice:AddressService, private authservice:AuthService,
    private encryptionservice:EncryptionService){}

  ngOnInit(){
    window.scroll(0,0)
    this.getuserDetails();
  }
  user_address = new FormGroup({
    address_line_1:new FormControl("",[Validators.required]),
    address_line_2:new FormControl("",[Validators.required]),
    area:new FormControl("",[Validators.required]),
    city:new FormControl("",[Validators.required]),
    state:new FormControl("",[Validators.required]),
    country:new FormControl("",[Validators.required]),
    postal_code:new FormControl("",[Validators.required]),
    landmark: new FormControl("",[Validators.required]),
    tag:new FormControl("",[Validators.required])
    });

    get address_line_1(){
      return this.user_address.get('address_line_1')
    }
    get address_line_2(){
      return this.user_address.get('address_line_2')
    }
    get area(){
      return this.user_address.get('area')
    }
    get city(){
      return this.user_address.get('city')
    }
    get state(){
      return this.user_address.get('state')
    }
    get country(){
      return this.user_address.get('country')
    }
    get postal_code(){
      return this.user_address.get('postal_code')
    }
    get landmark(){
      return this.user_address.get('landmark')
    }
    get tag(){
      return this.user_address.get('tag')
    }

    onSave(address:any){
      this.addressservice.postAddress(address).subscribe(res=>{
        console.log(res)
        this.getuserDetails()
    
      },
      (error) => {
          this.errorMessage = error.error.message;
        })
    this.user_address.reset()
    }

    getuserDetails(){
      this.authservice.getUserDetails().subscribe((res:any)=>{
       this.address=res.data.addresses
       console.log(this.address)
      })
    }

    encryption(id:any){
      this.encryptionservice.Encryption(id).subscribe(res=>{
      this.encryptionCode = res.data
console.log("res",this.encryptionCode)
      })
    }

    onDelete(id:any){
      this.encryption(id.toString())
      this.addressservice.deleteAddress(this.encryptionCode).subscribe(res=>{
        console.log(res)
        this.getuserDetails()
      })
    }

    onEdit(address:any){
      this.showUpdatebtn=true;
      this.addressId=address.id
      this.encryption(this.addressId.toString())

        this.user_address.setValue({
          address_line_1:address.address_line_1,
          address_line_2:address.address_line_2,
          area:address.area,
          city:address.city,
          state:address.state,
          country:address.country,
          postal_code:address.postal_code,
          landmark: address.landmark,
          tag:address.tag
        })
    }

    onUpdate(data:any){
      this.addressservice.updateAddress(this.encryptionCode,data).subscribe(res=>{
        console.log(res)
      })
      this.showUpdatebtn=false;
      this.getuserDetails()
    }
    
}
