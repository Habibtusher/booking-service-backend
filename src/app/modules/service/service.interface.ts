import { Model, Types } from "mongoose";
import { ICategory } from "../category/category.interface";
import { IReview } from "../reviews/reviews.interface";

export type IService = {
    name:string;
    price:number;
    category: Types.ObjectId | ICategory;
    image:string;
    description:string;
    reviews?:IReview[];

}

export type ServiceModel = Model<IService>