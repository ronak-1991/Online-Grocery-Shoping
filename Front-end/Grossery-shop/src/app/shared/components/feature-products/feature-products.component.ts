import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.scss']
})
export class FeatureProductsComponent {
  products:any;
  productQuantity:number=1
  

  constructor(private product:ProductsService,private cartservice:CartService,
    private _snackBar: MatSnackBar,private toaster:ToastrService){
  

  }
  ngOnInit(){
     window.scroll(0,0)
    this.getAllProducts()

  }
  
getAllProducts(){
  this.product.getAllProduct().subscribe((res:any)=>{
    this.products=res.data
    console.log(this.products)
  })
}

  // getData(){
  //   this.product.getProduct().subscribe(res=>{
  //     this.products=res
  //    })
  //   }
  
    // addToCart(id:any){
    //   const body= this.products.filter((ele: { id: any; })=>ele.id === id)
  
    //       this.cartservice.addToCart(body[0]).subscribe(prod=>{
    //       })
    //       this.openSnackBar()
    //     }
    showSuccess(data:any) {
      this.toaster.success(data + " " + "Added");
    }
        addToCart(data:any) {
          if(data){
            data.quantity = this.productQuantity
            this.cartservice.addItemToCart(data);
          }
          let cartData = this.cartservice.getCartData();
          this.cartservice.total1.next(cartData.length)
        this.showSuccess(data.title)
        }

       
}
