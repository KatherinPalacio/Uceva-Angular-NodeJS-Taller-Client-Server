import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { BranchesService } from './branches.service';
import { Branch } from '../../interfaces/branch.interface';

describe('BranchesService', () => {
  let service: BranchesService;
  let httpMock: HttpTestingController;

  const mockBranches: Branch[] = [
    {
      id: 1,
      name: 'Sucursal 1',
      city: 'Tuluá',
      address: 'Calle 1 # 2-3',
      status: 'Activa',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BranchesService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(BranchesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe obtener sucursales desde la API', () => {
    service.getBranches(10).subscribe((branches) => {
      expect(branches).toEqual(mockBranches);
    });

    const req = httpMock.expectOne('api/branches/10');
    expect(req.request.method).toBe('GET');
    req.flush(mockBranches);
  });
});