import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiHierarchicalDemonstrateComponent } from './di-hierarchical-demonstrate.component';

describe('DiHierarchicalDemonstrateComponent', () => {
  let component: DiHierarchicalDemonstrateComponent;
  let fixture: ComponentFixture<DiHierarchicalDemonstrateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiHierarchicalDemonstrateComponent]
    });
    fixture = TestBed.createComponent(DiHierarchicalDemonstrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
