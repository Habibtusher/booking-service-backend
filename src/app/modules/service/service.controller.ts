import { Request, Response } from 'express';
import catchasync from '../../../shared/catchAsync';
import { ServiceService } from './service.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const insertIntoDB = catchasync(async (req: Request, res: Response) => {
  const result = await ServiceService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Success created',
    data: result,
  });
});
const getAllFromDB = catchasync(async (req: Request, res: Response) => {
  const result = await ServiceService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successully created retrived',
    data: result,
  });
});

export const ServicesController = {
    getAllFromDB,
    insertIntoDB
}