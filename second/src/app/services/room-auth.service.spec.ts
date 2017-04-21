/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomAuthService } from './room-auth.service';

describe('RoomAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomAuthService]
    });
  });

  it('should ...', inject([RoomAuthService], (service: RoomAuthService) => {
    expect(service).toBeTruthy();
  }));
});
