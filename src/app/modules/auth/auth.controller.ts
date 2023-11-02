import { Request, Response } from 'express';
import catchasync from '../../../shared/catchAsync';
import { authService } from './auth.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const login = catchasync(async (req: Request, res: Response) => {
  const result =await authService.login(req.body);
 
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'Login successful',
  });
});

export const authController = {
  login,
};
