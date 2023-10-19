import { Request, Response } from 'express';
import catchasync from '../../../shared/catchAsync';
import { userService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const insertIntoDB = catchasync(async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});
const getAllFromDB = catchasync(async (req: Request, res: Response) => {
  const result = await userService.getAllUser();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrived successfully',
    data: result,
  });
});
const getSingleUser = catchasync(async (req: Request, res: Response) => {
  
  const result = await userService.singleUser(req.params.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrived successfully',
    data: result,
  });
});
const uploadUserPhoto = catchasync(async (req: Request, res: Response) => {
  
  const result = await userService.uploadImage(req.params.email,req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile picture updated successfully',
    data: result,
  });
});
const updateProfile = catchasync(async (req: Request, res: Response) => {
  
  const result = await userService.updateProfile(req.params.email,req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: result,
  });
});


export const userController ={
    insertIntoDB,
    getAllFromDB,
    getSingleUser,
    uploadUserPhoto,
    updateProfile
}