import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  spinner=true;
  products:any;
  filteredcatagory:any;
  category:any;
  productQuantity:number=1
  filterproducts:any=[];
 

  constructor(private product:ProductsService,private cartservice:CartService,
    private _categoryService:CategoryService,private encryptionservice:EncryptionService){
  
    
  }
  ngOnInit(){
    window.scroll(0, 0)
    setTimeout(() => {
      this.spinner=false;
    }, 5000);
    window.scroll(0,0)
   this.getAllProducts()
    this.getAllCategory()
  }
  
  // getData(){
  //   this.product.getProduct().subscribe(res=>{
  //     this.products=res
  //     this.filteredcatagory = this.products
  //    })
  //   }
  
  
  filtercatagorybyitem(catagory:any) {
    this.filterproducts.splice(0, this.filterproducts.length);
    if (catagory === "All"){
      this.filteredcatagory = this.products;
      }else{
       this.getProductById(catagory)
    }
  }

  getAllCategory(){
    this._categoryService.getCategory().subscribe((res:any)=>{
       this.category=res.data;
      console.log(res)
    })
  }
  getAllProducts(){
    this.product.getAllProduct().subscribe((res:any)=>{
      this.products=res.data
      this.filteredcatagory = this.products;
      console.log(this.products)
    })
  }

  getProductById(category_id:string){
    this.encryptionservice.Encryption(category_id.toString()).subscribe((res:any)=>{
    //console.log(res.data)
    
this.product.getProductByCategoryId(res.data).subscribe((data:any)=>{
let a=data.data

for (let i = 0; i < a.length; i++) {
  const productObj = a[i].product; 
  this.filterproducts.push(productObj); 
}
//console.log(this.filterproducts)

this.filteredcatagory = this.filterproducts
})
    })
  }


  addToCart(data:any) {
    if(data){
      data.quantity = this.productQuantity
      this.cartservice.addItemToCart(data);
    }
    let cartData = this.cartservice.getCartData();
    this.cartservice.total1.next(cartData.length)
  }
}

