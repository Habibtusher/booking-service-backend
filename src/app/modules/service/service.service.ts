import { SortOrder } from 'mongoose';
import { IService } from './service.interface';
import { Service } from './service.model';
import { calculatePagination } from '../../../helper/paginationHelper';
import { IGenericResponse, IReviewFilters } from '../../../interface/common';
import { IPaginatioOpts } from '../../../interface/pagination';
import { reviewsSearchableFields } from '../../../constant/common';
import ApiError from '../../../error/ApiError';
import httpStatus from 'http-status';

const insertIntoDB = async (payload: IService): Promise<IService> => {
  const result = await Service.create(payload);
  return result;
};
const getAllFromDB = async (
  filters: IReviewFilters,
  paginationOptions: IPaginatioOpts
): Promise<IGenericResponse<IService[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: reviewsSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }
  // Filters needs $and to fullfill all the conditions
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Service.find(whereConditions)
    .populate('category')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await Service.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const deleteService = async (id: string): Promise<IService | null> => {
  const res = await Service.findOneAndDelete({ _id: id });
  return res;
};
const singleService = async (id: string): Promise<IService | null> => {
  const res = await Service.findById({ _id: id });
  return res;
};
const updatedService = async (
  id: string,
  payload: Partial<IService>
): Promise<IService | null> => {
  const updatedService = await Service.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!updatedService) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service not found');
  }
  return updatedService;
};
export const ServiceService = {
  insertIntoDB,
  getAllFromDB,
  deleteService,
  updatedService,
  singleService
};
