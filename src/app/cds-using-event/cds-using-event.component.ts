import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cds-using-event',
  templateUrl: './cds-using-event.component.html',
  styleUrls: ['./cds-using-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdsUsingEventComponent {

  count:number =0

  constructor() {
    setInterval(()=>{
      this.count++;
    },1000)
  }

  updateCount() {
    this.count = this.count
  }
}
