import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  
  count:number =0

  constructor() {
    setInterval(()=>{
      this.count++;
    },1000)
  }

}
