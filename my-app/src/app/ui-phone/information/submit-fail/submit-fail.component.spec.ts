import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFailComponent } from './submit-fail.component';

describe('SubmitFailComponent', () => {
  let component: SubmitFailComponent;
  let fixture: ComponentFixture<SubmitFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
