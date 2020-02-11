import { TestBed } from '@angular/core/testing';

import { MiLibreriaService } from './mi-libreria.service';

describe('MiLibreriaService', () => {
  let service: MiLibreriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiLibreriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
