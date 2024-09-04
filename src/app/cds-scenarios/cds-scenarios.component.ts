import { Component } from '@angular/core';

@Component({
  selector: 'app-cds-scenarios',
  templateUrl: './cds-scenarios.component.html',
  styleUrls: ['./cds-scenarios.component.scss']
})
export class CdsScenariosComponent {

  way = 'input'
  count:number = 0

  constructor() {
    setInterval(()=>{this.count++;},1000)
  }

  using(way: string) {
    this.way = way
    this.count = 0
  }
}
