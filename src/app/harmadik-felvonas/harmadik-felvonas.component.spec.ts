import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmadikFelvonasComponent } from './harmadik-felvonas.component';

describe('HarmadikFelvonasComponent', () => {
  let component: HarmadikFelvonasComponent;
  let fixture: ComponentFixture<HarmadikFelvonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmadikFelvonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmadikFelvonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
