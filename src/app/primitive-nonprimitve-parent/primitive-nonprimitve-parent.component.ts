import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primitive-nonprimitve-parent',
  templateUrl: './primitive-nonprimitve-parent.component.html',
  styleUrls: ['./primitive-nonprimitve-parent.component.scss']
})
export class PrimitiveNonprimitveParentComponent {

  forChild: boolean = false
  
  primitiveData:number = 0
  nonPrimitiveData:{count:number} = {count:0}

  constructor(route: ActivatedRoute) {
    this.forChild = route.snapshot.data['forChild']
    console.log("route.snapshot.data['forChild']",route.snapshot.data['forChild'])
  }


  updatePrimitveData() {
    this.primitiveData++;
  }

  updateNonPrimitveData() {
    this.nonPrimitiveData = {...this.nonPrimitiveData, count: this.nonPrimitiveData.count+1};
    // this.nonPrimitiveData.count+1;
  }
}
