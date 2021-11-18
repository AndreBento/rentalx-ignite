import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoiresRepository: ICategoriesRepository) {}

  excute(): Category[] {
    const categories = this.categoiresRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
