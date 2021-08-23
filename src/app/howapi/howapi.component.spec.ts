import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowapiComponent } from './howapi.component';

describe('HowapiComponent', () => {
  let component: HowapiComponent;
  let fixture: ComponentFixture<HowapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
