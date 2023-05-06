import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  spinner=true;
  category_id:any;
products:any;
encryption:string | undefined
  productQuantity:number=1;

  constructor(private product:ProductsService,private route: ActivatedRoute,
    private encryptionservice:EncryptionService, private cartservice:CartService){
      this.route.paramMap.subscribe(params => {
        this.category_id = params.get('id');
        console.log(this.category_id)
      })
      this.getProductById()
  }

ngOnInit(){
  setTimeout(() => {
    this.spinner=false;
  }, 5000);
}

  getProductById(){
    this.encryptionservice.Encryption(this.category_id).subscribe((res:any)=>{
    //console.log(res.data)
    
this.product.getProductByCategoryId(res.data).subscribe((data:any)=>{
console.log(data.data)
this.products=data.data;
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
