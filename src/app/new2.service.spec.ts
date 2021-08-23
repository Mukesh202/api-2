import { TestBed } from '@angular/core/testing';

import { New2Service } from './new2.service';

describe('New2Service', () => {
  let service: New2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(New2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
