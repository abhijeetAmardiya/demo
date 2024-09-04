import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiHierarchicalChildComponent } from './di-hierarchical-child.component';

describe('DiHierarchicalChildComponent', () => {
  let component: DiHierarchicalChildComponent;
  let fixture: ComponentFixture<DiHierarchicalChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiHierarchicalChildComponent]
    });
    fixture = TestBed.createComponent(DiHierarchicalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
