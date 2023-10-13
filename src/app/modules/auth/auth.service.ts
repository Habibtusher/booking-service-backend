import httpStatus from 'http-status';
import ApiError from '../../../error/ApiError';
import { User } from '../user/user.model';
import { ILoginData } from './auth.const';
import bcrypt from 'bcrypt';
import { jwtHelpers } from '../../../helper/jwtHelper';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

const login = async (payload: ILoginData) => {
  const {password } = payload;
  const isUserExist = await User.isUserExist(payload.email);
  if (!isUserExist) {
    throw new ApiError(httpStatus.BAD_REQUEST,'User does not exist');
  }
  if (
    isUserExist?.password &&
    (!await bcrypt.compare(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED,'Password is incorrect');
  }
  const {  role, email } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { email, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  return {
    accessToken
  }
};

export const authService = {
  login,
};
