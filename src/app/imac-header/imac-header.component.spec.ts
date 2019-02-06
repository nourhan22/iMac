import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImacHeaderComponent } from './imac-header.component';

describe('ImacHeaderComponent', () => {
  let component: ImacHeaderComponent;
  let fixture: ComponentFixture<ImacHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImacHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImacHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
