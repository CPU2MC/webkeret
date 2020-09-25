import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsapdaComponent } from './csapda.component';

describe('CsapdaComponent', () => {
  let component: CsapdaComponent;
  let fixture: ComponentFixture<CsapdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsapdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsapdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
