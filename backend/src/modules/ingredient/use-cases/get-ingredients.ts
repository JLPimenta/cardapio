import IngredientsRepository from '../repositories/ingredients-repository';

export class GetIngredientsUseCase {
  constructor(private readonly ingredientsRepository: IngredientsRepository) {}

  async execute() {
    const ingredients = await this.ingredientsRepository.findAll();

    return ingredients;
  }
}
