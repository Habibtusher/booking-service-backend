import { Model, Types } from "mongoose";
import { ICategory } from "../category/category.interface";

export type IService = {
    name:string;
    price:number;
    category: Types.ObjectId | ICategory;
    image:string;

}

export type ServiceModel = Model<IService>