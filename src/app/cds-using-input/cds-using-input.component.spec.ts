import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsUsingInputComponent } from './cds-using-input.component';

describe('CdsUsingInputComponent', () => {
  let component: CdsUsingInputComponent;
  let fixture: ComponentFixture<CdsUsingInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdsUsingInputComponent]
    });
    fixture = TestBed.createComponent(CdsUsingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
