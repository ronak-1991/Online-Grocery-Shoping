import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  spinner=true;
  constructor(private router: Router) {}
ngOnInit(){
  window.scroll(0, 0)
  setTimeout(() => {
    this.spinner=false;
  }, 5000);
    window.scroll(0,0)
  setTimeout(() => {
    this.router.navigate(['']);
  }, 5000);
 }
}
