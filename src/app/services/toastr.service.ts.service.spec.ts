import { TestBed } from '@angular/core/testing';

import { ToastrServiceTsService } from './toastr.service.ts.service';

describe('ToastrServiceTsService', () => {
  let service: ToastrServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
