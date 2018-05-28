import { TestBed, inject } from '@angular/core/testing';

import { RestUrlService } from './rest-url.service';

describe('RestUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestUrlService]
    });
  });

  it('should be created', inject([RestUrlService], (service: RestUrlService) => {
    expect(service).toBeTruthy();
  }));
});
