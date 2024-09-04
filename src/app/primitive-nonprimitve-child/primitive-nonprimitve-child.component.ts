import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-primitive-nonprimitve-child',
  templateUrl: './primitive-nonprimitve-child.component.html',
  styleUrls: ['./primitive-nonprimitve-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimitiveNonprimitveChildComponent {

  @Input() primitiveData:number = 0
  @Input() nonPrimitiveData:{count:number} = {count:0}

  childData:number = 0

  updateChildData() {
    this.childData++;
  }

}
