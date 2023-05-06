import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-explore-category',
  templateUrl: './explore-category.component.html',
  styleUrls: ['./explore-category.component.scss']
})
export class ExploreCategoryComponent {
category:any;
  constructor(private _categoryService:CategoryService){
    this.getAllCategory()
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

  // category:any=[
  //   {cat_name:"Peach", qauntity:20},
  //   {cat_name:"vagetables", qauntity:220},
  //   {cat_name:"strawbary", qauntity:10},
  //   {cat_name:"apple", qauntity:40},
  //   {cat_name:"Orange", qauntity:25},
  //   {cat_name:"potato", qauntity:3},
  //   {cat_name:"carrot", qauntity:9}
  // ]
}
