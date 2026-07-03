import { TestBed } from '@angular/core/testing';

import { ProductSelection } from './product-selection';

describe('ProductSelection', () => {
  let service: ProductSelection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSelection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
