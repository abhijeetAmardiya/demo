import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveNonprimitveParentComponent } from './primitive-nonprimitve-parent.component';

describe('PrimitiveNonprimitveParentComponent', () => {
  let component: PrimitiveNonprimitveParentComponent;
  let fixture: ComponentFixture<PrimitiveNonprimitveParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimitiveNonprimitveParentComponent]
    });
    fixture = TestBed.createComponent(PrimitiveNonprimitveParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
