import { Component, Host, Self, SkipSelf } from '@angular/core';
import { DiHierarchicalService } from '../services/di-hierarchical.service';

@Component({
  selector: 'app-di-hierarchical-child',
  templateUrl: './di-hierarchical-child.component.html',
  styleUrls: ['./di-hierarchical-child.component.scss'],
  providers: [DiHierarchicalService]
})
export class DiHierarchicalChildComponent {
  // constructor(public diHierarchicalService: DiHierarchicalService) {
  //   this.diHierarchicalService.data = 'Data modified by ChildComponent';
  // }
  // constructor(@SkipSelf() public diHierarchicalService: DiHierarchicalService) {
  //   // this.diHierarchicalService.data = 'Data modified by ChildComponent';
  // }

  constructor(@SkipSelf() public diHierarchicalService: DiHierarchicalService) {
    this.diHierarchicalService.data = 'Data modified by ChildComponent';
  }
}
