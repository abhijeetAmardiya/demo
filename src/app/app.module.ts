import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildOnpushComponent } from './child-onpush/child-onpush.component';
import { ChildDefaultComponent } from './child-default/child-default.component';
import { PrimitiveNonprimitveParentComponent } from './primitive-nonprimitve-parent/primitive-nonprimitve-parent.component';
import { PrimitiveNonprimitveChildComponent } from './primitive-nonprimitve-child/primitive-nonprimitve-child.component';
import { CdsUsingCdrComponent } from './cds-using-cdr/cds-using-cdr.component';
import { CdsScenariosComponent } from './cds-scenarios/cds-scenarios.component';
import { CdsUsingInputComponent } from './cds-using-input/cds-using-input.component';
import { CdsUsingEventComponent } from './cds-using-event/cds-using-event.component';
import { CdsUsingObservableComponent } from './cds-using-observable/cds-using-observable.component';
import { DiHierarchicalComponent } from './di-hierarchical/di-hierarchical.component';
import { DiHierarchicalDemonstrateComponent } from './di-hierarchical-demonstrate/di-hierarchical-demonstrate.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildOnpushComponent,
    ChildDefaultComponent,
    PrimitiveNonprimitveParentComponent,
    PrimitiveNonprimitveChildComponent,
    CdsUsingCdrComponent,
    CdsScenariosComponent,
    CdsUsingInputComponent,
    CdsUsingEventComponent,
    CdsUsingObservableComponent,
    DiHierarchicalComponent,
    DiHierarchicalDemonstrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
