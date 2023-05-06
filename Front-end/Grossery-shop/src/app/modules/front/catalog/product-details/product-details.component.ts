import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  spinner=true;
  product_name:any;
  product_id:any
  product_data:any;
  isAddToCart=false;
  productQuantity: number = 1;
  
  constructor(private product:ProductsService,private route: ActivatedRoute,
    private enryptionservice:EncryptionService,
    private cartservice:CartService){
      // this.route.paramMap.subscribe(params => {
      //   this.product_name = params.get('slug');
      //   //console.log(this.name)
       
      // });
      //this.getAllProducts()
      this.route.paramMap.subscribe(params => {
        this.product_id = params.get('id');
        //console.log(this.name)
       
      });
      this.ProductsById()
    
  }
  
  ngOnInit() {
    window.scroll(0,0)
    setTimeout(() => {
      this.spinner=false;
    }, 5000);
    //this.getData()
  }
  
//   getAllProducts(){
//     this.product.getAllProduct().subscribe((res:any)=>{
//       this.product_data= res.data.filter((ele:any)=>ele.slug === this.product_name)
// console.log(this.product_data)
//     })
//   }

  ProductsById(){
    this.enryptionservice.Encryption(this.product_id.toString()).subscribe(response=>{
      console.log(response)
    this.product.getProductById(response.data).subscribe((res:any)=>{
      this.product_data= res.data
console.log(res)
console.log(this.product_data.title)
    })
  })
  }

  quantity(data: string) {
    if (data === 'min' && this.productQuantity > 1) {
      this.productQuantity -= 1;
    }
    if (data === 'pluse' && this.productQuantity < 20) {
      this.productQuantity += 1;
    }
  }


  addToCart(data:any) {
    if(this.product_data){
      this.product_data.quantity = this.productQuantity
    }
   this.cartservice.addItemToCart(data);
   let cartData = this.cartservice.getCartData();
   this.cartservice.total1.next(cartData.length)
   this.isAddToCart=true
  }
    // getData(){
    //   this.product.getProduct().subscribe(res=>{
    //     this.product_data= res.filter(ele=>ele.cat_name === this.product_name)
        
        
    //    })
    //   }
  
      // addCart(){
      //   let body=this.product_data[0];
      //   this.cartservice.addToCart(body).subscribe((response:any) => {
      //     console.log("response", response);
      //   })
      //   this.isAddToCart=true
      // }



      
    
    // updateCartData(id:any,products:any){
    //   this.cartservice.updateCart(id,products).subscribe((res: any)=>{
    //     console.log(res)
    //   })
    // }  

  
    
    
}
