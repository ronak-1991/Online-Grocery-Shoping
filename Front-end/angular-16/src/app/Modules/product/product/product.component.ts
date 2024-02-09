import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
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
  product_id!:any
  mode:any

imgUrl:any='/assets/images/u2.webp'

constructor(private _dataservice:DataService,
  private _fb:FormBuilder,
  private _route:ActivatedRoute,
  private _router:Router
  ){

this._getcategoryList() 
}

//lifecyle hook
ngOnInit(){

  this.product_id = this._route.snapshot.params['id']
  
  this.mode = this._route.snapshot.data['mode']
  // console.log(mode);
  
this._initForm()

if(this.mode == 'view'){
  this.ProductsById()
}
}

// getter method

get f(){
  return this.productForm?.controls
}

// public method 
public preview(image:any){
let fileUpload = image[0]
this.f['avatar_image'].patchValue(fileUpload)
let reader = new FileReader()
reader.onload=() =>{
  this.imgUrl=reader.result
}
reader.readAsDataURL(fileUpload);
}
file = new FormControl();



public submitForm(){
  console.log(this.f['categoryArrayFromBody'].value);
  // return
  
  let form = new FormData()
  form.append("title",this.f['title'].value)
  form.append("amount",this.f['amount'].value)
  form.append("description",this.f['description'].value)
  form.append("short_description",this.f['short_description'].value)
  form.append("categoryArrayFromBody",JSON.stringify(this.f['categoryArrayFromBody'].value))
  form.append("discount_amount",this.f['discount_amount'].value)
  form.append("discount_type",this.f['discount_type'].value)
  form.append("avatar_image",this.f['avatar_image'].value)
  console.log(form);
  
  if(this.mode == 'add'){

    this._dataservice.NewProduct(form).subscribe((res:any)=>{
      if(res.success){
        this._router.navigate(['/product'])
      }
    })
  }

  if(this.mode == 'edit'){

    this._dataservice.UpdateProduct(form).subscribe((res:any)=>{
      if(res.success){
        this._router.navigate(['/product'])
      }
    })
  }

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
  categoryArrayFromBody:[],
  discount_amount:[""],
  discount_type:[1],
})
  }


  ProductsById(){
    this._dataservice.Encryption(this.product_id.toString()).subscribe(response=>{
      console.log(response)
    this._dataservice.getProductById(response.data).subscribe((res:any)=>{
console.log(res);
this.productForm.patchValue(res.data)
if(this.mode == 'view'){
  this.productForm.disable()
  this.imgUrl = 'http://localhost:8080/products/'+ res.data.avatar_image
}
    })
  })
  }

  
}
