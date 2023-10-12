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
      enum: ['male', 'female'],
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
        select: 0
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

export const User = model<IUser, UserModel>('User', UserSchema);
