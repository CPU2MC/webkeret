import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csapda3Component } from './csapda3.component';

describe('Csapda3Component', () => {
  let component: Csapda3Component;
  let fixture: ComponentFixture<Csapda3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csapda3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csapda3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
