import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsScenariosComponent } from './cds-scenarios.component';

describe('CdsScenariosComponent', () => {
  let component: CdsScenariosComponent;
  let fixture: ComponentFixture<CdsScenariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdsScenariosComponent]
    });
    fixture = TestBed.createComponent(CdsScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
