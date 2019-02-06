import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMacIntroComponent } from './i-mac-intro.component';

describe('IMacIntroComponent', () => {
  let component: IMacIntroComponent;
  let fixture: ComponentFixture<IMacIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMacIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMacIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
