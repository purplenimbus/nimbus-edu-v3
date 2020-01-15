import { TestBed } from '@angular/core/testing';

import { ENVService } from './env.service';
import { environment } from '../../../../environments/environment.prod';

describe('ENVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ENVService = TestBed.get(ENVService);
    expect(service).toBeTruthy();
  });

  describe('when environment is production', () => {
  	spyOnProperty(environment, 'production').and.returnValue(true);
  	const service: ENVService = TestBed.get(ENVService);
  	expect(service.ENV.production).toEqual(true);
  });

  describe('when the enviroment is development', () => {
  	spyOnProperty(environment, 'production').and.returnValue(false);
  	const service: ENVService = TestBed.get(ENVService);
  	expect(service.ENV.production).toEqual(false);
  });
});
