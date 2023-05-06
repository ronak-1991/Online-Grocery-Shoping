import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  category:any;
  products:any;

  constructor(private _categoryService:CategoryService,private product:ProductsService,private cartservice:CartService,
    private _snackBar: MatSnackBar,private toaster:ToastrService){
    this.getAllCategory()
    this.getAllProducts()
    }
  
  
  ngOnInit(){
    window.scroll(0,0)
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
  console.log(this.products)
})
}
}
