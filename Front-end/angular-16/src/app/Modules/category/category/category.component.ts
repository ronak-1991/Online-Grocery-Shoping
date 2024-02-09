import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Shared/services/data_Service/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categoryForm!:FormGroup

  constructor(private _dataservice:DataService,
    private _fb:FormBuilder,
    private _route:ActivatedRoute,
    private _router:Router
    ){
  
 this._initForm()
  }


  public submitForm(){

this._dataservice.AddCategory(this.categoryForm.value).subscribe((res:any)=>{
  if(res.success){
this._router.navigate(['/category'])
  }
})

  }



  private _initForm(){
    this.categoryForm = this._fb.group({
      id:[0],
      title : [],
      parent_id: ['0']
    })
      }


}
