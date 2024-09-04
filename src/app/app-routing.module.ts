import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PrimitiveNonprimitveParentComponent } from './primitive-nonprimitve-parent/primitive-nonprimitve-parent.component';
import { CdsUsingCdrComponent } from './cds-using-cdr/cds-using-cdr.component';
import { CdsScenariosComponent } from './cds-scenarios/cds-scenarios.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'primitive-nonprimitive-parent',
    component: PrimitiveNonprimitveParentComponent,
    data: {forChild:false}
  },
  {
    path: 'primitive-nonprimitive-parent-child',
    component: PrimitiveNonprimitveParentComponent,
    data: {forChild:true}
  },
  {
    path: 'cds-using-cdr',
    component: CdsUsingCdrComponent
  },
  {
    path: 'cds-scenarios',
    component: CdsScenariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
