import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveNonprimitveChildComponent } from './primitive-nonprimitve-child.component';

describe('PrimitiveNonprimitveChildComponent', () => {
  let component: PrimitiveNonprimitveChildComponent;
  let fixture: ComponentFixture<PrimitiveNonprimitveChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimitiveNonprimitveChildComponent]
    });
    fixture = TestBed.createComponent(PrimitiveNonprimitveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
