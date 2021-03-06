import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TokenInterceptorService } from './token-interceptor.service';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
    });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('there must be a method called intercept.', () => {
    let intercept = spyOn(service, 'intercept')
    service.intercept("", "");
    expect(intercept).toHaveBeenCalled();
  });
});