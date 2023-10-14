/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';
const UserSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: {
        firstName: {
          type: String,
         
        },
        lastName: {
          type: String,
         
        },
        middleName: {
          type: String,
         
        },
      },
      
    },
    gender: {
      type: String,
      enum: ['male', 'female','other'],
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'super_admin'],
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
        type: String,
        required:true,

      
    },
    presentAddress: {
      type: String,
    
    },
    permanentAddress: {
      type: String,
     
    },
    profileImage: {
      type: String,
    },
    termsAndCon:{
      type:Boolean
    }
  },
  {
    timestamps: true,
  }
);


UserSchema.pre('save', async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );


  next();
});
UserSchema.statics.isUserExist = async function (
  email: string
): Promise<IUser | null> {
  return await User.findOne(
    { email },
    {  password: 1, role: 1, email:1 }
  );
};
UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};
export const User = model<IUser, UserModel>('User', UserSchema);
