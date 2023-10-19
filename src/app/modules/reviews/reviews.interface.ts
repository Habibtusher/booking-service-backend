import mongoose, {  Model, Types } from "mongoose";
import { IUser } from "../user/user.interface";
import { IService } from "../service/service.interface";

export type IReview = {
    user:Types.ObjectId;
    rating: number;
    comment?: string;
    service: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
  };

export type ReviewModel = Model<IReview>