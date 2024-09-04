import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsUsingCdrComponent } from './cds-using-cdr.component';

describe('CdsUsingCdrComponent', () => {
  let component: CdsUsingCdrComponent;
  let fixture: ComponentFixture<CdsUsingCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdsUsingCdrComponent]
    });
    fixture = TestBed.createComponent(CdsUsingCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
