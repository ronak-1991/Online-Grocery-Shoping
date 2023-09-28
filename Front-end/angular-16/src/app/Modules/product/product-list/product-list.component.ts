import { Component } from '@angular/core';
import { DataService } from 'src/app/Shared/services/data_Service/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  displayedColumns: string[] = ['id', 'productName', 'amount', 'isActive', 'slug', 'action'];
  dataSource:any [] = [];

  products:any;

  constructor(private _dataservice:DataService){

    this.getAllProducts()
    }
  
  
  ngOnInit(){
    window.scroll(0,0)
  }


getAllProducts(){
this._dataservice.getAllProduct().subscribe((res:any)=>{
  this.dataSource=res.data
  console.log(res.data)
})
}
}
