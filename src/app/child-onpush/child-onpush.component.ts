import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-onpush',
  templateUrl: './child-onpush.component.html',
  styleUrls: ['./child-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOnpushComponent {
  count:number = 0

  constructor() {
    setInterval(()=>{
      this.count++;
    },1000)
  }
}
