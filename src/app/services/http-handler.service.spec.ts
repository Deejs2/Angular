import { TestBed } from '@angular/core/testing';

import { HttpHandlerService } from './http-handler.service';

describe('HttpHandlerService', () => {
  let service: HttpHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
