import { IService } from './service.interface';
import { Service } from './service.model';

const insertIntoDB = async (payload: IService): Promise<IService> => {
  const result = await Service.create(payload);
  return result;
};
const getAllFromDB = async (): Promise<IService[]> => {
  const result = await Service.find().populate('category');
  return result;
};

export const ServiceService = {
  insertIntoDB,
  getAllFromDB,
};
