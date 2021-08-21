import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationsUseCase {
  private specificationRepository: ISpecificationsRepository;

  constructor(specificationRepository: ISpecificationsRepository) {
    this.specificationRepository = specificationRepository;
  }

  execute({ name, description }: IRequest): Specification {
    const specificationAreadyExisits =
      this.specificationRepository.findByName(name);

    if (specificationAreadyExisits) {
      throw new Error('Specification already exists');
    }

    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
export { CreateSpecificationsUseCase };
