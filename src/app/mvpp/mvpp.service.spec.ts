import { TestBed } from '@angular/core/testing';

import { MvppService } from './mvpp.service';

describe('MvppService', () => {
  let service: MvppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
