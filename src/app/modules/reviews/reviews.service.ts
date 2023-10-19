import { IReview } from './reviews.interface';
import { Review } from './reviews.model';

const insertIntoDB = async (payload: IReview): Promise<IReview> => {
  const result = await Review.create(payload);
  return result;
};
const getAllFromDB = async (): Promise<IReview[]> => {
  const result = await Review.find();
  return result;
};
export const ReviewService = {
    insertIntoDB,
    getAllFromDB
}