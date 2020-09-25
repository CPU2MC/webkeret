import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasodikFelvonasComponent } from './masodik-felvonas.component';

describe('MasodikFelvonasComponent', () => {
  let component: MasodikFelvonasComponent;
  let fixture: ComponentFixture<MasodikFelvonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasodikFelvonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasodikFelvonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
