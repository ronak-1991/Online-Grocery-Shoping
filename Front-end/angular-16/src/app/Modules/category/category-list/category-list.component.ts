import { Component } from '@angular/core';
import { DataService } from 'src/app/Shared/services/data_Service/data.service';


const ELEMENT_DATA: any[] = [
  { id: 1, name: 'Deep Javiya', work: 'Frontend Devloper', project: 'Flexy Angular', priority: 'Low', badge: 'badge-info', budget: '$3.9k' },
  { id: 2, name: 'Nirav Joshi', work: 'Project Manager', project: 'Hosting Press HTML', priority: 'Medium', badge: 'badge-primary', budget: '$24.5k' },
  { id: 3, name: 'Sunil Joshi', work: 'Web Designer', project: 'Elite Admin', priority: 'High', badge: 'badge-danger', budget: '$12.8k' },
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Critical', badge: 'badge-success', budget: '$2.4k' },
];

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'action'];
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
