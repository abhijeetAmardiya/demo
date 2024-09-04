import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PrimitiveNonprimitveParentComponent } from './primitive-nonprimitve-parent/primitive-nonprimitve-parent.component';
import { CdsUsingCdrComponent } from './cds-using-cdr/cds-using-cdr.component';
import { CdsScenariosComponent } from './cds-scenarios/cds-scenarios.component';
import { DiHierarchicalComponent } from './di-hierarchical/di-hierarchical.component';
import { DiHierarchicalDemonstrateComponent } from './di-hierarchical-demonstrate/di-hierarchical-demonstrate.component';

const routes: Routes = [
  {
    path: 'cds/parent',
    component: ParentComponent
  },
  {
    path: 'cds/primitive-nonprimitive-parent',
    component: PrimitiveNonprimitveParentComponent,
    data: {forChild:false}
  },
  {
    path: 'cds/primitive-nonprimitive-parent-child',
    component: PrimitiveNonprimitveParentComponent,
    data: {forChild:true}
  },
  {
    path: 'cds/cds-using-cdr',
    component: CdsUsingCdrComponent
  },
  {
    path: 'cds/cds-scenarios',
    component: CdsScenariosComponent
  },
  {
    path: 'di/hierarchical',
    component: DiHierarchicalComponent
  },
  {
    path: 'di/hierarchical-demonstrate',
    component: DiHierarchicalDemonstrateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
