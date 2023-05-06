import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent {
spinner=true;
  constructor(private cartservice:CartService){

  }

ngOnInit(){
  window.scroll(0, 0)
  setTimeout(() => {
    this.spinner=false;
  }, 5000);
    window.scroll(0,0)
  this.getCartData();

}
  cartData:any;
  groupedProducts:any
  productQuantity!:number;
  subtotal!:number;



//     getCartsData(){
//       this.cartservice.getToCart().subscribe((res: any)=>{
//         this.cartData=res
//         //console.log(this.cartData)
//         this.groupedProducts = this.cartData.reduce((acc:any, product:any) => {
//           const existingCategory = acc.find((group: { catagory: any; }) => group.catagory == product.catagory);
//           if (existingCategory) {
//             existingCategory.cart.push(product);
//             // this.groupedProducts=this.cartlength
//           } else {
//             acc.push({ catagory: product.catagory, cart: [product] });
//           }
//           return acc;
          
//         }, []);


//        })
//       }
  
//       delCartData(id:any){
//         console.log(id)
//           //this.cartservice.delToCart(id).subscribe((data: any)=>{
//             // if(data){
//             //   console.log(data)
//               const index = this.cartData.findIndex((item:any) => item.id === id);
//               console.log(index)
//             this.cartData.splice(index,1)
//             //}
//           //})
//         //  this.getCartData();
//       }
     
//   products:any=[];
//   addQuantity(Id: any,y:any,i:any) {
//     console.log(y)
//     console.log(i)
//      this.cartData.forEach((item: { id: any; product_quan: number; }) => {
//       if (item.id === Id) {
//         item.product_quan++;
//         // console.log(item.product_quan)
//         // console.log(this.cartData)
        
      
//         //   console.log(this.cartData[i].product_quan,"quant")
//           this.products=this.groupedProducts[y].cart[i]
//         this.products.product_quan=item.product_quan
          
//         this.updateCartData(Id,this.products)
          
//       }
//     });    
//   }
//   subQuantity(Id: any,y:any,i:any) {
//     this.cartData.forEach((item: { id: any; product_quan: number; }) => {
//       if (item.id === Id) {
//         if (item.product_quan > 1){
//         item.product_quan--;
//         // console.log(item.product_quan)
//         // console.log(this.cartData)
        
      
//         //   console.log(this.cartData[i].product_quan,"quant")
//           this.products=this.groupedProducts[y].cart[i]
//         this.products.product_quan=item.product_quan
          
//         this.updateCartData(Id,this.products)
//         }
//       }
//     });
//   }

// updateCartData(id:any,products:any){
//   this.cartservice.updateCart(id,products).subscribe((res: any)=>{
//     //console.log(res)
//   })
// }


// total(){
// const total=this.cartData.reduce((total:any, item:any) => total + item.product_quan * item.price, 0)
// this.cartservice.total1.next(total)
// return total;
// }



getCartData() {
  this.cartData = this.cartservice.getCartData();
  let amount = 0
console.log(this.cartData)
    this.cartData.forEach((item:any)=>{
      if(item.quantity){
        amount = amount + (item.amount * item.quantity)
      }
    })
    this.subtotal = amount;
   };


  quantity(data: string,product:any) {
    if(product.quantity){
      this.productQuantity = product.quantity
    }
    if (data === 'min' && this.productQuantity > 1) {
      this.productQuantity -= 1;
      if(product){
        product.quantity = this.productQuantity
        this.cartservice.addItemToCart(product)
        this.getCartData();
      }
    }
    if (data === 'pluse' && this.productQuantity < 50) {
      this.productQuantity += 1;
      if(product){
        product.quantity = this.productQuantity
        this.cartservice.addItemToCart(product)
        this.getCartData();
      }
    }
  }

  delCartData(product:any){
    this.cartservice.removeItemToCart(product);
    this.getCartData();
    let cartData = this.cartservice.getCartData();
    this.cartservice.total1.next(cartData.length)
  }


}
