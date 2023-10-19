import { Request, Response } from 'express';
import catchasync from '../../../shared/catchAsync';
import { ReviewService } from './reviews.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const insertIntoDB = catchasync(async (req: Request, res: Response) => {
  const result = await ReviewService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successully',
    data: result,
  });
});
const getAllFromDB = catchasync(async (req: Request, res: Response) => {
  const result = await ReviewService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrived successully',
    data: result,
  });
});
export const ReviewController ={
    insertIntoDB,
    getAllFromDB
}