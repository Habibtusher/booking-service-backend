import { Model } from "mongoose";

export type UserName = {
    firstName: string;
    lastName: string;
    middleName: string;
  };
  
export type IUser = {
    name?: UserName;
    profileImage?: string;
    role: 'admin' | 'user' | 'super_admin';
    email: string;
    password: string;
    gender?: 'male' | 'female';
    permanentAddress?: string;
    presentAddress?: string;
    termsAndCon: boolean,
  };
  export type UserModel = {
    isUserExist(
      id: string
    ): Promise<Pick<IUser,  'password' | 'role' | 'email'>>;
    isPasswordMatched(
      givenPassword: string,
      savedPassword: string
    ): Promise<boolean>;
  } & Model<IUser>;
