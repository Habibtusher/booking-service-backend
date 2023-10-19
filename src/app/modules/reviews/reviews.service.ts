import { SortOrder } from 'mongoose';
import { IReviewFilters } from '../../../interface/common';
import { IPaginatioOpts } from '../../../interface/pagination';
import { IReview } from './reviews.interface';
import { Review } from './reviews.model';
import { calculatePagination } from '../../../helper/paginationHelper';
import { reviewsSearchableFields } from '../../../constant/common';

const insertIntoDB = async (payload: IReview): Promise<IReview> => {
  const result = await Review.create(payload);
  return result;
};
const getAllFromDB = async ( ): Promise<IReview[]> => {

  const result = await Review.find();
  return result;
};
export const ReviewService = {
    insertIntoDB,
    getAllFromDB
}