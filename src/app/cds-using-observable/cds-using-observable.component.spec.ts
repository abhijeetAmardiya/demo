import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsUsingObservableComponent } from './cds-using-observable.component';

describe('CdsUsingObservableComponent', () => {
  let component: CdsUsingObservableComponent;
  let fixture: ComponentFixture<CdsUsingObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdsUsingObservableComponent]
    });
    fixture = TestBed.createComponent(CdsUsingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
