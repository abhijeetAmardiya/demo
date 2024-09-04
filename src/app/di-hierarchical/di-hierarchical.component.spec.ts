import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiHierarchicalComponent } from './di-hierarchical.component';

describe('DiHierarchicalComponent', () => {
  let component: DiHierarchicalComponent;
  let fixture: ComponentFixture<DiHierarchicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiHierarchicalComponent]
    });
    fixture = TestBed.createComponent(DiHierarchicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
