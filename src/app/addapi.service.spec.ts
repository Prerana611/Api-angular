import { TestBed } from '@angular/core/testing';

import { AddapiService } from './addapi.service';

describe('AddapiService', () => {
  let service: AddapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
