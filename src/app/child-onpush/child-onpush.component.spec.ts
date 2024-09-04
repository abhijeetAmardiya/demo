import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnpushComponent } from './child-onpush.component';

describe('ChildOnpushComponent', () => {
  let component: ChildOnpushComponent;
  let fixture: ComponentFixture<ChildOnpushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOnpushComponent]
    });
    fixture = TestBed.createComponent(ChildOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
