import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablereactComponent } from './tablereact.component';

describe('TablereactComponent', () => {
  let component: TablereactComponent;
  let fixture: ComponentFixture<TablereactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablereactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablereactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
