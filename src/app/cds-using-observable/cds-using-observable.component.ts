import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cds-using-observable',
  templateUrl: './cds-using-observable.component.html',
  styleUrls: ['./cds-using-observable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdsUsingObservableComponent {

  count$:Observable<number>;

  constructor() {
    this.count$ = new Observable(subcriber =>{
      let value = 0;
      subcriber.next(value);
      setInterval(()=>{
        value++;
        subcriber.next(value);
      },1000)
    })
  }

}
