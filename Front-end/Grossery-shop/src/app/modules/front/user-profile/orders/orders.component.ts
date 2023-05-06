import { Component } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders:any;
  productOfEachOdr:any

constructor(private orderservice:OrderService){

}

  ngOnInit(){
    window.scroll(0,0)
    this.getAllOrders()
  }
  panelOpenState = false;

  getAllOrders(){
    this.orderservice.getAllOrders().subscribe(res=>{
      console.log(res)
      this.orders=res.data.orders
      // this.productOfEachOdr=res.data.orders.order_items


      console.log(this.orders);
      
    })
  }

}
