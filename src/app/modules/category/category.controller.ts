import { Request, Response } from 'express';
import catchasync from '../../../shared/catchAsync';
import { CategoryService } from './category.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const insertIntoDB = catchasync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await CategoryService.insertIntoDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});
const getAllFromDB = catchasync(async (req: Request, res: Response) => {
 
  const result = await CategoryService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrived successfully',
    data: result,
  });
});

export const CategoryController = {
  insertIntoDB,
  getAllFromDB
};
