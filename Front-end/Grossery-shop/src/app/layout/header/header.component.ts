import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName:any;
  ifToken=false;
  totalPriceOfCart:any;
constructor(private cartservice:CartService,private authservice:AuthService,
  private router:Router){
}

ngOnInit(){
  this.getuser()

  this.router.events.subscribe((res:any)=>{
    if(res.url){
    this.checkUser();
    }
  })

}

logout(){
  this.authservice.logout()
}

checkUser(){
  const token = localStorage.getItem('access_token');
  if (token) {
    this.ifToken=true;
}else{
  this.ifToken=false;
}

let cartData = this.cartservice.getCartData();
this.cartservice.total1.next(cartData.length)
this.cartservice.total1.subscribe(res=>{
this.totalPriceOfCart=res;

})
}

getuser(){
  this.authservice.getUserDetails().subscribe((res:any)=>{
   this.userName=res.data.username
   console.log(res)
  })
}

}