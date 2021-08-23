import { TestBed } from '@angular/core/testing';

import { HowapiService } from './howapi.service';

describe('HowapiService', () => {
  let service: HowapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
