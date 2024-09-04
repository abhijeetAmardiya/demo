import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cds-using-cdr',
  templateUrl: './cds-using-cdr.component.html',
  styleUrls: ['./cds-using-cdr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdsUsingCdrComponent {

  count:number =0

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(()=>{
      this.count++;
    },1000)
  }

  detectChanges() {
    console.log('detectChanges',this.count)
    this.cdr.detectChanges()
  }

}
