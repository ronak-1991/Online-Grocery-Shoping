import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  spinner=true;
  ngOnInit() {
    window.scroll(0, 0)
    setTimeout(() => {
      this.spinner=false;
    }, 5000);
    
  }


  top_rated=[
    {fruits:'orange'},
    {fruits:'orange'},
    {fruits:'orange'}
  ]
}
