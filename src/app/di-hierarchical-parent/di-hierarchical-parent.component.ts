import { Component, Host, Self } from '@angular/core';
import { DiHierarchicalService } from '../services/di-hierarchical.service';

@Component({
  selector: 'app-di-hierarchical-parent',
  templateUrl: './di-hierarchical-parent.component.html',
  styleUrls: ['./di-hierarchical-parent.component.scss'],
  providers: [DiHierarchicalService]
})
export class DiHierarchicalParentComponent {
  constructor(public diHierarchicalService: DiHierarchicalService) {
    this.diHierarchicalService.data = 'Data modified by ParentComponent';
  }
}
