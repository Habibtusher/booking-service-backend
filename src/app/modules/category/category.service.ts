import { ICategory } from './category.interface';
import { Category } from './category.model';

const insertIntoDB = async (payload: ICategory): Promise<ICategory> => {
  const result = await Category.create(payload);
  return result;
};
const getAllFromDB = async (): Promise<ICategory[]> => {
  const result = await Category.find();
  return result;
};

export const CategoryService = {
  insertIntoDB,
  getAllFromDB,
};
