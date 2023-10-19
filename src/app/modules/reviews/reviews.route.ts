import express from 'express';
import { ReviewController } from './reviews.controller';
const router = express.Router();
router.post('/', ReviewController.insertIntoDB);
router.get('/', ReviewController.getAllFromDB);
export const ReviewsRoutes = router;
