import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  total1=new Subject<any>();

  carturl='http://localhost:3000/cart'
  constructor(private http:HttpClient) { }

getToCart(){
  return this.http.get(this.carturl)
}

  addToCart(body:any):Observable<any[]>{
    return this.http.post<any[]>(this.carturl,body)
   }

   delToCart(id:any){
    return this.http.delete(this.carturl+"/"+id)
   }

   updateCart(id:any,products:any){
    return this.http.put(this.carturl+"/"+id,products)
   }


   getCartData(){
    let cartdata = localStorage.getItem('localCart')
    let localCart = cartdata && JSON.parse(cartdata);
    return localCart || [];
  }

  addItemToCart(item:any){
    let cart = this.getCartData();
    let currentProduct = cart.find((product:any) => product.id === item.id);
    if(currentProduct){
      currentProduct.quantity = item.quantity
    }
    else{
      cart.push(item)
    }
    // console.log(cart);
    localStorage.setItem('localCart',JSON.stringify(cart));
    //this.getCartLength.emit(cart)
  }

  removeItemToCart(item:any){
    let cart = this.getCartData();
    let indexOfItem = cart.findIndex((product:any) => product.id === item.id);
    if(indexOfItem != -1){
      cart.splice(indexOfItem,1)
    }
    localStorage.setItem('localCart',JSON.stringify(cart)) 
    //this.getCartLength.emit(cart)
  }

}
