import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiHierarchicalParentComponent } from './di-hierarchical-parent.component';

describe('DiHierarchicalParentComponent', () => {
  let component: DiHierarchicalParentComponent;
  let fixture: ComponentFixture<DiHierarchicalParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiHierarchicalParentComponent]
    });
    fixture = TestBed.createComponent(DiHierarchicalParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
