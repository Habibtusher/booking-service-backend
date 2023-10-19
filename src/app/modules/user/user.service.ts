import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  payload.role = 'user';
  const result = await User.create(payload);
  return result;
};
const getAllUser = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};
const singleUser = async (email: string) => {
  const result = await User.findOne({ email: email });
  return result;
};
const uploadImage = async (email: string, data:any) => {

  const result = await User.findOneAndUpdate({ email: email }, data);
  return result;
};
const updateProfile = async (email: string, data:Partial<IUser>) => {

  const result = await User.findOneAndUpdate({ email: email }, data);
  return result;
};
export const userService = {
  createUser,
  getAllUser,
  singleUser,
  uploadImage,
  updateProfile
};
