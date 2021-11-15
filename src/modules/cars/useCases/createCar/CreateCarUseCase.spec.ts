import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

describe('Create Car', () => {
  let createCarUseCase: CreateCarUseCase;
  let carsRepositoryInMemory: CarsRepositoryInMemory;

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able create a new car', async () => {
    await createCarUseCase.execute({
      name: 'Car 01',
      description: 'Car 01 description',
      brand: 'Brand Car 01',
      daily_rate: 122,
      fine_amount: 11111,
      license_plate: 'ABB-CCCD',
      category_id: 'asdasd-asdasdk-asdasd',
    });
  });

  it('should not be able create a new car with the same license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car 02',
        description: 'Car 02 description',
        brand: 'Brand Car 02',
        daily_rate: 122,
        fine_amount: 11111,
        license_plate: 'ABB-CCC',
        category_id: 'asdasd-asdasdk-asdasd',
      });

      await createCarUseCase.execute({
        name: 'Car 03',
        description: 'Car 03 description',
        brand: 'Brand Car 03',
        daily_rate: 122,
        fine_amount: 11111,
        license_plate: 'ABB-CCC',
        category_id: 'asdasd-asdasdk-asdasd',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
