import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  spinner=true;
  selectedAddressId: number | undefined;
  cartData:any
  address:any=[];
  subtotal:any;
 
  payment_status:any="9htZqKFcgoVKuq2rxtHzZA==";
order_status:any="9htZqKFcgoVKuq2rxtHzZA==";
orders:any=[]
today = new Date();
future = new Date();
constructor(private authservice:AuthService,private orderservice:OrderService,
  private cartservice:CartService, private encryptionservice:EncryptionService){

}

  ngOnInit(){
    window.scroll(0, 0)
    setTimeout(() => {
      this.spinner=false;
    }, 5000);
    window.scroll(0,0)
    this.getuserDetails()
    this.getCartData()
    this.future.setDate(this.today.getDate() + 4);
  }
  
  getuserDetails(){
    this.authservice.getUserDetails().subscribe((res:any)=>{
     this.address=res.data.addresses
     console.log(this.address)
    })
  }

  getCartData() {
    this.cartData = this.cartservice.getCartData();
    console.log(this.cartData);
let amount=0
    this.cartData.forEach((item:any)=>{
      if(item.quantity){
        amount = amount + (item.amount * item.quantity)
      }
    })
    console.log(amount)
    this.subtotal = amount;
   };
      
 
  




placeOrder(){
  console.log(this.today.toLocaleDateString());
  console.log(this.today);
//  let  data = {
//     "order_date": this.today.toLocaleDateString(),
//     "special_note": "its special",
//     "estimate_delivery_date": this.future.toLocaleDateString(),
//     "sub_total": this.subtotal,
//     "tax_amount": this.subtotal * 0.18,
//     "discount_amount": 0,
//     "total_amount": this.subtotal + (this.subtotal * 0.18),    
//     "paid_amount": (this.subtotal + (this.subtotal * 0.18)) ,
//     "payment_type": 2,
//     "order_products": this.orders
// }
// console.log(data)


  let data={
    "order_date": this.today.toLocaleDateString(),
    "special_note": "its special",
    "estimate_delivery_date": this.future.toLocaleDateString(),
    "sub_total": this.subtotal,
    "tax_amount": this.subtotal * 0.18,
    "discount_amount": this.subtotal * 0.05,
    "total_amount": this.subtotal + (this.subtotal * 0.18),
    "paid_amount": (this.subtotal + (this.subtotal * 0.18)) ,
    "payment_type": 2,
    "order_products": this.orders
}
  
  for (let i = 0; i < this.cartData.length; i++) {
    let product = this.cartData[i];
    let slug = {
      "product_id": product.id,
      "product_name": product.title,
      "qty": product.quantity,
      "product_amount": product.amount,
      "discount_type": product.discount_type,
      "discount_amount": product.discount_amount
  }
    this.orders.push(slug);
    console.log(this.orders);
    
  }

 this.encryptionservice.Encryption(this.selectedAddressId?.toString()).subscribe(res=>{
  console.log(res.data)


  this.orderservice.postAddress(data,res.data,res.data,this.payment_status,this.order_status).subscribe(res=>{
console.log(res);
if(res){
  }
  })
})

localStorage.removeItem('localCart')

 }

}

