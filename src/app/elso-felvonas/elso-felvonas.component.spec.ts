import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsoFelvonasComponent } from './elso-felvonas.component';

describe('ElsoFelvonasComponent', () => {
  let component: ElsoFelvonasComponent;
  let fixture: ComponentFixture<ElsoFelvonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElsoFelvonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsoFelvonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
