import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongBtnComponent } from './long-btn.component';

describe('LongBtnComponent', () => {
  let component: LongBtnComponent;
  let fixture: ComponentFixture<LongBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
