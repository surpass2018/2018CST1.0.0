import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInfoComponent } from './submit-info.component';

describe('SubmitInfoComponent', () => {
  let component: SubmitInfoComponent;
  let fixture: ComponentFixture<SubmitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
