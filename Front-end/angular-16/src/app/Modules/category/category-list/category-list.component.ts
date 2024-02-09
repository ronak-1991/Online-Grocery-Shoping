import { Component } from '@angular/core';
import { DataService } from 'src/app/Shared/services/data_Service/data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  displayedColumns: string[] = ['id', 'assigned'];
  dataSource:any [] = [];

  category:any;
  products:any;

  constructor(private _dataservice:DataService,
  ){
    this.getAllCategory()
   
    }
  
  
  ngOnInit(){
    window.scroll(0,0)
  }

getAllCategory(){
  this._dataservice.getCategory().subscribe((res:any)=>{
    this.dataSource=res.data;
    console.log(res)
  })
}
}
