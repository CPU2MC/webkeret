import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TovabbDialogComponent } from './tovabb-dialog.component';

describe('TovabbDialogComponent', () => {
  let component: TovabbDialogComponent;
  let fixture: ComponentFixture<TovabbDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TovabbDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TovabbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
