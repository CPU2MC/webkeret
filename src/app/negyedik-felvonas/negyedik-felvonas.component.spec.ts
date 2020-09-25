import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegyedikFelvonasComponent } from './negyedik-felvonas.component';

describe('NegyedikFelvonasComponent', () => {
  let component: NegyedikFelvonasComponent;
  let fixture: ComponentFixture<NegyedikFelvonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegyedikFelvonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegyedikFelvonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
