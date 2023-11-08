import mongoose, { Schema } from 'mongoose';
import { IService, ServiceModel } from './service.interface';
import { reviewSchema } from '../reviews/reviews.model';

const serviceSchema = new Schema<IService, ServiceModel>(
  {
    name: {
      type: String,
      required: true,
    },
    price: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    image: String,
    description: String,
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
export const Service = mongoose.model<IService>('Service', serviceSchema);