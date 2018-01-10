import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfApiComponent } from './golf-api.component';

describe('GolfApiComponent', () => {
  let component: GolfApiComponent;
  let fixture: ComponentFixture<GolfApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
