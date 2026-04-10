import { faker } from '@faker-js/faker';
import { Category } from '../../../domain/interfaces/category.interface';

export class CategoriesService {
  getAllCategories(countCategories: number): Category[] {
    const categories: Category[] = [];

    for (let i = 1; i <= countCategories; i++) {
      categories.push({
        id: i,
        name: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        status: faker.helpers.arrayElement(['Activa', 'Inactiva']),
      });
    }

    return categories;
  }
}