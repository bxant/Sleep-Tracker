import { TestBed } from '@angular/core/testing';

import { LogsleepService } from './logsleep.service';

describe('LogsleepService', () => {
  let service: LogsleepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsleepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
