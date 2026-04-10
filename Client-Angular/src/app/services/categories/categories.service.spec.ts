import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { CategoriesService } from './categories.service';
import { Category } from '../../interfaces/category.interface';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  const mockCategories: Category[] = [
    {
      id: 1,
      name: 'Categoría 1',
      description: 'Descripción 1',
      status: 'Activa',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(CategoriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe obtener categorías desde la API', () => {
    service.getCategories(10).subscribe((categories) => {
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne('api/categories/10');
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);
  });
});