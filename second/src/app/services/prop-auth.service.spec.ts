/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropAuthService } from './prop-auth.service';

describe('PropAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropAuthService]
    });
  });

  it('should ...', inject([PropAuthService], (service: PropAuthService) => {
    expect(service).toBeTruthy();
  }));
});
