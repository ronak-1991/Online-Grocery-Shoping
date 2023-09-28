import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { DataService } from 'src/app/Shared/services/data_Service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  AllCategory:any[] = []
  productForm!:FormGroup

imgUrl:any='/assets/images/u2.webp'

constructor(private _dataservice:DataService,
  private _fb:FormBuilder
  ){

this._getcategoryList() 
}

//lifecyle hook
ngOnInit(){
this._initForm()
}

// getter method

get f(){
  return this.productForm?.controls
}

// public method 
public preview(image:any){
let fileUpload = image[0]
let reader = new FileReader()
reader.onload=() =>{
  this.imgUrl=reader.result
}
reader.readAsDataURL(fileUpload);
}

public submitForm(){
  let form = new FormData()
  form.append("title",this.f['title'].value)
  form.append("amount",this.f['amount'].value)
  form.append("description",this.f['description'].value)
  form.append("short_description",this.f['short_description'].value)
  form.append("categoryArrayFromBody",this.f['categoryArrayFromBody'].value)
  form.append("discount_amount",this.f['discount_amount'].value)
  form.append("discount_type",this.f['discount_type'].value)
  form.append("avatar_image",this.f['avatar_image'].value)
  console.log(form);
  
  this._dataservice.NewProduct(form).subscribe(res=>{
    console.log('====================================');
    console.log(res);
    console.log('====================================');
  })
}


//private method

private _getcategoryList(){
  this._dataservice.getCategory().subscribe((res:any)=>{
    if(res.success){
      this.AllCategory = res.data
    }    
  })
  }


  private _initForm(){
this.productForm = this._fb.group({
  id:[0],
  title:[""],
  amount:[""],
  avatar_image:[""],
  description:[""],
  short_description:[""],
  categoryArrayFromBody:[[1,5]],
  discount_amount:[""],
  discount_type:[1],
})
  }




}
