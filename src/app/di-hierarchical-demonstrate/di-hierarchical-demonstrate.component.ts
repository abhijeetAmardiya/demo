import { Component } from '@angular/core';
import { DiHierarchicalService } from '../services/di-hierarchical.service';

@Component({
  selector: 'app-di-hierarchical-demonstrate',
  templateUrl: './di-hierarchical-demonstrate.component.html',
  styleUrls: ['./di-hierarchical-demonstrate.component.scss'],
  providers: [DiHierarchicalService]
})
export class DiHierarchicalDemonstrateComponent {
  constructor(public diHierarchicalService: DiHierarchicalService) {}

}
