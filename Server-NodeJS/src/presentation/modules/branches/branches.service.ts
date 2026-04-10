import { faker } from '@faker-js/faker';
import { Branch } from '../../../domain/interfaces/branch.interface';

export class BranchesService {
  getAllBranches(countBranches: number): Branch[] {
    const branches: Branch[] = [];

    for (let i = 1; i <= countBranches; i++) {
      branches.push({
        id: i,
        name: `Sucursal ${faker.location.city()}`,
        city: faker.location.city(),
        address: faker.location.streetAddress(),
        status: faker.helpers.arrayElement(['Activa', 'Inactiva']),
      });
    }

    return branches;
  }
}