import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyertesDialogComponent } from './nyertes-dialog.component';

describe('NyertesDialogComponent', () => {
  let component: NyertesDialogComponent;
  let fixture: ComponentFixture<NyertesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyertesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyertesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
