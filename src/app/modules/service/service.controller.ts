import { Request, Response } from 'express';
import catchasync from '../../../shared/catchAsync';
import { ServiceService } from './service.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { reviewsFilterableFields } from '../../../constant/common';
import { paginationFields } from '../../../constant/pagination';
import { IService } from './service.interface';

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
  const filters = pick(req.query, reviewsFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await ServiceService.getAllFromDB(filters, paginationOptions);
  sendResponse<IService[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students fetched successfully !',
    meta: result.meta,
    data: result.data,
  });
});
const updateService = catchasync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    const result = await ServiceService.updatedService(id, updatedData);
  
    sendResponse<IService>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service updated successfully !',
      data: result,
    });
  });
  const deleteService = catchasync(async (req: Request, res: Response) => {
    const id = req.params.id;
  
    const result = await ServiceService.deleteService(id);
  
    sendResponse<IService>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service deleted successfully !',
      data: result,
    });
  });
export const ServicesController = {
  getAllFromDB,
  insertIntoDB,
  deleteService,
  updateService
};
