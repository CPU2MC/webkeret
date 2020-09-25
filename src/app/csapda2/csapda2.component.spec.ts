import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csapda2Component } from './csapda2.component';

describe('Csapda2Component', () => {
  let component: Csapda2Component;
  let fixture: ComponentFixture<Csapda2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csapda2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csapda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
