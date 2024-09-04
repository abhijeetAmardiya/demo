import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-default',
  templateUrl: './child-default.component.html',
  styleUrls: ['./child-default.component.scss']
})
export class ChildDefaultComponent {
  count:number = 0

  constructor() {
    setInterval(()=>{
      this.count++;
    },1000)
  }
}
