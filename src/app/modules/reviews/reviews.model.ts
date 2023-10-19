import mongoose, { Schema } from 'mongoose';
import { IReview, ReviewModel } from './reviews.interface';

export const reviewSchema = new Schema<IReview, ReviewModel>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: String,
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Review = mongoose.model<IReview>('Review', reviewSchema);
