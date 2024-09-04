import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsUsingEventComponent } from './cds-using-event.component';

describe('CdsUsingEventComponent', () => {
  let component: CdsUsingEventComponent;
  let fixture: ComponentFixture<CdsUsingEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdsUsingEventComponent]
    });
    fixture = TestBed.createComponent(CdsUsingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
